import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  innerContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  rightContainer: {
    marginRight: 10,
  },
  avatarStyle: {
    width: 35,
    height: 35,
  },
});

const avatar = require('../../assets/images/chatScreens/avatar1.png');

const ChatMessageItem = (props) => {
  const {
    id, name, body, time, status,
  } = props.item;
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image style={styles.avatarStyle} source={avatar} />
        <View style={styles.innerContainer}>
          <Text>{name}</Text>
          <Text>{body}</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Text>{time}</Text>
      </View>
    </View>
  );
};

ChatMessageItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChatMessageItem;
