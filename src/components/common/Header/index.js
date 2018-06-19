import React from 'react';
import { View, Text, TouchableWithoutFeedback, Image, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

const defaulticon = require('../../../assets/images/chatScreens/chatMessageDetailOptionItemDefaultIcon.png');
const backIcon = require('../../../assets/images/chatScreens/backButtonIcon.png');

const isIos = Platform.OS === 'ios';

// const fireImg = require('../assets/images/hotgirlicon.png');

const Header = ({
  headerText,
  backgroundColor,
  textColor,
  isBack,
  onBackPress,
  haveRightButton,
  rightButtonIcon,
  onRightButtonPress,
}) => {
  if (isBack && haveRightButton) {
    return (
      <View style={[isIos ? styles.containerIos : styles.container, { backgroundColor }]}>
        <View style={styles.innerContainer}>
          <TouchableWithoutFeedback onPress={onBackPress}>
            <Image style={styles.backButton} source={backIcon} />
          </TouchableWithoutFeedback>
          <Text style={[styles.titleStyle, { color: textColor }]}>{headerText}</Text>
        </View>
        <TouchableWithoutFeedback onPress={onRightButtonPress}>
          <Image style={styles.rightButton} source={rightButtonIcon} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
  if (isBack) {
    return (
      <View style={[isIos ? styles.containerIos : styles.container, { backgroundColor }]}>
        <View style={styles.innerContainer}>
          <TouchableWithoutFeedback onPress={onBackPress}>
            <Image style={styles.backButton} source={backIcon} />
          </TouchableWithoutFeedback>
          <Text style={[styles.titleStyle, { color: textColor }]}>{headerText}</Text>
        </View>
      </View>
    );
  }
  if (haveRightButton) {
    return (
      <View style={[isIos ? styles.containerIos : styles.container, { backgroundColor }]}>
        <Text style={[styles.titleStyle, { color: textColor }]}>{headerText}</Text>
        <TouchableWithoutFeedback onPress={onRightButtonPress}>
          <Image style={styles.rightButton} source={rightButtonIcon} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
  return (
    <View style={[isIos ? styles.containerIos : styles.container, { backgroundColor }]}>
      <Text style={[styles.titleStyle, { color: textColor }]}>{headerText}</Text>
    </View>
  );
};

Header.propTypes = {
  headerText: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  isBack: PropTypes.bool,
  onBackPress: PropTypes.func,
  haveRightButton: PropTypes.bool,
  rightButtonIcon: PropTypes.number,
  onRightButtonPress: PropTypes.func,
};

Header.defaultProps = {
  headerText: 'MY HEADER',
  backgroundColor: '#3f51b5',
  textColor: '#FFF',
  isBack: false,
  onBackPress: () => {},
  haveRightButton: false,
  rightButtonIcon: defaulticon,
  onRightButtonPress: () => {},
};

export default Header;
