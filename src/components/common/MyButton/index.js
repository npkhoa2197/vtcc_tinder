import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

const renderIcon = (icon, text, iconWidth, iconHeight) => {
  if (icon !== null) {
    return (
      <Image
        style={{ marginRight: text !== '' ? 16 : 0, width: iconWidth, height: iconHeight }}
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
  text,
  icon,
  color,
  fontSize,
  iconWidth,
  iconHeight,
  textColor,
  borderColor,
}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.buttonStyle, { backgroundColor: color, borderColor }]}>
      {renderIcon(icon, text, iconWidth, iconHeight)}
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
  borderColor: PropTypes.string,
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
  borderColor: 'white',
};

export default MyButton;
