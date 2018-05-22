import React from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import { receiveUsername } from '../actions';
import ChatList from '../components/ChatList';
import CustomTextInput from '../components/CustomTextInput';
import { CHAT_PLACEHOLDER } from '../constants/strings';

// const sendButtonIcon = require('../assets/images/chat_send_icon.png');

class ChatScreen extends React.PureComponent {
  static propTypes = {
    username: PropTypes.string.isRequired,
    receiveUsername: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      getParam: PropTypes.func.isRequired,
    }).isRequired,
  };

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.name : 'User',
    };
  };

  constructor(props) {
    super(props);
    const { uid } = firebase.auth().currentUser;
    this.currentUserUid = uid;
    this.selectedUserUid = this.props.navigation.getParam('selectedUserUid');
    this.selectedUsername = this.props.navigation.getParam('name');
    this.chatsRef = firebase.database().ref(`chats/${this.currentUserUid}_${this.selectedUserUid}`);
  }

  handleChatSumbit = () => {
    const { username } = this.props;
    if (username === '') {
      firebase
        .database()
        .ref(`users/${this.currentUserUid}/name`)
        .once('value')
        .then((dataSnapshot) => {
          this.props.receiveUsername(dataSnapshot.val());
          this.chatsRef.push({
            sender: this.currentUserUid,
            senderName: dataSnapshot.val(),
            body: this.message,
          });
        })
        .catch(() => {});
    } else {
      this.chatsRef.push({
        sender: this.currentUserUid,
        senderName: username,
        body: this.message,
      });
    }
    this.customTextInput.clear();
  };

  render() {
    return (
      <View>
        <View>
          <ChatList
            id1={this.currentUserUid}
            id2={this.selectedUserUid}
            ref={(ref) => {
              this.chatList = ref;
            }}
          />
        </View>
        <View>
          <CustomTextInput
            highlightColor="white"
            highlightTextColor="black"
            placeholder={CHAT_PLACEHOLDER}
            width={200}
            onChangeText={(message) => {
              this.message = message;
            }}
            ref={(ref) => {
              this.customTextInput = ref;
            }}
          />

          <Button title="Gui" onPress={() => this.handleChatSumbit()} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  username: state.username,
});

const mapDispatchToProps = dispatch => ({
  receiveUsername: id => dispatch(receiveUsername(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen);
