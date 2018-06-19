import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CustomTextInputWithLabel from '../../../components/loginComponents/CustomTextInputWithLabel';
import MyButton from '../../../components/common/MyButton';
import LoadingSpinner from '../../../components/LoadingSpinner';
import ToastAlert from '../../../components/common/ToastAlert';
import { REGISTER_SCREEN, HOME_SCREEN } from '../../../constants/strings/screenNames';
import { styles } from './styles';
import { requestLogin } from '../../../actions/loginActions';

const backgroundImage = require('../../../assets/images/loginScreens/registerBackground.png');
const headerImage = require('../../../assets/images/loginScreens/loginScreenHeaderImage.png');
const fbLogo = require('../../../assets/images/loginScreens/fbLogo.png');

class UserLoginScreen extends React.PureComponent {
  static propTypes = {
    isLoggingIn: PropTypes.bool.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    requestLogin: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
      replace: PropTypes.func.isRequired,
    }).isRequired,
  };

  componentDidUpdate() {
    const { isLoggedIn, error } = this.props;
    if (isLoggedIn) {
      this.props.navigation.navigate(HOME_SCREEN);
    } else if (error !== '') {
      let notiText = '';
      switch (error) {
        case 'auth/invalid-email':
          notiText = 'Email không hợp lệ';
          break;
        case 'auth/user-disabled':
          notiText = 'Có lỗi xảy ra';
          break;
        case 'auth/user-not-found':
        case 'auth/wrong-password':
          notiText = 'Email hoặc mật khẩu không đúng';
          break;
        default:
          break;
      }
      this.toastAlertRef.show(notiText);
    }
  }

  handleRegisterPress = () => {
    this.props.navigation.replace(REGISTER_SCREEN);
  };

  handleLoginPress = () => {
    this.props.requestLogin(this.email, this.password);
  };

  renderHeader = () => (
    <View style={styles.headerContainer}>
      <Image style={styles.headerImage} source={headerImage} />
    </View>
  );

  renderTextInputs = () => (
    <View style={styles.inputFieldContainer}>
      <CustomTextInputWithLabel
        label="Email / Số điện thoại"
        placeholder="Nhập email hoặc số điện thoại của bạn"
        onChangeText={(email) => {
          this.email = email;
        }}
      />
      <CustomTextInputWithLabel
        label="Mật khẩu"
        placeholder="••••••••"
        secureTextEntry
        onChangeText={(password) => {
          this.password = password;
        }}
      />
      <Text>Ghi nhớ tài khoản</Text>
    </View>
  );

  renderFooterButtonsAndTexts = () => (
    <View style={styles.buttonContainer}>
      <View style={styles.buttonContainerUpper}>
        <View style={{ marginBottom: 6 }}>
          <MyButton
            text="Đăng nhập"
            color="rgb(63, 81, 181)"
            textColor="rgb(255, 255, 255)"
            borderColor="rgb(63, 81, 181)"
            onPress={this.handleLoginPress}
          />
        </View>
        <Text style={styles.forgetPasswordText}>Quên mật khẩu?</Text>
      </View>
      <View style={styles.buttonContainerLower}>
        <View style={{ marginBottom: 24 }}>
          <MyButton
            text="Đăng ký bằng Facebook"
            color="rgb(255, 255, 255)"
            textColor="rgb(63, 81, 181)"
            iconWidth={20}
            iconHeight={20}
            icon={fbLogo}
            borderColor="rgb(59, 87, 157)"
          />
        </View>
        <View style={styles.footerTextContainer}>
          <Text style={styles.footerText1}>Bạn chưa có tài khoản? </Text>
          <Text style={styles.footerText2} onPress={this.handleRegisterPress}>
            Đăng ký
          </Text>
        </View>
      </View>
    </View>
  );

  render() {
    const { isLoggingIn } = this.props;

    return (
      <View style={styles.container}>
        <Image
          style={styles.backgroundImageStyle}
          source={backgroundImage}
          resizeMode="contain"
          resizeMethod="resize"
        />
        {this.renderHeader()}
        {this.renderTextInputs()}
        {this.renderFooterButtonsAndTexts()}
        <LoadingSpinner visible={isLoggingIn} size="large" color="blue" />
        <ToastAlert
          ref={(ref) => {
            this.toastAlertRef = ref;
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.login.isLoggedIn,
  isLoggingIn: state.login.isLoggingIn,
  error: state.login.error,
});

const mapDispatchToProps = dispatch => ({
  requestLogin: (email, password) => dispatch(requestLogin(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserLoginScreen);
