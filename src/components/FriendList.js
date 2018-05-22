import React from 'react';
import { View, ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';
import PropTypes from 'prop-types';

import {
  requestFriends,
  requestMyFriends,
  stopRequestFriends,
  stopRequestMyFriends,
  requestLogin,
} from '../actions';

import LoginDialog from './LoginDialog';
import VerticalList from './VerticalList';

import { FRIEND, NEW_FRIEND_FILTER_ID } from '../constants/strings';

class FriendList extends React.PureComponent {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    friends: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isFriend: PropTypes.bool.isRequired,
      description: PropTypes.string,
      avatar: PropTypes.string,
    })).isRequired,
    requestFriends: PropTypes.func.isRequired,
    requestMyFriends: PropTypes.func.isRequired,
    stopRequestFriends: PropTypes.func.isRequired,
    stopRequestMyFriends: PropTypes.func.isRequired,
    requestLogin: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.requestFriends();
    this.props.requestMyFriends();
  }

  componentWillUnmount() {
    this.props.stopRequestFriends();
    this.props.stopRequestMyFriends();
  }

  handleAddFriend = (id, name) => {
    if (!this.props.isLoggedIn) {
      this.loginDialogRef.show(
        () => {},
        (email, password) => {
          this.props.requestLogin(email, password);
        },
      );
    } else {
      const { uid } = firebase.auth().currentUser;
      firebase
        .database()
        .ref(`friends/${uid}/${id}`)
        .set(true)
        .then(() => {
          ToastAndroid.show(`Bạn đã kết bạn với ${name}`, ToastAndroid.SHORT);
        });
      firebase
        .database()
        .ref(`friends/${id}/${uid}`)
        .set(true);
    }
  };

  handleRemoveFriend = (id, name) => {
    const { uid } = firebase.auth().currentUser;
    firebase
      .database()
      .ref(`friends/${uid}/${id}`)
      .set(null)
      .then(() => {
        ToastAndroid.show(`Bạn đã hủy kết bạn với ${name}`, ToastAndroid.SHORT);
      });
    firebase
      .database()
      .ref(`friends/${id}/${uid}`)
      .set(null)
      .then(() => {
        ToastAndroid.show(`Bạn đã hủy kết bạn với ${name}`, ToastAndroid.SHORT);
      });
  };

  render() {
    return (
      <View>
        <VerticalList
          friends={this.props.friends}
          addFriend={this.handleAddFriend}
          removeFriend={this.handleRemoveFriend}
          type={FRIEND}
        />
        <LoginDialog
          ref={(ref) => {
            this.loginDialogRef = ref;
          }}
        />
      </View>
    );
  }
}

const getVisibleFriends = (filter, newFriends, myFriends) =>
  (filter === NEW_FRIEND_FILTER_ID
    ? newFriends
    : newFriends.filter(friend => myFriends.includes(friend.id)));

const mapStateToProps = state => ({
  isLoggedIn: state.login.isLoggedIn,
  friends: getVisibleFriends(state.filter, state.friends.newFriends, state.friends.myFriends),
});

const mapDispatchToProps = dispatch => ({
  requestLogin: (email, password) => dispatch(requestLogin(email, password)),
  requestFriends: () => dispatch(requestFriends()),
  requestMyFriends: () => dispatch(requestMyFriends()),
  stopRequestFriends: () => dispatch(stopRequestFriends()),
  stopRequestMyFriends: () => dispatch(stopRequestMyFriends()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendList);
