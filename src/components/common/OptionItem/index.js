import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const defaultIcon = require('../../../assets/images/chatScreens/chatMessageDetailOptionItemDefaultIcon.png');

const OptionItem = (props) => {
  const { icon, text } = props;
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image style={styles.icon} source={icon} />
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

OptionItem.propTypes = {
  icon: PropTypes.number,
  text: PropTypes.string,
};

OptionItem.defaultProps = {
  icon: defaultIcon,
  text: 'This is an option',
};

export default OptionItem;
