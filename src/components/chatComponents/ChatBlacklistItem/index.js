import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { CHAT_BLACK_LIST_NOTIFICATION_SCREEN } from '../../../constants/strings/screenNames';
import { styles } from './styles';

const ChatBlacklistItem = (props) => {
  const { name, blacklistFrom } = props.item;

  const renderLeftContainer = () => (
    <View style={styles.leftContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.blacklistFrom}>Chặn từ ngày {blacklistFrom}</Text>
    </View>
  );

  const renderRightContainer = () => (
    <View style={styles.rightContainer}>
      <Text
        style={styles.removeText}
        onPress={() =>
          props.navigation.navigate(CHAT_BLACK_LIST_NOTIFICATION_SCREEN, {
            blockUserName: name,
          })
        }
      >
        BỎ CHẶN
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {renderLeftContainer()}
      {renderRightContainer()}
    </View>
  );
};

ChatBlacklistItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    blacklistFrom: PropTypes.string.isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigation(ChatBlacklistItem);
