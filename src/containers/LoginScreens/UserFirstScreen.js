import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import MyButton from '../../components/common/MyButton';
import { LOGIN_SCREEN, REGISTER_SCREEN } from '../../constants/strings/screenNames';
// import { CustomFontStyle } from '../../constants/styles';

// const { ProTextRegular, ProTextBold } = CustomFontStyle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 46,
    backgroundColor: '#FFF',
  },
  backgroundImageStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  headerContainer: {
    alignSelf: 'flex-start',
  },
  footerContainer: {
    height: 180,
    marginBottom: 23,
    justifyContent: 'space-around',
    alignSelf: 'stretch',
  },
  footerTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyImage: {
    width: 359,
    height: 354,
    position: 'absolute',
    top: 97,
    bottom: 216,
    right: 16,
    left: 0,
  },
  logo: {
    width: 204,
    height: 56,
  },
  bigDescription: {
    fontSize: 36,
    color: '#FFF',
    marginTop: 35,
  },
  smallDescriptionContainer: {
    marginTop: 16,
  },
  smallDescription: {
    fontSize: 16,
    color: '#FFF',
    marginTop: 5,
  },
  orText: {
    fontSize: 15,
    color: '#FFF',
  },
  registerText: {
    fontSize: 18,
    color: '#FFF',
  },
});

const backgroundImage = require('../../assets/images/loginScreens/firstScreenBackground.png');
const bodyImage = require('../../assets/images/loginScreens/firstScreenBodyImage.png');
const logo = require('../../assets/images/loginScreens/logo.png');
const fbLogo = require('../../assets/images/loginScreens/fbLogo.png');

class UserFirstScreen extends React.PureComponent {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  handleLoginPress = () => {
    this.props.navigation.navigate(LOGIN_SCREEN);
  };

  handleRegisterPress = () => {
    this.props.navigation.navigate(REGISTER_SCREEN);
  };

  renderLogoAndAppDescription = () => (
    <View style={styles.headerContainer}>
      <Image style={styles.logo} source={logo} />
      <Text style={styles.bigDescription}>Mở ra kho tri thức</Text>
      <View style={styles.smallDescriptionContainer}>
        <Text style={styles.smallDescription}>Hỏi. Chia sẻ. Bàn luận.</Text>
        <Text style={styles.smallDescription}>Nhận giải đáp từ chuyên gia.</Text>
      </View>
    </View>
  );

  renderFooterButtonsAndTexts = () => (
    <View style={styles.footerContainer}>
      <MyButton
        text="Đăng nhập"
        color="rgb(32, 150, 255)"
        textColor="rgb(255, 255, 255)"
        borderColor="rgb(32, 150, 255)"
        onPress={this.handleLoginPress}
      />
      <MyButton
        text="Đăng nhập bằng Facebook"
        color="rgb(255, 255, 255)"
        textColor="rgb(63, 81, 181)"
        iconWidth={20}
        iconHeight={20}
        borderColor="rgb(255, 255, 255)"
        icon={fbLogo}
      />
      <View style={styles.footerTextContainer}>
        <Text style={styles.orText}>hoặc</Text>
        <Text style={[styles.registerText, { marginTop: 8 }]} onPress={this.handleRegisterPress}>
          Đăng ký tài khoản mới
        </Text>
      </View>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.backgroundImageStyle} source={backgroundImage} resizeMode="contain" />
        <Image style={styles.bodyImage} source={bodyImage} />
        {this.renderLogoAndAppDescription()}
        {this.renderFooterButtonsAndTexts()}
      </View>
    );
  }
}

export default UserFirstScreen;
