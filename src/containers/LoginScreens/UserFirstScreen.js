import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import MyButton from '../../components/common/MyButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 46,
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
    marginBottom: 23,
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

const backgroundImage = require('../../assets/images/loginScreens/loginScreenBackground.png');
const bodyImage = require('../../assets/images/loginScreens/loginScreenBodyImage.png');
const logo = require('../../assets/images/loginScreens/logo.png');

class UserFirstScreen extends React.PureComponent {
  handleLoginPress = () => {};

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.backgroundImageStyle} source={backgroundImage} />
        <Image style={styles.bodyImage} source={bodyImage} />
        <View style={styles.headerContainer}>
          <Image style={styles.logo} source={logo} />
          <Text style={styles.bigDescription}>Mở ra kho tri thức</Text>
          <View style={styles.smallDescriptionContainer}>
            <Text style={styles.smallDescription}>Hỏi. Chia sẻ. Bàn luận.</Text>
            <Text style={styles.smallDescription}>Nhận giải đáp từ chuyên gia.</Text>
          </View>
        </View>
        <View style={styles.footerContainer}>
          <MyButton
            text="Đăng nhập"
            color="rgb(32, 150, 255)"
            textColor="rgb(255, 255, 255)"
            size="small"
          />
          <MyButton
            text="Đăng nhập bằng Facebook"
            color="rgb(255, 255, 255)"
            textColor="rgb(63, 81, 181)"
            size="small"
          />
          <View style={styles.footerTextContainer}>
            <Text style={styles.orText}>Hoặc</Text>
            <Text style={styles.registerText}>Đăng ký tài khoản mới</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default UserFirstScreen;
