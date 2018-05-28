import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { mockDataChatBlacklist } from '../../../constants/mockData';
import ChatBlacklistItem from '../../../components/chatComponents/ChatBlacklistItem';
import SearchBox from '../../../components/common/SearchBox';
import { CHAT_BLACK_LIST_ADD_NEW_SCREEN } from '../../../constants/strings/screenNames';

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
  addText: {
    fontSize: 14,
    color: 'rgb(63, 81, 181)',
  },
  instructionText: {
    fontSize: 14,
    color: 'rgb(48, 49, 55)',
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

class ChatBlacklistScreen extends React.PureComponent {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };
  keyExtractor = item => item.id;

  renderItem = item => <ChatBlacklistItem item={item} />;

  renderItemSeparator = () => <View style={styles.separator} />;

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text
            style={styles.addText}
            onPress={() => this.props.navigation.navigate(CHAT_BLACK_LIST_ADD_NEW_SCREEN)}
          >
            THÊM
          </Text>
          <Text style={styles.instructionText}>
            Bạn có thể thêm người bạn không muốn chat vào danh sách này.
          </Text>
        </View>
        <View style={styles.bodySeparator} />
        <SearchBox placeholder="tìm kiếm hồ sơ" />
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

export default withNavigation(ChatBlacklistScreen);
