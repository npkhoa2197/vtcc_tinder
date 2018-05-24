import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 23,
    marginTop: 15,
    marginBottom: 15,
  },
  leftContainer: {
    justifyContent: 'flex-start',
  },
  rightContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  name: {
    fontSize: 15,
    color: 'rgb(48, 49, 55)',
  },
  blacklistFrom: {
    fontSize: 12,
    color: 'rgb(137, 139, 155)',
  },
  removeText: {
    fontSize: 14,
    color: 'rgb(63, 81, 181)',
  },
});

const ChatBlacklistItem = (props) => {
  const { name, blacklistFrom } = props.item;
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.blacklistFrom}>Chặn từ ngày {blacklistFrom}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.removeText}>BỎ CHẶN</Text>
      </View>
    </View>
  );
};

ChatBlacklistItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    blacklistFrom: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChatBlacklistItem;
