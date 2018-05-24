import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import MyButton from '../common/MyButton';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 19,
    paddingBottom: 16,
    marginLeft: 10,
    marginRight: 21,
  },
  leftContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight: 12,
  },
  rightContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  innerContainer1: {
    marginBottom: 15,
  },
  innerContainer2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  nameAndTextContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 2,
  },
  avatar: {
    width: 35,
    height: 35,
  },
  name: {
    fontSize: 16,
    color: 'rgb(48, 49, 55)',
  },
  text: {
    fontSize: 16,
    color: 'rgb(94, 96, 112)',
  },
  body: {
    fontSize: 16,
    color: 'rgb(94, 96, 112)',
  },
  time: {
    fontSize: 12,
    color: 'rgb(137, 139, 155)',
  },
  skipText: {
    fontSize: 14,
    color: 'rgb(63, 81, 181)',
  },
});

const avatar = require('../../assets/images/chatScreens/avatar1.png');
const chatRequestAcceptIcon = require('../../assets/images/chatScreens/chatRequestAcceptIcon.png');
const chatRequestDeclineIcon = require('../../assets/images/chatScreens/chatRequestDeclineIcon.png');

const ChatRequestItem = (props) => {
  const { id, name, requestTime } = props.item;
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image style={styles.avatar} source={avatar} />
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.innerContainer1}>
          <View style={styles.nameAndTextContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.text}> muốn được chat với bạn</Text>
          </View>
          <Text style={styles.time}>{requestTime}</Text>
        </View>
        <View style={styles.innerContainer2}>
          <MyButton
            text="Chấp nhận"
            icon={chatRequestAcceptIcon}
            iconWidth={14}
            iconHeight={10}
            fontSize={14}
            textColor="rgb(63, 81, 181)"
            borderColor="rgb(214, 218, 223)"
            height={32}
            paddingTop={4}
            paddingBottom={4}
            paddingRight={13}
            paddingLeft={12}
            marginRight={10}
            marginRightIcon={6}
          />
          <MyButton
            text="Từ chối"
            icon={chatRequestDeclineIcon}
            iconWidth={14}
            iconHeight={10}
            fontSize={14}
            textColor="rgb(63, 81, 181)"
            borderColor="rgb(214, 218, 223)"
            height={32}
            paddingTop={4}
            paddingBottom={4}
            paddingRight={13}
            paddingLeft={12}
            marginRight={10}
            marginRightIcon={6}
          />
          <Text style={styles.skipText}>Bỏ qua</Text>
        </View>
      </View>
    </View>
  );
};

ChatRequestItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    requestTime: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChatRequestItem;
