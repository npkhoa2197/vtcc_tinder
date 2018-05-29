import React from 'react';
import { View, Text, Modal, TouchableWithoutFeedback } from 'react-native';
import { styles } from './styles';

class ToastAlert extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      text: '',
    };
  }

  onToastAlertClose = () => {
    this.setState({ visible: false, text: '' });
  };

  show = (message) => {
    this.setState({ visible: true, text: message });
    setTimeout(() => this.setState({ visible: false, text: '' }), 2000);
  };

  render() {
    return (
      <Modal animationType="fade" transparent visible={this.state.visible}>
        <TouchableWithoutFeedback onPress={() => this.onToastAlertClose()}>
          <View style={styles.container}>
            <View style={styles.textContainer}>
              <Text style={styles.text} numberOfLines={2}>
                {this.state.text}
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

export default ToastAlert;
