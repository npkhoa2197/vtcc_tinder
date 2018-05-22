import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Filter from '../components/Filter';
import FriendList from '../components/FriendList';
import LoadingSpinner from '../components/LoadingSpinner';
import Footer from '../components/Footer';
import LoginDialog from '../components/LoginDialog';
import Header from '../components/Header';
import { setFilter, requestLogin } from '../actions';
import {
  HOTGIRL_SCREEN,
  FOOTER_LOGIN_BUTTON,
  NEW_FRIEND_FILTER_ID,
  NEW_FRIEND_FILTER_TEXT,
  MY_FRIEND_FILTER_ID,
  MY_FRIEND_FILTER_TEXT,
  HEADER_TEXT,
} from '../constants/strings';
import { FOOTER_LOGIN_BUTTON_COLOR, LOADING_SPINNER_COLOR } from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  filterContainer: {
    marginTop: 20,
    marginLeft: 15,
  },
});

class FriendsScreen extends React.Component {
  static propTypes = {
    isLoggingIn: PropTypes.bool.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    filter: PropTypes.string.isRequired,
    login: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    setFilterAction: PropTypes.func.isRequired,
  };

  handleNavigateHotgirls = () => {
    this.props.navigation.navigate(HOTGIRL_SCREEN);
  };

  renderRegisterButton = (isLoggedIn, login) => {
    if (!isLoggedIn) {
      return (
        <Footer
          backgroundColor={FOOTER_LOGIN_BUTTON_COLOR}
          textColor="white"
          text={FOOTER_LOGIN_BUTTON}
          onPress={() => {
            this.loginDialogRef.show(() => {}, (email, password) => login(email, password));
          }}
        />
      );
    }
    return <View />;
  };

  render() {
    const {
      isLoggingIn, isLoggedIn, setFilterAction, filter, login,
    } = this.props;
    const filterOptions = [
      { id: NEW_FRIEND_FILTER_ID, text: NEW_FRIEND_FILTER_TEXT },
      { id: MY_FRIEND_FILTER_ID, text: MY_FRIEND_FILTER_TEXT },
    ];
    if (!isLoggingIn) {
      return (
        <View style={styles.container}>
          <Header headerText={HEADER_TEXT} onHeaderButtonPress={this.handleNavigateHotgirls} />
          <View style={styles.filterContainer}>
            <Filter options={filterOptions} selected={filter} onSelectionChange={setFilterAction} />
          </View>
          <FriendList />
          {this.renderRegisterButton(isLoggedIn, login)}
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
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  setFilterAction: mode => dispatch(setFilter(mode)),
  login: (email, password) => dispatch(requestLogin(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendsScreen);
