import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';
import { mockDataChatRequest } from '../../../constants/mockData';
import ChatRequestItem from '../../../components/chatComponents/ChatRequestItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#FFF',
  },
  headerText: {
    fontSize: 14,
    color: 'rgb(48, 49, 55)',
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 20,
  },
  separator: {
    height: 1,
    backgroundColor: 'rgb(230, 230, 230)',
  },
});

class ChatRequestScreen extends React.PureComponent {
  keyExtractor = item => item.id;

  renderItemSeparator = () => <View style={styles.separator} />;

  renderItem = item => <ChatRequestItem item={item} />;

  renderSectionHeader = title => <Text style={styles.headerText}>{title}</Text>;

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {
              title: `Bạn nhận được ${mockDataChatRequest.length} yêu cầu chat.`,
              data: mockDataChatRequest,
            },
          ]}
          keyExtractor={this.keyExtractor}
          renderItem={({ item }) => this.renderItem(item)}
          renderSectionHeader={({ section: { title } }) => this.renderSectionHeader(title)}
          ItemSeparatorComponent={this.renderItemSeparator}
          SectionSeparatorComponent={this.renderItemSeparator}
          stickySectionHeadersEnabled={false}
        />
      </View>
    );
  }
}

export default ChatRequestScreen;
