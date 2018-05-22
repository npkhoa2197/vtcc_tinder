import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestLogin, passOnboard } from '../actions';
import LoadingSpinner from '../components/LoadingSpinner';
import LoginDialog from '../components/LoginDialog';
import { APP_NAME, LOGIN_BUTTON_TEXT, LOGIN_LATER_TEXT, FRIEND_SCREEN } from '../constants/strings';
import { LOGIN_BUTTON_COLOR, LOADING_SPINNER_COLOR } from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appNameStyle: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#0054A5',
  },
  skipLoginStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'grey',
  },
  btnContainer: {
    marginTop: 30,
    marginBottom: 20,
    zIndex: -1,
  },
});

class OnboardScreen extends React.Component {
  static propTypes = {
    isLoggingIn: PropTypes.bool.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    onboard: PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired,
    skipLogin: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  componentDidMount() {
    const { isLoggedIn, onboard, navigation } = this.props;
    if (isLoggedIn || onboard) {
      navigation.navigate(FRIEND_SCREEN);
    }
  }

  componentDidUpdate() {
    const { isLoggedIn, onboard, navigation } = this.props;
    if (isLoggedIn || onboard) {
      navigation.navigate(FRIEND_SCREEN);
    }
  }

  handleLoginPress = () => {
    this.loginDialogRef.show(
      () => {},
      (email, password) => {
        this.props.login(email, password);
      },
    );
  };

  render() {
    const { isLoggingIn, skipLogin } = this.props;
    if (!isLoggingIn) {
      return (
        <View style={styles.container}>
          <Text style={styles.appNameStyle}>{APP_NAME}</Text>
          <View style={styles.btnContainer}>
            <Button
              color={LOGIN_BUTTON_COLOR}
              title={LOGIN_BUTTON_TEXT}
              onPress={this.handleLoginPress}
            />
          </View>
          <Text style={styles.skipLoginStyle} onPress={() => skipLogin()}>
            {LOGIN_LATER_TEXT}
          </Text>
          <LoginDialog
            ref={(ref) => {
              this.loginDialogRef = ref;
            }}
          />
        </View>
      );
    }
    return <LoadingSpinner size="large" color={LOADING_SPINNER_COLOR} />;
  }
}

const mapStateToProps = state => ({
  isLoggingIn: state.login.isLoggingIn,
  isLoggedIn: state.login.isLoggedIn,
  onboard: state.onboard,
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(requestLogin(email, password)),
  skipLogin: () => dispatch(passOnboard()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OnboardScreen);
