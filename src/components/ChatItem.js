import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const ChatItem = ({ body }) => (
  <View>
    <Text>{body}</Text>
  </View>
);

ChatItem.propTypes = {
  body: PropTypes.string.isRequired,
};

export default ChatItem;
