import React from 'react';
import { View, TextInput, Text } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

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
