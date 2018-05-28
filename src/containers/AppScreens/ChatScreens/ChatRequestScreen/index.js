import React from 'react';
import { View, Text, SectionList } from 'react-native';
import { mockDataChatRequest } from '../../../../constants/mockData';
import ChatRequestItem from '../../../../components/chatComponents/ChatRequestItem';
import { styles } from './styles';

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
