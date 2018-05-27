import React from 'react';
import { View, StyleSheet } from 'react-native';
import OptionItem from '../../../components/common/OptionItem';

const deleteIcon = require('../../../assets/images/chatScreens/chatMessageDetailOptionItemDeleteMessageIcon.png');
const copyIcon = require('../../../assets/images/chatScreens/chatMessageDetailOptionItemCopyMessageIcon.png');
const cancelIcon = require('../../../assets/images/chatScreens/chatMessageDetailOptionItemCancelIcon.png');

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
});

class ChatMessageDetailDeleteMessageScreen extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <OptionItem icon={deleteIcon} text="Xóa tin nhắn" />
        <OptionItem icon={copyIcon} text="Copy" />
        <OptionItem icon={cancelIcon} text="Thôi" />
      </View>
    );
  }
}

export default ChatMessageDetailDeleteMessageScreen;
