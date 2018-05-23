import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native';
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
  imageStyle: {
    height: 50,
    width: 50,
  },
  titleStyle: {
    fontSize: 17,
  },
});

const isIos = Platform.OS === 'ios';

// const fireImg = require('../assets/images/hotgirlicon.png');

const Header = ({
  headerText, backgroundColor, textColor, onHeaderButtonPress,
}) => (
  <View style={[isIos ? styles.containerIos : styles.container, { backgroundColor }]}>
    <Text style={[styles.titleStyle, { color: textColor }]}>{headerText}</Text>
  </View>
);

Header.propTypes = {
  headerText: PropTypes.string,
  onHeaderButtonPress: PropTypes.func,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
};

Header.defaultProps = {
  headerText: 'NEW FRIENDS',
  backgroundColor: '#3f51b5',
  textColor: '#FFF',
  onHeaderButtonPress: () => {},
};

export default Header;
