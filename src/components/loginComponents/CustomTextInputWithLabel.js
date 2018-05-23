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
  textInputContainer: {
    alignSelf: 'stretch',
  },
  label: {
    fontSize: 14,
    color: 'rgb(137, 139, 155)',
    marginBottom: 11,
  },
  textInput: {
    fontSize: 16,
    borderBottomColor: '#cecece',
    borderBottomWidth: 1,
    paddingBottom: 10,
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
          style={styles.textInput}
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
