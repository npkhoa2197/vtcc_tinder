import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CustomTextInputWithLabel from '../../../components/loginComponents/CustomTextInputWithLabel';
import MyButton from '../../../components/common/MyButton';
import LoadingSpinner from '../../../components/LoadingSpinner';
import { LOGIN_SCREEN, REGISTER_DONE_SCREEN } from '../../../constants/strings/screenNames';
import { styles } from './styles';
import { requestRegister } from '../../../actions/loginActions';
import ToastAlert from '../../../components/common/ToastAlert';

const backgroundImage = require('../../../assets/images/loginScreens/registerBackground.png');
const headerImage = require('../../../assets/images/loginScreens/registerHeaderImage.png');
const fbLogo = require('../../../assets/images/loginScreens/fbLogo.png');

class UserRegisterScreen extends React.PureComponent {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    isLoggingIn: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    requestRegister: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
      replace: PropTypes.func.isRequired,
    }).isRequired,
  };

  componentDidUpdate() {
    const { isLoggedIn, error } = this.props;
    if (isLoggedIn) {
      this.props.navigation.navigate(REGISTER_DONE_SCREEN);
    } else if (error !== '') {
      let notiText = '';
      switch (error) {
        case 'auth/email-already-in-use':
          notiText = 'Email đã được sử dụng';
          break;
        case 'auth/invalid-email':
          notiText = 'Email không hợp lệ';
          break;
        case 'auth/weak-password':
          notiText = 'Password yếu';
          break;
        default:
          break;
      }
      this.toastAlertRef.show(notiText);
    }
  }

  handleLoginPress = () => {
    this.props.navigation.replace(LOGIN_SCREEN);
  };

  handleContinuePress = () => {
    if (this.password !== this.retypedPassword) {
      this.toastAlertRef.show('Mật khẩu xác nhận không trùng khớp');
      return;
    }
    this.props.requestRegister(this.email, this.password);
  };

  renderHeader = () => (
    <View style={styles.headerContainer}>
      <Image style={styles.headerImage} source={headerImage} />
      <Text style={styles.textDescription}>
        Hệ thống đang trong giai đoạn thử nghiệm, vui lòng sử dụng số điện thoại Viettel để đăng ký.
      </Text>
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
      <CustomTextInputWithLabel
        label="Xác nhận mật khẩu"
        placeholder="••••••••"
        secureTextEntry
        onChangeText={(retypedPassword) => {
          this.retypedPassword = retypedPassword;
        }}
      />
    </View>
  );

  renderButtons = () => (
    <View style={styles.buttonContainer}>
      <MyButton
        text="Tiếp tục"
        color="rgb(63, 81, 181)"
        textColor="rgb(255, 255, 255)"
        iconWidth={20}
        iconHeight={20}
        borderColor="rgb(63, 81, 181)"
        onPress={this.handleContinuePress}
      />
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
  );

  renderFooterTexts = () => (
    <View style={styles.footerTextContainer}>
      <Text style={styles.footerText1}>Bạn đã có tài khoản? </Text>
      <Text style={styles.footerText2} onPress={this.handleLoginPress}>
        Đăng nhập
      </Text>
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
        {this.renderButtons()}
        {this.renderFooterTexts()}
        <LoadingSpinner visible={isLoggingIn} size="large" color="blue" />;
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
  isLoggingIn: state.login.isLoggingIn,
  isLoggedIn: state.login.isLoggedIn,
  error: state.login.error,
});

const mapDispatchToProps = dispatch => ({
  requestRegister: (email, password) => dispatch(requestRegister(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserRegisterScreen);
