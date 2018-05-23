import React from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';
import ChatMessageItem from '../../../components/chatComponents/ChatMessageItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});

const mockData = [
  {
    id: '1',
    name: 'Tuấn Anh',
    body: 'bạn ơi',
    time: '2s trước',
    status: 'MSG_PENDING',
  },
  {
    id: '2',
    name: 'Hồ Ngọc Hà',
    body: 'không phải vậy đâu bạn ơi',
    time: '2s trước',
    status: 'MSG_PENDING',
  },
  {
    id: '3',
    name: 'Mai Anh',
    body: 'đoạn chat bên kia đã nhận được',
    time: '15ph trước',
    status: 'MSG_SENT',
  },
  {
    id: '4',
    name: 'Thùy Dung',
    body: 'đoạn chat bên kia đã nhận và đã xem',
    time: '5h trước',
    status: 'MSG_SEEN',
  },
  {
    id: '5',
    name: 'Chi Dân',
    body: 'đoạn chat lỗi gửi không tới',
    time: '2 ngày trước',
    status: 'MSG_ERROR',
  },
];

class ChatScreen extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[{ title: 'Đang chat', data: mockData }]}
          renderItem={({ item, index, section }) => <ChatMessageItem key={item.id} item={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={{ fontWeight: 'bold' }}>{title}</Text>
          )}
        />
      </View>
    );
  }
}

export default ChatScreen;
