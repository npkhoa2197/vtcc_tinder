import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import MyButton from '../../../components/common/MyButton';
import { HOME_SCREEN } from '../../../constants/strings/screenNames';
import { styles } from './styles';

const headerImageBackground = require('../../../assets/images/loginScreens/registerScreenDoneHeaderBackground.png');
const bodyImage = require('../../../assets/images/loginScreens/registerDoneScreenBodyImage.png');

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
