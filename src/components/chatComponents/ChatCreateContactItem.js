import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingLeft: 6,
    paddingTop: 11,
    paddingBottom: 11,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'rgb(236, 238, 240)',
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginRight: 10,
  },
  name: {
    fontSize: 14,
    color: 'rgb(48, 49, 55)',
    marginRight: 4,
  },
  dotSeparator: {
    fontSize: 14,
    color: 'rgb(137, 139, 155)',
    marginRight: 3,
  },
  jobTitle: {
    fontSize: 14,
    color: 'rgb(137, 139, 155)',
  },
});

const avatar = require('../../assets/images/chatScreens/avatar1.png');

const ChatCreateContactItem = (props) => {
  const { id, name, jobTitle } = props.item;

  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={avatar} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.dotSeparator}>·</Text>
      <Text style={styles.jobTitle}>{jobTitle}</Text>
    </View>
  );
};

ChatCreateContactItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChatCreateContactItem;
