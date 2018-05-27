import React from 'react';
import { View, Image, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const searchIcon = require('../../../assets/images/chatScreens/chatBlacklistSearchIcon.png');

const SearchBox = (props) => {
  const { placeholder } = props;
  return (
    <View style={styles.searchBoxContainer}>
      <Image style={styles.searchIcon} source={searchIcon} />
      <TextInput
        style={{ fontSize: 16 }}
        multiline={false}
        placeholder={placeholder}
        placeholderTextColor="rgb(174, 180, 187)"
      />
    </View>
  );
};

SearchBox.propTypes = {
  placeholder: PropTypes.string,
};

SearchBox.defaultProps = {
  placeholder: 'Đây là khung tìm kiếm',
};

export default SearchBox;
