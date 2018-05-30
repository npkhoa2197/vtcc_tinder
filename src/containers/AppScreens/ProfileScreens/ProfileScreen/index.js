import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { firestore } from '../../../../utilities/configFirebase';
import { styles } from './styles';
import MyButton from '../../../../components/common/MyButton';
import { requestLogout } from '../../../../actions/loginActions';
import { LOGIN_SCREEN } from '../../../../constants/strings/screenNames';

class ProfileScreen extends React.PureComponent {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    requestLogout: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  componentDidUpdate() {
    const { isLoggedIn } = this.props;
    if (!isLoggedIn) {
      this.props.navigation.navigate(LOGIN_SCREEN);
    }
  }

  handleLogoutPress = () => {
    this.props.requestLogout();
  };

  handleTestFirestorePress = () => {
    firestore.collection('users').onSnapshot((querySnapshot) => {
      querySnapshot.forEach((snapshot) => {
        console.log(snapshot.data());
      });
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <MyButton
          text="Đăng xuất"
          color="rgb(63, 81, 181)"
          textColor="rgb(255, 255, 255)"
          borderColor="rgb(63, 81, 181)"
          onPress={this.handleLogoutPress}
        />
        <MyButton
          text="test firestore"
          color="rgb(63, 81, 181)"
          textColor="rgb(255, 255, 255)"
          borderColor="rgb(63, 81, 181)"
          onPress={this.handleTestFirestorePress}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.login.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  requestLogout: () => dispatch(requestLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
