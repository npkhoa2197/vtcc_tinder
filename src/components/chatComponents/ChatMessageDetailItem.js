import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container1: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 10,
    marginRight: 15,
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginLeft: 10,
    marginRight: 15,
  },
  leftContainer: {
    marginRight: 5,
  },
  rightContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  messageContainer: {
    width: 310,
    borderRadius: 10,
    backgroundColor: '#FFF',
    marginBottom: 4,
  },
  avatar: {
    width: 35,
    height: 35,
  },
  messageBody: {
    fontSize: 15,
    color: 'rgb(51, 51, 51)',
    paddingTop: 14,
    paddingBottom: 16,
    paddingLeft: 13,
    paddingRight: 12,
  },
  time: {
    fontSize: 12,
    color: 'rgb(153, 163, 171)',
    marginBottom: 4,
  },
  status: {
    fontSize: 12,
    color: 'rgb(153, 163, 171)',
    marginBottom: 4,
  },
});

const avatar = require('../../assets/images/chatScreens/avatar1.png');

const currentUserUID = 'WZXa10';

const ChatMessageDetailItem = (props) => {
  const {
    body, time, senderuid, status,
  } = props.item;

  if (senderuid !== currentUserUID) {
    return (
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
    );
  }
  let statusMsg = '';
  switch (status) {
    case 'MSG_SENT':
      statusMsg = 'Đã nhận';
      break;
    case 'MSG_RECEIVED':
      statusMsg = 'Đã xem';
      break;
    case 'MSG_ERROR':
      statusMsg = 'Gửi lỗi';
      break;
    default:
      break;
  }

  return (
    <View style={styles.container2}>
      <View style={styles.messageContainer}>
        <Text style={styles.messageBody}>{body}</Text>
      </View>
      <Text style={styles.status}>{statusMsg}</Text>
    </View>
  );
};

ChatMessageDetailItem.propTypes = {
  item: PropTypes.shape({
    body: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    senderuid: PropTypes.string.isRequired,
  }),
};

ChatMessageDetailItem.defaultProps = {
  item: {
    body: 'Hello',
    time: '09:12 am',
    senderuid: '',
  },
};

export default ChatMessageDetailItem;
