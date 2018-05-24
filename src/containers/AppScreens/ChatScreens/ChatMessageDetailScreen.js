import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { mockDataChatMessageDetail } from '../../../constants/mockData';
import ChatMessageDetailItem from '../../../components/chatComponents/ChatMessageDetailItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});

class ChatMessageDetailScreen extends React.PureComponent {
  keyExtractor = item => item.id;
  renderItem = item => <ChatMessageDetailItem item={item} />;

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={mockDataChatMessageDetail}
          keyExtractor={this.keyExtractor}
          renderItem={({ item }) => this.renderItem(item)}
        />
      </View>
    );
  }
}

export default ChatMessageDetailScreen;
