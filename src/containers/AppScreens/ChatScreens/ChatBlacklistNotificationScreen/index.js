import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import NotificationBox from '../../../../components/common/NotificationBox';

class ChatBlacklistNotificationScreen extends React.PureComponent {
  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
      getParam: PropTypes.func.isRequired,
    }).isRequired,
  };
  render() {
    const name = this.props.navigation.getParam('blockUserName');
    const boxTitle = `Bỏ chặn chat với ${name}`;
    const boxBody = `Khi bạn bỏ chặn, ${name} có thể gửi yêu cầu chat tới bạn và đoạn chat (nếu có) trước đây của bạn với ${name} sẽ được khôi phục.`;
    return (
      <View style={{ paddingLeft: 30, paddingRight: 30 }}>
        <NotificationBox
          boxTitle={boxTitle}
          boxBody={boxBody}
          boxOkButtonText="BỎ CHẶN"
          onOkPress={() => this.props.navigation.goBack()}
          boxCancelButtonText="THÔI"
          onCancelPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

export default ChatBlacklistNotificationScreen;
