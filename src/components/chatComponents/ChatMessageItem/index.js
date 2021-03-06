import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import {
  MESSAGE_STATUS_SENT,
  MESSAGE_STATUS_SEEN,
  MESSAGE_STATUS_ERROR,
  MESSAGE_STATUS_PENDING,
} from '../../../constants/strings/strings';
import { CHAT_MESSAGE_DETAIL_SCREEN } from '../../../constants/strings/screenNames';
import { styles } from './styles';
import { convertSeconds } from '../../../helpers/convertTime';

const msgSentIcon = require('../../../assets/images/chatScreens/chatMessageSent.png');
const msgSeenIcon = require('../../../assets/images/chatScreens/chatMessageSeen.png');
const msgErrorIcon = require('../../../assets/images/chatScreens/chatMessageError.png');

const ChatMessageItem = (props) => {
  const {
    id, name, avatar, lastMsg, timestamp, status,
  } = props.item;
  //   if (status === '') {
  //     const { uid } = firebase.auth().currentUser;
  //     const uids = id.split('-');
  //     const otherId = uid === uids[0] ? uids[1] : uids[0];
  //     const chatDocId = chatIdCreator(uid, otherId);

  //     firestore
  //       .collection('activeChats')
  //       .doc(otherId)
  //       .collection('chats')
  //       .doc(chatDocId)
  //       .get()
  //       .then((doc) => {
  //         const currentStatus = doc.data().status;
  //         if (currentStatus === MESSAGE_STATUS_SENT) {
  //           console.log('here');
  //           this.messageStatus = MESSAGE_STATUS_PENDING;
  //         }
  //       });
  //   }

  let icon = null;
  let iconSize = null;
  switch (status) {
    case MESSAGE_STATUS_SENT:
      icon = msgSentIcon;
      iconSize = { width: 9, height: 7 };
      break;
    case MESSAGE_STATUS_SEEN:
      icon = msgSeenIcon;
      iconSize = { width: 13.8, height: 7 };
      break;
    case MESSAGE_STATUS_ERROR:
      icon = msgErrorIcon;
      iconSize = { width: 8, height: 8 };
      break;
    default:
      iconSize = { width: 0, height: 0 };
      break;
  }

  const renderLeftContainer = () => (
    <View style={styles.leftContainer}>
      <Image
        style={styles.avatar}
        source={{
          uri: avatar,
        }}
      />
      <View style={styles.innerContainer}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.bodyContainer}>
          <Image style={[icon !== null ? styles.icon : {}, iconSize]} source={icon} />
          <Text
            style={[
              styles.body,
              {
                color:
                status === MESSAGE_STATUS_PENDING
                    ? 'rgb(48, 49, 55)'
                    : 'rgb(137, 139, 155)',
              },
            ]}
          >
            {lastMsg}
          </Text>
        </View>
      </View>
    </View>
  );

  const renderRightContainer = time => (
    <View>
      <Text
        style={[
          styles.time,
          {
            color:
              status === MESSAGE_STATUS_PENDING
                ? 'rgb(48, 49, 55)'
                : 'rgb(137, 139, 155)',
          },
        ]}
      >
        {time}
      </Text>
    </View>
  );

  if (lastMsg !== '') {
    const time = convertSeconds(Date.now() - timestamp.seconds * 1000);
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate(CHAT_MESSAGE_DETAIL_SCREEN, {
            chatFriendName: name,
            chatDocId: id,
            chatFriendAvatar: avatar,
          });
        }}
      >
        <View style={styles.container}>
          {renderLeftContainer()}
          {renderRightContainer(time)}
        </View>
      </TouchableOpacity>
    );
  }
  return null;
};

ChatMessageItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    lastMsg: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigation(ChatMessageItem);
