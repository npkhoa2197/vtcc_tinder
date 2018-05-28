import React from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';
import ChatMessageItem from '../../../components/chatComponents/ChatMessageItem';
import { mockDataChatMessage, mockDataChatRequest } from '../../../constants/mockData';
import ChatRequestItem from '../../../components/chatComponents/ChatRequestItem';
import {
  CHAT_MESSAGE_SCREEN_SECTIONLIST_REQUESTCHAT,
  CHAT_MESSAGE_SCREEN_SECTIONLIST_CHATMESSAGE,
} from '../../../constants/strings/screenNames';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#FFF',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
  },
  requestNumberBackground: {
    backgroundColor: 'rgb(245, 166, 35)',
    borderRadius: 20,
    borderColor: 'rgb(245, 166, 35)',
  },
  separator: {
    height: 1,
    backgroundColor: 'rgb(230, 230, 230)',
  },
  headerText: {
    fontSize: 14,
    color: 'rgb(94, 96, 112)',
  },
  requestNumber: {
    fontSize: 14,
    color: '#FFF',
    paddingLeft: 8,
    paddingRight: 8,
  },
});

class ChatMessageScreen extends React.PureComponent {
  keyExtractor = item => item.id;

  renderSectionHeader = (title) => {
    switch (title) {
      case CHAT_MESSAGE_SCREEN_SECTIONLIST_REQUESTCHAT:
        return (
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{title}</Text>
            <View style={styles.requestNumberBackground}>
              <Text style={styles.requestNumber}>{mockDataChatRequest.length}</Text>
            </View>
          </View>
        );
      case CHAT_MESSAGE_SCREEN_SECTIONLIST_CHATMESSAGE:
        return (
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{title}</Text>
          </View>
        );
      default:
        break;
    }

    return <View />;
  };

  renderItem = (item, section) => {
    switch (section.title) {
      case CHAT_MESSAGE_SCREEN_SECTIONLIST_REQUESTCHAT:
        return <ChatRequestItem item={item} />;
      case CHAT_MESSAGE_SCREEN_SECTIONLIST_CHATMESSAGE:
        return <ChatMessageItem item={item} />;
      default:
        break;
    }
    return <View />;
  };

  renderItemSeparator = () => <View style={styles.separator} />;

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {
              title: CHAT_MESSAGE_SCREEN_SECTIONLIST_REQUESTCHAT,
              data: mockDataChatRequest.slice(mockDataChatRequest.length - 1),
            },
            { title: CHAT_MESSAGE_SCREEN_SECTIONLIST_CHATMESSAGE, data: mockDataChatMessage },
          ]}
          keyExtractor={this.keyExtractor}
          renderItem={({ item, section }) => this.renderItem(item, section)}
          renderSectionHeader={({ section: { title } }) => this.renderSectionHeader(title)}
          ItemSeparatorComponent={this.renderItemSeparator}
          SectionSeparatorComponent={this.renderItemSeparator}
          stickySectionHeadersEnabled={false}
        />
      </View>
    );
  }
}

export default ChatMessageScreen;
