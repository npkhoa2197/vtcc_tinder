import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import CustomTextInputWithLabel from '../../../components/loginComponents/CustomTextInputWithLabel';
import MyButton from '../../../components/common/MyButton';
import { LOGIN_SCREEN, REGISTER_DONE_SCREEN } from '../../../constants/strings/screenNames';
import { styles } from './styles';

const backgroundImage = require('../../../assets/images/loginScreens/registerBackground.png');
const headerImage = require('../../../assets/images/loginScreens/registerHeaderImage.png');
const fbLogo = require('../../../assets/images/loginScreens/fbLogo.png');

class UserRegisterScreen extends React.PureComponent {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  handleLoginPress = () => {
    this.props.navigation.navigate(LOGIN_SCREEN);
  };

  handleContinuePress = () => {
    this.props.navigation.navigate(REGISTER_DONE_SCREEN);
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
      />
      <CustomTextInputWithLabel label="Mật khẩu" placeholder="••••••••" secureTextEntry />
      <CustomTextInputWithLabel label="Xác nhận mật khẩu" placeholder="••••••••" secureTextEntry />
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
      </View>
    );
  }
}

export default UserRegisterScreen;
