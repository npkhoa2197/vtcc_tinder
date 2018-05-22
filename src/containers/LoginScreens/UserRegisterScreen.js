import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CustomTextInputWithLabel from '../../components/loginComponents/CustomTextInputWithLabel';
import MyButton from '../../components/common/MyButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  backgroundImageStyle: {
    opacity: 0.05,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  headerContainer: {
    alignItems: 'center',
    paddingTop: 62,
  },
  inputFieldContainer: {
    height: 252,
    justifyContent: 'space-evenly',
    alignSelf: 'flex-start',
  },
  buttonContainer: {
    height: 128,
    marginBottom: 23,
    justifyContent: 'space-around',
    alignSelf: 'stretch',
  },
  footerTextContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginBottom: 21,
    marginLeft: 19,
  },
  headerImage: {
    width: 86,
    height: 93,
  },
  textDescription: {
    marginTop: 16,
    textAlign: 'center',
    fontSize: 15,
    color: '#000',
  },
  footerText1: {
    fontSize: 17,
  },
  footerText2: {
    fontSize: 17,
    color: 'rgb(63, 81, 181)',
  },
});

const backgroundImage = require('../../assets/images/loginScreens/registerBackground.png');
const headerImage = require('../../assets/images/loginScreens/registerHeaderImage.png');
const fbLogo = require('../../assets/images/loginScreens/fbLogo.png');

class UserRegisterScreen extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.backgroundImageStyle}
          source={backgroundImage}
          resizeMode="contain"
          resizeMethod="resize"
        />
        <View style={styles.headerContainer}>
          <Image style={styles.headerImage} source={headerImage} />
          <Text style={styles.textDescription}>
            Hệ thống đang trong giai đoạn thử nghiệm, vui lòng sử dụng số điện thoại Viettel để đăng
            ký.
          </Text>
        </View>
        <View style={styles.inputFieldContainer}>
          <CustomTextInputWithLabel
            label="Email / Số điện thoại"
            placeholder="Nhập email hoặc số điện thoại của bạn"
          />
          <CustomTextInputWithLabel label="Mật khẩu" placeholder="••••••••" secureTextEntry />
          <CustomTextInputWithLabel
            label="Xác nhận mật khẩu"
            placeholder="••••••••"
            secureTextEntry
          />
        </View>
        <View style={styles.buttonContainer}>
          <MyButton
            text="Tiếp tục"
            color="rgb(32, 150, 255)"
            textColor="rgb(255, 255, 255)"
            size="small"
          />
          <MyButton
            text="Đăng ký bằng Facebook"
            color="rgb(255, 255, 255)"
            textColor="rgb(63, 81, 181)"
            size="small"
            icon={fbLogo}
          />
        </View>
        <View style={styles.footerTextContainer}>
          <Text style={styles.footerText1}>Bạn đã có tài khoản? </Text>
          <Text style={styles.footerText2}>Đăng nhập</Text>
        </View>
      </View>
    );
  }
}

export default UserRegisterScreen;
