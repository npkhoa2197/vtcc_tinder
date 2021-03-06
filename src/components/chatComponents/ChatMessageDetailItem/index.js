import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import { connect } from 'react-redux';
import {
  MESSAGE_STATUS_SENT,
  MESSAGE_STATUS_ERROR,
  MESSAGE_STATUS_SEEN,
} from '../../../constants/strings/strings';
import { styles } from './styles';
import { requestCheckSeenMessage } from '../../../actions/chatActions';
import { convertTimestamp } from '../../../helpers/convertTime';

const msgSentIcon = require('../../../assets/images/chatScreens/chatMessageSent.png');
const msgSeenIcon = require('../../../assets/images/chatScreens/chatMessageSeen.png');
const msgErrorIcon = require('../../../assets/images/chatScreens/chatMessageError.png');

class ChatMessageDetailItem extends React.PureComponent {
  static propTypes = {
    item: PropTypes.shape({
      id: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      seen: PropTypes.bool.isRequired,
      senderId: PropTypes.string.isRequired,
    }).isRequired,
    avatar: PropTypes.string.isRequired,
    isCheckSeen: PropTypes.bool,
    requestCheckSeenMessage: PropTypes.func.isRequired,
    chatDocId: PropTypes.string,
    onLongPress: PropTypes.func,
  };

  static defaultProps = {
    isCheckSeen: true,
    onLongPress: () => {},
    chatDocId: '',
  };

  constructor(props) {
    super(props);

    this.currentUid = firebase.auth().currentUser.uid;
  }

  componentDidMount() {
    const { senderId, seen, id } = this.props.item;
    const { isCheckSeen } = this.props;
    if (senderId !== this.currentUid && !seen && isCheckSeen) {
      this.props.requestCheckSeenMessage(this.props.chatDocId, id);
    }
  }

  render() {
    if (this.props.item) {
      const {
        body, timestamp, senderId, seen,
      } = this.props.item;
      const { avatar } = this.props;

      if (senderId !== this.currentUid) {
        const time = convertTimestamp(timestamp.seconds);
        return (
          <TouchableOpacity onLongPress={() => this.props.onLongPress()}>
            <View style={styles.container1}>
              <View style={styles.leftContainer}>
                <Image style={styles.avatar} source={{ uri: avatar }} />
              </View>
              <View style={styles.rightContainer}>
                <View style={styles.messageContainer}>
                  <Text style={styles.messageBody}>{body}</Text>
                </View>
                <Text style={styles.time}>{time}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }

      const iconSize = seen ? { width: 13.8, height: 7 } : { width: 9, height: 7 };
      const icon = seen ? msgSeenIcon : msgSentIcon;
      const statusMsg = seen ? 'Đã xem' : 'Đã nhận';

      return (
        <TouchableOpacity onLongPress={() => this.props.onLongPress()}>
          <View style={styles.container2}>
            <View style={[styles.messageContainer, { backgroundColor: 'rgb(63, 81, 181)' }]}>
              <Text style={[styles.messageBody, { color: '#FFF' }]}>{body}</Text>
            </View>
            <View style={styles.statusContainer}>
              <Image style={[icon !== null ? styles.icon : {}, iconSize]} source={icon} />
              <Text style={styles.status}>{statusMsg}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );

      //   return (
      //     <TouchableOpacity onLongPress={() => props.onLongPress()}>
      //       <View style={styles.container2}>
      //         <View style={[styles.messageContainer, { backgroundColor: 'rgb(214, 218, 223)' }]}>
      //           <Text style={[styles.messageBody, { color: '#FFF' }]}>{body}</Text>
      //         </View>
      //         <View style={styles.statusContainer}>
      //           <Image style={[icon !== null ? styles.icon : {}, iconSize]} source={icon} />
      //           <Text style={styles.status}>{statusMsg}</Text>
      //           <Text style={styles.tryAgainText}>Thử lại</Text>
      //         </View>
      //       </View>
      //     </TouchableOpacity>
      //   );
    }
    return null;
  }
}

const mapDispatchToProps = dispatch => ({
  requestCheckSeenMessage: (chatDocId, messageId) =>
    dispatch(requestCheckSeenMessage(chatDocId, messageId)),
});

export default connect(null, mapDispatchToProps)(ChatMessageDetailItem);
