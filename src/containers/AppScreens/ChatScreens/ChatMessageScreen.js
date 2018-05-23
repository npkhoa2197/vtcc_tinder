import React from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';
import ChatMessageItem from '../../../components/chatComponents/ChatMessageItem';
import { mockDataChatMessage, mockDataChatRequest } from '../../../constants/mockData';
import ChatRequestItem from '../../../components/chatComponents/ChatRequestItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  separator: {
    height: 1,
    backgroundColor: 'rgb(230, 230, 230)',
  },
  header: {
    marginLeft: 15,
    color: 'rgb(94, 96, 112)',
  },
});

class ChatMessageScreen extends React.PureComponent {
  keyExtractor = item => item.id;

  renderItemSeparator = () => <View style={styles.separator} />;

  render() {
    return (
      <SectionList
        sections={[{ title: 'Yêu cầu chat', data: mockDataChatRequest }]}
        keyExtractor={this.keyExtractor}
        renderItem={({ item }) => <ChatRequestItem key={item.id} item={item} />}
        renderSectionHeader={({ section: { title } }) => <Text style={styles.header}>{title}</Text>}
        ItemSeparatorComponent={this.renderItemSeparator}
      />
    );
  }
}

export default ChatMessageScreen;
