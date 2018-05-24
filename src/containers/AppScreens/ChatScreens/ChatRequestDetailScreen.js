import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import MyButton from '../../../components/common/MyButton';
import ChatMessageDetailItem from '../../../components/chatComponents/ChatMessageDetailItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(223, 228, 234)',
  },
  upperContainer: {
    backgroundColor: '#FFF',
    shadowOffset: { width: 0, height: 10 },
    shadowColor: '#ced4db',
    shadowOpacity: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 11,
    paddingRight: 33,
    paddingTop: 20,
    marginBottom: 12,
  },
  followInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 16,
    paddingBottom: 26,
  },
  followerInfoContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginRight: 49,
  },
  followingInfoContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  lowerContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameAndTextContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 45,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 26,
  },
  avatar: {
    width: 96,
    height: 96,
  },
  username: {
    fontSize: 24,
    color: 'rgb(48, 49, 55)',
    marginBottom: 5,
    paddingLeft: 16,
  },
  userDescription: {
    fontSize: 13,
    color: 'rgb(137, 139, 155)',
    marginBottom: 19,
    paddingLeft: 16,
  },
  followerNumber: {
    fontSize: 20,
  },
  followerText: {
    fontSize: 14,
    color: 'rgb(137, 139, 155)',
  },
  followingNumber: {
    fontSize: 20,
  },
  followingText: {
    fontSize: 14,
    color: 'rgb(137, 139, 155)',
  },
  username2: {
    fontSize: 16,
    color: 'rgb(48, 49, 55)',
  },
  textRequest: {
    fontSize: 16,
    color: 'rgb(94, 96, 112)',
  },
  skipText: {
    fontSize: 14,
    color: 'rgb(63, 81, 181)',
  },
});

const avatar = require('../../../assets/images/chatScreens/avatar2.png');
const followIcon = require('../../../assets/images/chatScreens/chatRequestDetailFollowIcon.png');
const chatRequestAcceptIcon = require('../../../assets/images/chatScreens/chatRequestAcceptIcon.png');
const chatRequestDeclineIcon = require('../../../assets/images/chatScreens/chatRequestDeclineIcon.png');

class ChatRequestDetailScreen extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.upperContainer}>
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
          <Text style={styles.username}>Lê Bảo Hân</Text>
          <Text style={styles.userDescription}>Chuyên gia sử học</Text>
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
        </View>
        <View style={styles.lowerContainer}>
          <View style={styles.nameAndTextContainer}>
            <Text style={styles.username2}>Lê Bảo Hân</Text>
            <Text style={styles.textRequest}> muốn được chat với bạn</Text>
          </View>
          <ChatMessageDetailItem
            item={{
              messageBody:
                'Đây là thông điệp lúc request chat mà user Lê Bảo Hân đã nhập gửi tới người dùng.',
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
      </View>
    );
  }
}

export default ChatRequestDetailScreen;
