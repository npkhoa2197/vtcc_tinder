import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    width: 340,
    height: 64,
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  label: {
    fontSize: 14,
    color: 'rgb(137, 139, 155)',
    marginBottom: 11,
  },
  textInputContainer: {
    alignSelf: 'stretch',
  },
});

export default class CustomTextInput extends React.PureComponent {
  static propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    onChangeText: PropTypes.func,
  };

  static defaultProps = {
    label: 'Label',
    placeholder: 'TextInput',
    secureTextEntry: false,
    onChangeText: () => {},
  };

  state = {
    text: '',
  };

  clear() {
    this.setState({ text: '' });
  }

  render() {
    const {
      placeholder, secureTextEntry, onChangeText, label,
    } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          onChangeText={(text) => {
            this.setState({ text });
            onChangeText(text);
          }}
          value={this.state.text}
          multiline={false}
          placeholder={placeholder}
          placeholderTextColor={this.state.text === '' ? 'grey' : 'black'}
          secureTextEntry={secureTextEntry}
        />
      </View>
    );
  }
}
