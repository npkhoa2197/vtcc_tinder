import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import MyButton from '../../common/MyButton';
import { styles } from './styles';

const chatRequestAcceptIcon = require('../../../assets/images/chatScreens/chatRequestAcceptIcon.png');
const chatRequestDeclineIcon = require('../../../assets/images/chatScreens/chatRequestDeclineIcon.png');

const ChatRequestItem = (props) => {
  const {
    id, avatar, name, requestTime,
  } = props.item;

  const renderLeftContainer = () => (
    <View style={styles.leftContainer}>
      <Image style={styles.avatar} source={{ uri: avatar }} />
    </View>
  );

  const renderInnerUpperContainer = () => (
    <View style={styles.innerUpperContainer}>
      <View style={styles.nameAndTextContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.text}> muốn được chat với bạn</Text>
      </View>
      <Text style={styles.time}>{requestTime}</Text>
    </View>
  );

  const renderInnerLowerContainer = () => (
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
      />
      <Text style={styles.skipText}>Bỏ qua</Text>
    </View>
  );

  const renderRightContainer = () => (
    <View style={styles.rightContainer}>
      {renderInnerUpperContainer()}
      {renderInnerLowerContainer()}
    </View>
  );

  return (
    <TouchableOpacity onPress={() => props.navigation.navigate('ChatRequestDetailScreen')}>
      <View style={styles.container}>
        {renderLeftContainer()}
        {renderRightContainer()}
      </View>
    </TouchableOpacity>
  );
};

ChatRequestItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    requestTime: PropTypes.string.isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigation(ChatRequestItem);
