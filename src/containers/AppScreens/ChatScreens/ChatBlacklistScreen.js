import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TextInput } from 'react-native';
import { mockDataChatBlacklist } from '../../../constants/mockData';
import ChatBlacklistItem from '../../../components/chatComponents/ChatBlacklistItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#FFF',
  },
  headerContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 15,
    marginRight: 55,
    marginBottom: 13,
    marginTop: 16,
  },
  searchBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 15,
  },
  addText: {
    fontSize: 14,
    color: 'rgb(63, 81, 181)',
  },
  instructionText: {
    fontSize: 14,
    color: 'rgb(48, 49, 55)',
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  searchText: {
    fontSize: 16,
    color: 'rgb(174, 180, 187)',
  },
  separator: {
    marginLeft: 15,
    marginRight: 15,
    height: 1,
    backgroundColor: 'rgb(230, 230, 230)',
  },
  bodySeparator: {
    backgroundColor: 'rgb(223, 228, 234)',
    height: 4,
  },
});

const searchIcon = require('../../../assets/images/chatScreens/chatBlacklistSearchIcon.png');

class ChatBlacklistScreen extends React.PureComponent {
  keyExtractor = item => item.id;

  renderItem = item => <ChatBlacklistItem item={item} />;

  renderItemSeparator = () => <View style={styles.separator} />;

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.addText}>THÊM</Text>
          <Text style={styles.instructionText}>
            Bạn có thể thêm người bạn không muốn chat vào danh sách này.
          </Text>
        </View>
        <View style={styles.bodySeparator} />
        <View style={styles.searchBoxContainer}>
          <Image style={styles.searchIcon} source={searchIcon} />
          <TextInput
            style={{ fontSize: 16 }}
            multiline={false}
            placeholder="tìm kiếm hồ sơ"
            placeholderTextColor="rgb(174, 180, 187)"
          />
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: 'rgb(230, 230, 230)',
          }}
        />
        <FlatList
          data={mockDataChatBlacklist}
          keyExtractor={this.keyExtractor}
          renderItem={({ item }) => this.renderItem(item)}
          ItemSeparatorComponent={this.renderItemSeparator}
        />
      </View>
    );
  }
}

export default ChatBlacklistScreen;
