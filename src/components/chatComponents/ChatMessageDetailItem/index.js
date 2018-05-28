import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import {
  MESSAGE_STATUS_SENT,
  MESSAGE_STATUS_ERROR,
  MESSAGE_STATUS_SEEN,
} from '../../../constants/strings/strings';
import { styles } from './styles';

const avatar = require('../../../assets/images/chatScreens/avatar1.png');
const msgSentIcon = require('../../../assets/images/chatScreens/chatMessageSent.png');
const msgSeenIcon = require('../../../assets/images/chatScreens/chatMessageSeen.png');
const msgErrorIcon = require('../../../assets/images/chatScreens/chatMessageError.png');

const currentUserUID = 'WZXa10';

const ChatMessageDetailItem = (props) => {
  const {
    body, time, senderuid, status,
  } = props.item;

  if (senderuid !== currentUserUID) {
    return (
      <TouchableOpacity onLongPress={() => props.onLongPress()}>
        <View style={styles.container1}>
          <View style={styles.leftContainer}>
            <Image style={styles.avatar} source={avatar} />
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

  let statusMsg = '';
  let icon = null;
  let iconSize = null;

  switch (status) {
    case MESSAGE_STATUS_SENT:
      statusMsg = 'Đã nhận';
      icon = msgSentIcon;
      iconSize = { width: 9, height: 7 };
      break;
    case MESSAGE_STATUS_SEEN:
      statusMsg = 'Đã xem';
      icon = msgSeenIcon;
      iconSize = { width: 13.8, height: 7 };
      break;
    case MESSAGE_STATUS_ERROR:
      statusMsg = 'Gửi lỗi';
      icon = msgErrorIcon;
      iconSize = { width: 8, height: 8 };
      break;
    default:
      iconSize = { width: 0, height: 0 };
      break;
  }

  if (status !== MESSAGE_STATUS_ERROR) {
    return (
      <TouchableOpacity onLongPress={() => props.onLongPress()}>
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
  }
  return (
    <TouchableOpacity onLongPress={() => props.onLongPress()}>
      <View style={styles.container2}>
        <View style={[styles.messageContainer, { backgroundColor: 'rgb(214, 218, 223)' }]}>
          <Text style={[styles.messageBody, { color: '#FFF' }]}>{body}</Text>
        </View>
        <View style={styles.statusContainer}>
          <Image style={[icon !== null ? styles.icon : {}, iconSize]} source={icon} />
          <Text style={styles.status}>{statusMsg}</Text>
          <Text style={styles.tryAgainText}>Thử lại</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

ChatMessageDetailItem.propTypes = {
  item: PropTypes.shape({
    body: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    senderuid: PropTypes.string.isRequired,
  }),
  onLongPress: PropTypes.func,
};

ChatMessageDetailItem.defaultProps = {
  item: {
    body: 'Hello',
    time: '09:12 am',
    senderuid: '',
  },
  onLongPress: () => {},
};

export default ChatMessageDetailItem;
