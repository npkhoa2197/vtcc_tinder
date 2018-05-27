import React from 'react';
import { View, FlatList, StyleSheet, Modal, TouchableWithoutFeedback } from 'react-native';
import { mockDataChatMessageDetail } from '../../../constants/mockData';
import ChatMessageDetailItem from '../../../components/chatComponents/ChatMessageDetailItem';
import OptionItem from '../../../components/common/OptionItem';

const deleteIcon = require('../../../assets/images/chatScreens/chatMessageDetailOptionItemDeleteMessageIcon.png');
const copyIcon = require('../../../assets/images/chatScreens/chatMessageDetailOptionItemCopyMessageIcon.png');
const cancelIcon = require('../../../assets/images/chatScreens/chatMessageDetailOptionItemCancelIcon.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 16,
  },
});

class ChatMessageDetailScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
    };
  }

  onLongPress = () => {
    this.setState({ modalVisible: true });
  };

  onModalClose = () => {
    this.setState({ modalVisible: false });
  };

  keyExtractor = item => item.id;
  renderItem = item => <ChatMessageDetailItem item={item} onLongPress={this.onLongPress} />;

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={mockDataChatMessageDetail}
          keyExtractor={this.keyExtractor}
          renderItem={({ item }) => this.renderItem(item)}
        />
        <Modal animationType="slide" transparent visible={this.state.modalVisible}>
          <TouchableWithoutFeedback onPress={() => this.onModalClose()}>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
              <OptionItem icon={deleteIcon} text="Xóa tin nhắn" />
              <OptionItem icon={copyIcon} text="Copy" />
              <OptionItem icon={cancelIcon} text="Thôi" />
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    );
  }
}

export default ChatMessageDetailScreen;
