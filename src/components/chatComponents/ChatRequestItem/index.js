import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import firebase from 'firebase';
import MyButton from '../../common/MyButton';
import { styles } from './styles';
import { convertSeconds } from '../../../helpers/convertTime';
import { requestCreateNewChatThread } from '../../../actions/chatActions';
import { CHAT_MESSAGE_DETAIL_SCREEN } from '../../../constants/strings/screenNames';
import chatIdCreator from '../../../helpers/chatIdCreator';
import { firestore } from '../../../utilities/configFirebase';

const chatRequestAcceptIcon = require('../../../assets/images/chatScreens/chatRequestAcceptIcon.png');
const chatRequestDeclineIcon = require('../../../assets/images/chatScreens/chatRequestDeclineIcon.png');

class ChatRequestItem extends React.PureComponent {
  static propTypes = {
    item: PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    requestCreateNewChatThread: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  handleAcceptPress = () => {
    const { id, name, avatar } = this.props.item;
    const { uid } = firebase.auth().currentUser;
    const uids = id.split('-');
    const otherId = uid === uids[0] ? uids[1] : uids[0];
    const chatDocId = chatIdCreator(uid, otherId);

    this.props.requestCreateNewChatThread(uid, otherId);

    this.props.navigation.navigate(CHAT_MESSAGE_DETAIL_SCREEN, {
      chatFriendName: name,
      chatFriendAvatar: avatar,
      chatDocId,
    });
  };

  handleDeclinePress = () => {};

  handleRequestItemPress = () => {
    const { id, name, avatar } = this.props.item;
    firestore
      .collection('chats')
      .doc(id)
      .collection('messages')
      .orderBy('timestamp', 'desc')
      .get()
      .then((query) => {
        if (query.docs.length > 0) {
          const messageItem = { ...query.docs[0].data(), id: query.docs[0].id };
          this.props.navigation.navigate('ChatRequestDetailScreen', {
            requestName: name,
            requestAvatar: avatar,
            messageItem,
          });
        } else {
          this.props.navigation.navigate('ChatRequestDetailScreen', {
            requestName: name,
            requestAvatar: avatar,
            messageItem: null,
          });
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  renderInnerUpperContainer = () => {
    const { timestamp, name } = this.props.item;
    const requestTime = convertSeconds(Date.now() - timestamp.seconds * 1000);
    return (
      <View style={styles.innerUpperContainer}>
        <View style={styles.nameAndTextContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.text}> muốn được chat với bạn</Text>
        </View>
        <Text style={styles.time}>{requestTime}</Text>
      </View>
    );
  };

  renderLeftContainer = () => (
    <View style={styles.leftContainer}>
      <Image style={styles.avatar} source={{ uri: this.props.item.avatar }} />
    </View>
  );

  renderInnerLowerContainer = () => (
    <View style={styles.innerLowerContainer}>
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
        onPress={this.handleAcceptPress}
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
        onPress={this.handleDeclinePress}
      />
      <Text style={styles.skipText}>Bỏ qua</Text>
    </View>
  );

  renderRightContainer = () => (
    <View style={styles.rightContainer}>
      {this.renderInnerUpperContainer()}
      {this.renderInnerLowerContainer()}
    </View>
  );

  render() {
    return (
      <TouchableOpacity onPress={this.handleRequestItemPress}>
        <View style={styles.container}>
          {this.renderLeftContainer()}
          {this.renderRightContainer()}
        </View>
      </TouchableOpacity>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  requestCreateNewChatThread: (uid1, uid2) => dispatch(requestCreateNewChatThread(uid1, uid2)),
});

export default connect(null, mapDispatchToProps)(withNavigation(ChatRequestItem));
