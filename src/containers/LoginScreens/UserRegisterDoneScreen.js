import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import MyButton from '../../components/common/MyButton';
import { HOME_SCREEN } from '../../constants/strings/screenNames';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: 23,
    paddingRight: 15,
    backgroundColor: '#FFF',
  },
  headerImageBackground: {
    position: 'absolute',
    top: 67,
    bottom: 446,
    width: 337,
    height: 134,
  },
  headerContainer: {
    alignItems: 'center',
    paddingTop: 72,
    marginBottom: 88,
  },
  buttonContainer: {
    marginBottom: 52,
    alignSelf: 'stretch',
  },
  bodyImage: {
    marginBottom: 30,
    width: 206,
    height: 228,
  },
  headerText1: {
    paddingTop: 49,
    paddingBottom: 16,
    textAlign: 'center',
    fontSize: 24,
    color: 'rgb(63, 81, 181)',
  },
  headerText2: {
    textAlign: 'center',
    fontSize: 15,
  },
});

const headerImageBackground = require('../../assets/images/loginScreens/registerScreenDoneHeaderBackground.png');
const bodyImage = require('../../assets/images/loginScreens/registerDoneScreenBodyImage.png');

class UserRegisterDoneScreen extends React.PureComponent {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  handleStartPress = () => {
    this.props.navigation.navigate(HOME_SCREEN);
  };

  renderHeader = () => (
    <View style={styles.headerContainer}>
      <Image
        style={styles.headerImageBackground}
        source={headerImageBackground}
        resizeMode="center"
        resizeMethod="resize"
      />
      <Text style={styles.headerText1}>Đăng kí thành công</Text>
      <Text style={styles.headerText2}>
        Dòng thông tin chúc mừng người dùng đã đăng ký tài khoản thành công.
      </Text>
    </View>
  );

  renderButton = () => (
    <View style={styles.buttonContainer}>
      <MyButton
        text="Bắt đầu"
        color="rgb(63, 81, 181)"
        textColor="rgb(255, 255, 255)"
        borderColor="rgb(63, 81, 181)"
        onPress={this.handleStartPress}
      />
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <Image style={styles.bodyImage} source={bodyImage} />
        {this.renderButton()}
      </View>
    );
  }
}

export default UserRegisterDoneScreen;
