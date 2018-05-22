import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestChatHistory, stopRequestChat } from '../actions/ChatActions';
import ChatsList from './VerticalList';
import { CHAT } from '../constants/strings';

class ChatList extends React.Component {
  static propTypes = {
    id1: PropTypes.string.isRequired,
    id2: PropTypes.string.isRequired,
    chats: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      sender: PropTypes.string,
      senderName: PropTypes.string,
      body: PropTypes.string,
    })).isRequired,
    requestChatHistory: PropTypes.func.isRequired,
    stopRequestChat: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.requestChatHistory(this.props.id1, this.props.id2);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.chats.length !== nextProps.chats.length;
  }

  componentWillUnmount() {
    this.props.stopRequestChat(this.props.id1, this.props.id2);
  }

  render() {
    return (
      <View>
        <ChatsList
          chats={this.props.chats}
          type={CHAT}
          ref={(ref) => {
            this.chatList = ref;
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  username: state.username,
  chats: state.chats.chats,
});

const mapDispatchToProps = dispatch => ({
  requestChatHistory: (id1, id2) => dispatch(requestChatHistory(id1, id2)),
  stopRequestChat: (id1, id2) => dispatch(stopRequestChat(id1, id2)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
