import React from 'react';
// import { View } from 'react-native';
import NotificationBox from '../../../components/common/NotificationBox';

class ChatBlacklistNotificationScreen extends React.PureComponent {
  render() {
    return (
      <NotificationBox
        boxTitle="Bỏ chặn chat với"
        boxBody="Khi bạn bỏ chặn, có thể gửi yêu cầu chat tới bạn và đoạn chat (nếu có) trước đây của bạn với sẽ được khôi phục."
        boxOkButtonText="BỎ CHẶN"
        boxCancelButtonText="THÔI"
      />
    );
  }
}

export default ChatBlacklistNotificationScreen;
