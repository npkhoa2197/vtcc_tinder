import React from 'react';
import { View, TouchableWithoutFeedback, Text, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

class NotificationBox extends React.Component {
  static propTypes = {
    boxTitle: PropTypes.string,
    boxBody: PropTypes.string,
    boxOkButtonText: PropTypes.string,
    onOkPress: PropTypes.func,
    boxCancelButtonText: PropTypes.string,
    onCancelPress: PropTypes.func,
  };

  static defaultProps = {
    boxTitle: 'Hộp thông báo',
    boxBody: 'Đây là nội dung hộp thông báo',
    boxOkButtonText: 'Đồng ý',
    onOkPress: () => {},
    boxCancelButtonText: 'Thôi',
    onCancelPress: () => {},
  };

  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.visible !== this.state.visible;
  }

  show = () => {
    this.setState({ visible: true });
  };

  render() {
    const {
      boxTitle,
      boxBody,
      boxOkButtonText,
      onOkPress,
      boxCancelButtonText,
      onCancelPress,
    } = this.props;
    const { width, height } = Dimensions.get('window');

    if (this.state.visible) {
      return (
        <View style={[styles.outerContainer, { width, height }]}>
          <TouchableWithoutFeedback onPress={onCancelPress}>
            <View style={[styles.outerContainer, { width, height }]} />
          </TouchableWithoutFeedback>
          <View style={styles.innerContainer}>
            <Text style={styles.introText}>{boxTitle}</Text>
            <Text style={styles.bodyText}>{boxBody}</Text>
            <View style={styles.btnContainer}>
              <Text style={styles.cancelText} onPress={onCancelPress}>
                {boxCancelButtonText}
              </Text>
              <Text style={styles.okText} onPress={onOkPress}>
                {boxOkButtonText}
              </Text>
            </View>
          </View>
        </View>
      );
    }
    return <View />;
  }
}

export default NotificationBox;
