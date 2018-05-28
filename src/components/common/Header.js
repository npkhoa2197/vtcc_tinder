import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image, Platform } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    height: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 17,
  },
  containerIos: {
    height: 44 + 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 17,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  backButton: {
    width: 24,
    height: 24,
    marginRight: 17,
  },
  rightButton: {
    width: 24,
    height: 24,
  },
  imageStyle: {
    height: 50,
    width: 50,
  },
  titleStyle: {
    fontSize: 17,
  },
});

const defaulticon = require('../../assets/images/chatScreens/chatMessageDetailOptionItemDefaultIcon.png');
const backIcon = require('../../assets/images/chatScreens/backButtonIcon.png');

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
