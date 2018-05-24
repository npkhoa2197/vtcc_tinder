import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

const renderIcon = (icon, text, iconWidth, iconHeight, marginRightIcon) => {
  if (icon !== null) {
    return (
      <Image
        style={{
          marginRight: text !== '' ? marginRightIcon : 0,
          width: iconWidth,
          height: iconHeight,
        }}
        source={icon}
      />
    );
  }
  return null;
};

const renderText = (text, fontSize, textColor) => {
  if (text !== '') {
    return <Text style={{ color: textColor, fontSize }}>{text}</Text>;
  }
  return null;
};

const MyButton = ({
  onPress,
  icon,
  iconWidth,
  iconHeight,
  text,
  fontSize,
  textColor,
  color,
  height,
  borderColor,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  marginRight,
  marginRightIcon,
}) => (
  <TouchableOpacity onPress={onPress}>
    <View
      style={[
        styles.buttonStyle,
        {
          backgroundColor: color,
          borderColor,
          height,
          paddingTop,
          paddingBottom,
          paddingLeft,
          paddingRight,
          marginRight,
        },
      ]}
    >
      {renderIcon(icon, text, iconWidth, iconHeight, marginRightIcon)}
      {renderText(text, fontSize, textColor)}
    </View>
  </TouchableOpacity>
);

MyButton.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
  icon: PropTypes.node,
  color: PropTypes.string,
  textColor: PropTypes.string,
  fontSize: PropTypes.number,
  iconWidth: PropTypes.number,
  iconHeight: PropTypes.number,
  height: PropTypes.number,
  borderColor: PropTypes.string,
  paddingTop: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  marginRight: PropTypes.number,
  marginRightIcon: PropTypes.number,
};

MyButton.defaultProps = {
  onPress: () => {},
  text: '',
  icon: null,
  color: 'white',
  textColor: 'black',
  fontSize: 18,
  iconWidth: 24,
  iconHeight: 24,
  height: 48,
  borderColor: 'white',
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 10,
  paddingRight: 10,
  marginRight: 0,
  marginRightIcon: 16,
};

export default MyButton;
