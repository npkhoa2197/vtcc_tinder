import React from 'react';
import { View, Text, SectionList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ChatMessageItem from '../../../../components/chatComponents/ChatMessageItem';
import { mockDataChatRequest } from '../../../../constants/mockData';
import ChatRequestItem from '../../../../components/chatComponents/ChatRequestItem';
import {
  CHAT_MESSAGE_SCREEN_SECTIONLIST_REQUESTCHAT,
  CHAT_MESSAGE_SCREEN_SECTIONLIST_CHATMESSAGE,
} from '../../../../constants/strings/screenNames';
import { styles } from './styles';
import {
  requestFetchActiveMessage,
  requestFetchChatRequest,
} from '../../../../actions/chatActions';

class ChatMessageScreen extends React.PureComponent {
  static propTypes = {
    activeChats: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      lastMsg: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })).isRequired,
    pendingChats: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      lastMsg: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })).isRequired,
    requestFetchActiveChat: PropTypes.func.isRequired,
    requestFetchChatRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.requestFetchActiveChat();
    this.props.requestFetchChatRequest();
  }

  keyExtractor = item => item.id;

  renderSectionHeader = (title) => {
    switch (title) {
      case CHAT_MESSAGE_SCREEN_SECTIONLIST_REQUESTCHAT:
        return (
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{title}</Text>
            <View style={styles.requestNumberBackground}>
              <Text style={styles.requestNumber}>{this.props.pendingChats.length}</Text>
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
    const { activeChats, pendingChats } = this.props;
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {
              title: CHAT_MESSAGE_SCREEN_SECTIONLIST_REQUESTCHAT,
              data: pendingChats.slice(pendingChats.length - 1),
            },
            { title: CHAT_MESSAGE_SCREEN_SECTIONLIST_CHATMESSAGE, data: activeChats },
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

const mapStateToProps = state => ({
  activeChats: state.chat.activeChats,
  pendingChats: state.chat.pendingChats,
});

const mapDispatchToProps = dispatch => ({
  requestFetchActiveChat: () => dispatch(requestFetchActiveMessage()),
  requestFetchChatRequest: () => dispatch(requestFetchChatRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatMessageScreen);
