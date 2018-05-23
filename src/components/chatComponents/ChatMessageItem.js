import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 19,
    paddingBottom: 18,
    marginLeft: 10,
    marginRight: 16,
  },
  leftContainer: {
    flexDirection: 'row',
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 12,
  },
  rightContainer: {},
  avatar: {
    width: 35,
    height: 35,
  },
  name: {
    fontSize: 16,
    marginBottom: 2,
    color: 'rgb(48, 49, 55)',
  },
  body: {
    fontSize: 13,
  },
  time: {
    fontSize: 12,
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
        <Image style={styles.avatar} source={avatar} />
        <View style={styles.innerContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.body}>{body}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
};

ChatMessageItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChatMessageItem;
