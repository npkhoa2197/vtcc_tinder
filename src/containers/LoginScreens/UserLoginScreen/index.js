import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import CustomTextInputWithLabel from '../../../components/loginComponents/CustomTextInputWithLabel';
import MyButton from '../../../components/common/MyButton';
import { REGISTER_SCREEN, HOME_SCREEN } from '../../../constants/strings/screenNames';
import { styles } from './styles';

const backgroundImage = require('../../../assets/images/loginScreens/registerBackground.png');
const headerImage = require('../../../assets/images/loginScreens/loginScreenHeaderImage.png');
const fbLogo = require('../../../assets/images/loginScreens/fbLogo.png');

class UserLoginScreen extends React.PureComponent {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  handleRegisterPress = () => {
    this.props.navigation.navigate(REGISTER_SCREEN);
  };

  handleContinuePress = () => {
    this.props.navigation.navigate(HOME_SCREEN);
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
      />
      <CustomTextInputWithLabel label="Mật khẩu" placeholder="••••••••" secureTextEntry />
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
            onPress={this.handleContinuePress}
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
      </View>
    );
  }
}

export default UserLoginScreen;