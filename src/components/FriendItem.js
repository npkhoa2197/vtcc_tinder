import React from 'react';
import { View, Text, TouchableWithoutFeedback, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import {
  DEFAULT_FRIEND_AVATAR,
  DEFAULT_FRIEND_DESCRIPTION,
  UNFRIEND_BUTTON,
  ADD_FRIEND_BUTTON,
} from '../constants/strings';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    margin: 5,
    marginRight: 10,
  },
  avatarStyle: {
    height: 50,
    width: 50,
    marginRight: 10,
    resizeMode: 'cover',
    borderRadius: 200,
  },
  descriptionContainer: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  titleStyle: {
    fontWeight: 'bold',
  },
});

const friendIcon = require('../assets/images/addfriendicon.png');
const unfriendIcon = require('../assets/images/unfriendicon.png');

const FriendItem = ({ friend, addFriend, removeFriend }) => {
  const {
    id, avatar, name, description, isFriend,
  } = friend;
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatarStyle}
        source={{
          uri: avatar || DEFAULT_FRIEND_AVATAR,
        }}
        resizeMode="contain"
        resizeMethod="resize"
      />

      <View style={styles.descriptionContainer}>
        <Text style={styles.titleStyle} numberOfLines={1} ellipsizeMode="tail">
          {name}
        </Text>
        <Text>{description || DEFAULT_FRIEND_DESCRIPTION}</Text>
      </View>
      <TouchableWithoutFeedback
        onPress={() => (isFriend ? removeFriend(id, name) : addFriend(id, name))}
      >
        <Image style={{ width: 30, height: 30 }} source={isFriend ? unfriendIcon : friendIcon} />
      </TouchableWithoutFeedback>
    </View>
  );
};

FriendItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isFriend: PropTypes.bool.isRequired,
    description: PropTypes.string,
    avatar: PropTypes.string,
  }).isRequired,
  removeFriend: PropTypes.func.isRequired,
  addFriend: PropTypes.func.isRequired,
};

export default FriendItem;
