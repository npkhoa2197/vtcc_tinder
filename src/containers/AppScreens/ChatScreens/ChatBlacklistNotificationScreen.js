import React from 'react';
import { View } from 'react-native';
import NotificationBox from '../../../components/common/NotificationBox';

class ChatBlacklistNotificationScreen extends React.PureComponent {
  render() {
    return (
      <View style={{ paddingLeft: 30, paddingRight: 30 }}>
        <NotificationBox
          boxTitle="Bỏ chặn chat với"
          boxBody="Khi bạn bỏ chặn, có thể gửi yêu cầu chat tới bạn và đoạn chat (nếu có) trước đây của bạn với sẽ được khôi phục."
          boxOkButtonText="BỎ CHẶN"
          boxCancelButtonText="THÔI"
        />
      </View>
    );
  }
}

export default ChatBlacklistNotificationScreen;
