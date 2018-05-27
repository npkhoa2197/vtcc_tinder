export const mockDataChatMessage = [
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

export const mockDataChatRequest = [
  {
    id: '1',
    name: 'Thùy Dung',
    requestTime: '5h trước',
  },
  {
    id: '2',
    name: 'Lê Bảo Hân',
    requestTime: '5h trước',
  },
];

export const mockDataChatBlacklist = [
  {
    id: '1',
    name: 'Đức Trí',
    blacklistFrom: '27/03/2018',
  },
  {
    id: '2',
    name: 'Hồ Ngọc Hà',
    blacklistFrom: '27/03/2018',
  },
  {
    id: '3',
    name: 'Hồ Quỳnh Hương',
    blacklistFrom: '27/03/2018',
  },
  {
    id: '4',
    name: 'Đàm Vĩnh Hưng',
    blacklistFrom: '27/03/2018',
  },
  {
    id: '5',
    name: 'Lê Hoàng',
    blacklistFrom: '27/03/2018',
  },
];

export const mockDataChatMessageDetail = [
  {
    id: '1',
    senderuid: 'UIXa10',
    body:
      'Bạn hoàn toàn có thể rửa mặt bằng nước muối 0.5%. Nếu có thể, bạn làm ấm một chút bằng lò vi sóng thì sẽ còn tốt hơn nữa.',
    time: '09:14 am',
    status: '',
  },
  {
    id: '2',
    senderuid: 'UIXa10',
    body:
      'Bạn hoàn toàn có thể rửa mặt bằng nước muối 0.5%. Nếu có thể, bạn làm ấm một chút bằng lò vi sóng thì sẽ còn tốt hơn nữa.',
    time: '09:14 am',
    status: '',
  },
  {
    id: '3',
    senderuid: 'WZXa10',
    body: 'Đây là nội dung chat của người dùng, không hiện avatar.',
    time: '09:14 am',
    status: 'MSG_SENT',
  },
  {
    id: '4',
    senderuid: 'WZXa10',
    body: 'Khi đã nhận nhưng chưa xem',
    time: '09:14 am',
    status: 'MSG_RECEIVED',
  },
  {
    id: '5',
    senderuid: 'WZXa10',
    body: 'Khi đã nhận nhưng chưa xem',
    time: '09:14 am',
    status: 'MSG_ERROR',
  },
];

export const mockDataChatCreate = [
  {
    id: '1',
    name: 'Kiên Trần',
    jobTitle: 'Nhân viên tự do',
  },
  {
    id: '2',
    name: 'Kiên Trần',
    jobTitle: 'Giáo sư sử học',
  },
  {
    id: '3',
    name: 'Kiên Trần',
    jobTitle: 'Nhân viên tự do',
  },
  {
    id: '4',
    name: 'Kiên Trần',
    jobTitle: 'Tiêu đề',
  },
];
