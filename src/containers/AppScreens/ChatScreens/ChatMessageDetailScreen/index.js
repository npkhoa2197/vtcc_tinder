import React from 'react';
import {
  View,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  StatusBar,
  TextInput,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import firebase from 'firebase';
import ChatMessageDetailItem from '../../../../components/chatComponents/ChatMessageDetailItem';
import OptionItem from '../../../../components/common/OptionItem';
import Header from '../../../../components/common/Header';
import { styles } from './styles';
import {
  requestFetchChatMessage,
  stopRequestFetchChatMessage,
  requestSendMessage,
} from '../../../../actions/chatActions';

const deleteIcon = require('../../../../assets/images/chatScreens/chatMessageDetailOptionItemDeleteMessageIcon.png');
const copyIcon = require('../../../../assets/images/chatScreens/chatMessageDetailOptionItemCopyMessageIcon.png');
const cancelIcon = require('../../../../assets/images/chatScreens/chatMessageDetailOptionItemCancelIcon.png');
const viewProfileIcon = require('../../../../assets/images/chatScreens/chatMessageDetailOptionViewProfileIcon.png');
const notiIcon = require('../../../../assets/images/chatScreens/chatMessageDetailOptionNotiIcon.png');
const blockIcon = require('../../../../assets/images/chatScreens/chatMessageDetailOptionBlockIcon.png');
const rightButtonIcon = require('../../../../assets/images/chatScreens/chatMessageDetailOptionIcon.png');
const sendButtonIcon = require('../../../../assets/images/chatScreens/sendButtonIcon.png');

class ChatMessageDetailScreen extends React.PureComponent {
  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
      senderId: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      seen: PropTypes.bool.isRequired,
    })).isRequired,
    requestChatMessages: PropTypes.func.isRequired,
    stopRequestChatMessages: PropTypes.func.isRequired,
    requestSendMessage: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
      getParam: PropTypes.func.isRequired,
    }).isRequired,
  };
  constructor(props) {
    super(props);

    this.chatFriendAvatar = this.props.navigation.getParam('chatFriendAvatar');
    this.chatDocId = this.props.navigation.getParam('chatDocId');
    this.chatFriendName = this.props.navigation.getParam('chatFriendName');

    this.currentUid = firebase.auth().currentUser.uid;

    this.state = {
      modalMessageOptionVisible: false,
      modalMainOptionVisible: false,
    };
  }

  componentDidMount() {
    if (this.props.messages.length === 0) {
      this.props.requestChatMessages(this.chatDocId);
    }
  }

  onLongPress = () => {
    this.setState({ ...this.state, modalMessageOptionVisible: true });
  };

  onRightButtonHeaderPress = () => {
    this.setState({ ...this.state, modalMainOptionVisible: true });
  };

  onModalMessageOptionClose = () => {
    this.setState({ ...this.state, modalMessageOptionVisible: false });
  };

  onModalMainOptionClose = () => {
    this.setState({ ...this.state, modalMainOptionVisible: false });
  };

  handleSendButtonPress = () => {
    this.textInputRef.clear();
    // this.messageListRef.scrollToEnd();
    this.props.requestSendMessage(this.chatDocId, this.currentUid, this.message);
  };

  keyExtractor = item => item.id;

  renderItem = item => (
    <ChatMessageDetailItem
      item={item}
      chatDocId={this.chatDocId}
      avatar={this.chatFriendAvatar}
      onLongPress={this.onLongPress}
    />
  );

  renderList = messages => (
    <FlatList
      data={messages}
      keyExtractor={this.keyExtractor}
      renderItem={({ item }) => this.renderItem(item)}
      ListHeaderComponent={() => <View style={{ height: 16 }} />}
      ref={(ref) => {
        this.messageListRef = ref;
      }}
      onContentSizeChange={() => this.messageListRef.scrollToEnd({ animated: true })}
      onLayout={() => this.messageListRef.scrollToEnd({ animated: true })}
    />
  );

  renderInputField = () => (
    <View style={styles.inputFieldContainer}>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Nhập nội dung chat"
          placeholderTextColor="rgb(174, 180, 187)"
          onChangeText={(message) => {
            this.message = message;
          }}
          ref={(ref) => {
            this.textInputRef = ref;
          }}
        />
      </View>
      <TouchableWithoutFeedback onPress={this.handleSendButtonPress}>
        <Image style={styles.icon} source={sendButtonIcon} />
      </TouchableWithoutFeedback>
    </View>
  );

  renderModalMessageOption = () => (
    <Modal animationType="slide" transparent visible={this.state.modalMessageOptionVisible}>
      <TouchableWithoutFeedback onPress={() => this.onModalMessageOptionClose()}>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <OptionItem icon={deleteIcon} text="Xóa tin nhắn" />
          <OptionItem icon={copyIcon} text="Copy" />
          <OptionItem icon={cancelIcon} text="Thôi" />
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );

  renderModalMainOption = () => (
    <Modal animationType="slide" transparent visible={this.state.modalMainOptionVisible}>
      <TouchableWithoutFeedback onPress={() => this.onModalMainOptionClose()}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}
        >
          <OptionItem icon={viewProfileIcon} text="Xem hồ sơ" />
          <OptionItem icon={notiIcon} text="Thông báo" />
          <OptionItem icon={blockIcon} text="Chặn tin nhắn" />
          <OptionItem icon={deleteIcon} text="Xóa toàn bộ nội dung" />
          <OptionItem icon={cancelIcon} text="Thôi" />
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );

  render() {
    const { messages } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <Header
          headerText={this.chatFriendName}
          isBack
          onBackPress={() => this.props.navigation.goBack()}
          haveRightButton
          rightButtonIcon={rightButtonIcon}
          onRightButtonPress={this.onRightButtonHeaderPress}
        />
        {this.renderList(messages)}
        {this.renderInputField()}
        {this.renderModalMessageOption()}
        {this.renderModalMainOption()}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.chat.chats.messages,
});

const mapDispatchToProps = dispatch => ({
  requestChatMessages: chatDocId => dispatch(requestFetchChatMessage(chatDocId)),
  stopRequestChatMessages: () => dispatch(stopRequestFetchChatMessage()),
  requestSendMessage: (chatDocId, senderId, body, timestamp) =>
    dispatch(requestSendMessage(chatDocId, senderId, body, timestamp)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatMessageDetailScreen);
