import React from 'react';
import { FlatList, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import FriendItem from './FriendItem';
import CommentItem from './CommentItem';
import ChatItem from './ChatItem';
import {
  FRIEND,
  COMMENT,
  EMPTY_FRIEND_LIST,
  EMPTY_COMMENT_LIST,
  CHAT,
  EMPTY_CHAT_LIST,
  CHAT_SCREEN,
} from '../constants/strings';

const styles = StyleSheet.create({
  separatorStyle: {
    height: 1,
    backgroundColor: '#e5e5e5',
  },
  emptyTextStyle: {
    color: '#8c8c8c',
    fontSize: 15,
  },
  emptyTextContainerWithPadding: {
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingTop: 200,
  },
  emptyTextContainer: {
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  listFooterStyle: {
    height: 50,
  },
});

class VerticalList extends React.PureComponent {
  static propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      authorName: PropTypes.string,
      body: PropTypes.string,
    })),
    friends: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      isFriend: PropTypes.bool.isRequired,
    })),
    chats: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      sender: PropTypes.string,
      senderName: PropTypes.string,
      body: PropTypes.string,
    })),
    removeFriend: PropTypes.func,
    addFriend: PropTypes.func,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    type: PropTypes.string.isRequired,
  };

  static defaultProps = {
    comments: [],
    friends: [],
    chats: [],
    removeFriend: () => {},
    addFriend: () => {},
  };

  componentDidMount() {
    this.flatList.scrollToEnd();
  }

  keyExtractor = item => item.id;

  renderItem = (item, type) => {
    switch (type) {
      case FRIEND:
        return (
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate(CHAT_SCREEN, {
                selectedUserUid: item.id,
                name: item.name,
              });
            }}
          >
            <FriendItem
              friend={item}
              removeFriend={this.props.removeFriend}
              addFriend={this.props.addFriend}
            />
          </TouchableOpacity>
        );
      case COMMENT:
        return <CommentItem comment={item} />;
      case CHAT:
        console.log(item);
        return <ChatItem body={item.body} />;
      default:
        return null;
    }
  };

  renderSeparator = () => <View style={styles.separatorStyle} />;

  renderEmpty = (type) => {
    let emptyContainerStyle;
    let emptyContainerString;
    switch (type) {
      case FRIEND:
        emptyContainerStyle = styles.emptyTextContainerWithPadding;
        emptyContainerString = EMPTY_FRIEND_LIST;
        break;
      case COMMENT:
        emptyContainerStyle = styles.emptyTextContainer;
        emptyContainerString = EMPTY_COMMENT_LIST;
        break;
      case CHAT:
        emptyContainerStyle = styles.emptyTextContainerWithPadding;
        emptyContainerString = EMPTY_CHAT_LIST;
        break;
      default:
        emptyContainerStyle = styles.emptyTextContainer;
        emptyContainerString = '';
        break;
    }
    return (
      <View style={emptyContainerStyle}>
        <Text style={styles.emptyTextStyle}>{emptyContainerString}</Text>
      </View>
    );
  };

  renderFooter = () => <View style={styles.listFooterStyle} />;

  render() {
    const {
      comments, friends, chats, type,
    } = this.props;

    let myData = [];
    switch (type) {
      case FRIEND:
        myData = friends;
        break;
      case COMMENT:
        myData = comments;
        break;
      case CHAT:
        myData = chats;
        break;
      default:
        break;
    }

    return (
      <FlatList
        data={myData}
        keyExtractor={this.keyExtractor}
        renderItem={({ item }) => this.renderItem(item, type)}
        ItemSeparatorComponent={this.renderSeparator}
        ListEmptyComponent={() => this.renderEmpty(type)}
        ListFooterComponent={this.renderFooter}
        ref={(ref) => {
          this.flatList = ref;
        }}
      />
    );
  }
}

export default withNavigation(VerticalList);
