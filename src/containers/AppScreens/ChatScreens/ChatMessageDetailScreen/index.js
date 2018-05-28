import React from 'react';
import { View, FlatList, Modal, TouchableWithoutFeedback, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { mockDataChatMessageDetail } from '../../../../constants/mockData';
import ChatMessageDetailItem from '../../../../components/chatComponents/ChatMessageDetailItem';
import OptionItem from '../../../../components/common/OptionItem';
import Header from '../../../../components/common/Header';
import { styles } from './styles';

const deleteIcon = require('../../../../assets/images/chatScreens/chatMessageDetailOptionItemDeleteMessageIcon.png');
const copyIcon = require('../../../../assets/images/chatScreens/chatMessageDetailOptionItemCopyMessageIcon.png');
const cancelIcon = require('../../../../assets/images/chatScreens/chatMessageDetailOptionItemCancelIcon.png');
const viewProfileIcon = require('../../../../assets/images/chatScreens/chatMessageDetailOptionViewProfileIcon.png');
const notiIcon = require('../../../../assets/images/chatScreens/chatMessageDetailOptionNotiIcon.png');
const blockIcon = require('../../../../assets/images/chatScreens/chatMessageDetailOptionBlockIcon.png');
const rightButtonIcon = require('../../../../assets/images/chatScreens/chatMessageDetailOptionIcon.png');

class ChatMessageDetailScreen extends React.PureComponent {
  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
      getParam: PropTypes.func.isRequired,
    }).isRequired,
  };
  constructor(props) {
    super(props);

    this.state = {
      modalMessageOptionVisible: false,
      modalMainOptionVisible: false,
    };
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

  keyExtractor = item => item.id;

  renderItem = item => <ChatMessageDetailItem item={item} onLongPress={this.onLongPress} />;

  renderList = () => (
    <View style={styles.messageListContainer}>
      <FlatList
        data={mockDataChatMessageDetail}
        keyExtractor={this.keyExtractor}
        renderItem={({ item }) => this.renderItem(item)}
      />
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
    const name = this.props.navigation.getParam('chatFriendName');
    return (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <Header
          headerText={name}
          isBack
          onBackPress={() => this.props.navigation.goBack()}
          haveRightButton
          rightButtonIcon={rightButtonIcon}
          onRightButtonPress={this.onRightButtonHeaderPress}
        />
        {this.renderList()}
        {this.renderModalMessageOption()}
        {this.renderModalMainOption()}
      </View>
    );
  }
}

export default ChatMessageDetailScreen;