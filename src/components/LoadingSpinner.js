import React from 'react';
import { View, ActivityIndicator, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

const LoadingSpinner = ({ color, size, visible }) => {
  const { width, height } = Dimensions.get('window');
  if (visible) {
    return (
      <View
        style={{
          position: 'absolute',
          top: height / 2,
          bottom: height / 2,
          right: width / 2,
          left: width / 2,
        }}
      >
        <ActivityIndicator color={color} size={size} />
      </View>
    );
  }
  return null;
};

LoadingSpinner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  visible: PropTypes.bool,
};

LoadingSpinner.defaultProps = {
  color: 'grey',
  size: 'large',
  visible: false,
};

export default LoadingSpinner;
