import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import MyButton from '../../../../components/common/MyButton';
import ChatMessageDetailItem from '../../../../components/chatComponents/ChatMessageDetailItem';
import Header from '../../../../components/common/Header';
import { styles } from './styles';

const optionIcon = require('../../../../assets/images/chatScreens/chatMessageDetailOptionItemDefaultIcon.png');
const avatar = require('../../../../assets/images/chatScreens/avatar2.png');
const followIcon = require('../../../../assets/images/chatScreens/chatRequestDetailFollowIcon.png');
const chatRequestAcceptIcon = require('../../../../assets/images/chatScreens/chatRequestAcceptIcon.png');
const chatRequestDeclineIcon = require('../../../../assets/images/chatScreens/chatRequestDeclineIcon.png');

class ChatRequestDetailScreen extends React.PureComponent {
  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
    }).isRequired,
  };

  renderUpperContainer = () => (
    <View style={styles.upperContainer}>
      {this.renderHeaderInUpperContent()}
      <Text style={styles.username}>Lê Bảo Hân</Text>
      <Text style={styles.userDescription}>Chuyên gia sử học</Text>
      {this.renderFollowInfoInUpperContent()}
    </View>
  );

  renderHeaderInUpperContent = () => (
    <View style={styles.headerContainer}>
      <Image style={styles.avatar} source={avatar} />
      <MyButton
        icon={followIcon}
        iconWidth={17}
        iconHeight={13}
        text="Theo dõi"
        fontSize={14}
        textColor="rgb(63, 81, 181)"
        height={32}
        borderColor="rgb(63, 81, 181)"
        paddingTop={4}
        paddingBottom={4}
        paddingLeft={9}
        paddingRight={12}
        marginRightIcon={8}
      />
    </View>
  );

  renderFollowInfoInUpperContent = () => (
    <View style={styles.followInfoContainer}>
      <View style={styles.followerInfoContainer}>
        <Text style={styles.followerNumber}>27</Text>
        <Text style={styles.followerText}>Follower</Text>
      </View>
      <View style={styles.followingInfoContainer}>
        <Text style={styles.followerNumber}>198</Text>
        <Text style={styles.followerText}>Following</Text>
      </View>
    </View>
  );

  renderLowerContainer = () => (
    <View style={styles.lowerContainer}>
      {this.renderNameAndTextInLowerContent()}
      <ChatMessageDetailItem
        item={{
          body: 'Đây là thông điệp lúc request chat mà user Lê Bảo Hân đã nhập gửi tới người dùng.',
          time: '09:12 am',
        }}
      />
      <View style={styles.buttonContainer}>
        <MyButton
          text="Chấp nhận"
          icon={chatRequestAcceptIcon}
          iconWidth={14}
          iconHeight={10}
          fontSize={14}
          textColor="rgb(63, 81, 181)"
          borderColor="rgb(214, 218, 223)"
          height={32}
          paddingTop={4}
          paddingBottom={4}
          paddingRight={13}
          paddingLeft={12}
          marginRight={23}
          marginRightIcon={6}
        />
        <MyButton
          text="Từ chối"
          icon={chatRequestDeclineIcon}
          iconWidth={14}
          iconHeight={10}
          fontSize={14}
          textColor="rgb(63, 81, 181)"
          borderColor="rgb(214, 218, 223)"
          height={32}
          paddingTop={4}
          paddingBottom={4}
          paddingRight={13}
          paddingLeft={12}
          marginRight={24}
          marginRightIcon={6}
        />
        <Text style={styles.skipText}>Bỏ qua</Text>
      </View>
    </View>
  );

  renderNameAndTextInLowerContent = () => (
    <View style={styles.nameAndTextContainer}>
      <Text style={styles.username2}>Lê Bảo Hân</Text>
      <Text style={styles.textRequest}> muốn được chat với bạn</Text>
    </View>
  );
  render() {
    return (
      <View style={styles.container}>
        <Header
          headerText="Lê Bảo Hân"
          isBack
          onBackPress={() => this.props.navigation.goBack()}
          haveRightButton
          rightButtonIcon={optionIcon}
        />
        {this.renderUpperContainer()}
        {this.renderLowerContainer()}
      </View>
    );
  }
}

export default ChatRequestDetailScreen;
