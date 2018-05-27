import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';

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
  bodyContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  avatar: {
    width: 35,
    height: 35,
  },
  name: {
    fontSize: 16,
    marginBottom: 2,
    color: 'rgb(48, 49, 55)',
  },
  icon: {
    width: 13,
    height: 8,
    marginRight: 4,
  },
  body: {
    fontSize: 13,
  },
  time: {
    fontSize: 12,
  },
});

const avatar = require('../../assets/images/chatScreens/avatar1.png');
const msgSentIcon = require('../../assets/images/chatScreens/chatMessageSent.png');
const msgSeenIcon = require('../../assets/images/chatScreens/chatMessageSeen.png');
const msgErrorIcon = require('../../assets/images/chatScreens/chatMessageError.png');

const ChatMessageItem = (props) => {
  const {
    id, name, body, time, status,
  } = props.item;
  let icon = null;
  let iconSize = null;
  switch (status) {
    case 'MSG_SENT':
      icon = msgSentIcon;
      iconSize = { width: 9, height: 7 };
      break;
    case 'MSG_SEEN':
      icon = msgSeenIcon;
      iconSize = { width: 13.8, height: 7 };
      break;
    case 'MSG_ERROR':
      icon = msgErrorIcon;
      iconSize = { width: 8, height: 8 };
      break;
    default:
      iconSize = { width: 0, height: 0 };
      break;
  }
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate('ChatMessageDetailScreen');
      }}
    >
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image style={styles.avatar} source={avatar} />
          <View style={styles.innerContainer}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.bodyContainer}>
              <Image style={[icon !== null ? styles.icon : {}, iconSize]} source={icon} />
              <Text
                style={[
                  styles.body,
                  { color: status === 'MSG_PENDING' ? 'rgb(48, 49, 55)' : 'rgb(137, 139, 155)' },
                ]}
              >
                {body}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text
            style={[
              styles.time,
              { color: status === 'MSG_PENDING' ? 'rgb(48, 49, 55)' : 'rgb(137, 139, 155)' },
            ]}
          >
            {time}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
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
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigation(ChatMessageItem);
