import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

const ChatCreateContactItem = (props) => {
  const {
    id, avatar, name, position,
  } = props.item;

  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{ uri: avatar }} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.dotSeparator}>·</Text>
      <Text style={styles.jobTitle}>{position}</Text>
    </View>
  );
};

ChatCreateContactItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChatCreateContactItem;
