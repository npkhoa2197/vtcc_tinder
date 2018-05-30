import React from 'react';
import { View, Text, SectionList, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import firebase from 'firebase';
import ChatCreateContactItem from '../../../../components/chatComponents/ChatCreateContactItem';
import SearchBox from '../../../../components/common/SearchBox';
import Header from '../../../../components/common/Header';
import LoadingSpinner from '../../../../components/LoadingSpinner';
import { styles } from './styles';
import { requestFetchUser } from '../../../../actions/fetchUsersActions';
import { firestore } from '../../../../utilities/configFirebase';
import chatIdCreator from '../../../../helpers/chatIdCreator';
import { CHAT_MESSAGE_DETAIL_SCREEN } from '../../../../constants/strings/screenNames';

class ChatCreateScreen extends React.PureComponent {
  static propTypes = {
    isFetchingUsers: PropTypes.bool.isRequired,
    sections: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      data: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      })).isRequired,
    })).isRequired,
    requestFetchUsers: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
      goBack: PropTypes.func.isRequired,
    }).isRequired,
  };

  componentDidMount() {
    this.props.requestFetchUsers();
  }

  handleContactItemPress = (contactId) => {
    const { uid } = firebase.auth().currentUser;
    const docId = chatIdCreator(uid, contactId);

    firestore
      .collection('chats')
      .doc(docId)
      .set({
        participants: {
          [uid]: true,
        },
      });

    firestore
      .collection('users')
      .doc(contactId)
      .get()
      .then((doc) => {
        this.props.navigation.navigate(CHAT_MESSAGE_DETAIL_SCREEN, {
          chatFriendName: doc.data().name,
        });
      });
  };

  keyExtractor = item => item.id;

  renderItem = item => (
    <TouchableOpacity activeOpacity={0.6} onPress={() => this.handleContactItemPress(item.id)}>
      <ChatCreateContactItem item={item} />
    </TouchableOpacity>
  );

  renderSectionHeader = title => <Text style={styles.sectionHeader}>{title}</Text>;

  renderList = sections => (
    <View style={styles.innerContainer}>
      <SectionList
        sections={sections}
        keyExtractor={this.keyExtractor}
        renderItem={({ item }) => this.renderItem(item)}
        renderSectionHeader={({ section: { title } }) => this.renderSectionHeader(title)}
        stickySectionHeadersEnabled={false}
      />
    </View>
  );

  render() {
    const { sections, isFetchingUsers } = this.props;

    return (
      <View style={styles.container}>
        <Header
          headerText="Tạo trò chuyện mới"
          isBack
          onBackPress={() => this.props.navigation.goBack()}
        />
        <SearchBox placeholder="nhập tên người muốn chat" />
        <View
          style={{
            height: 1,
            backgroundColor: 'rgb(230, 230, 230)',
          }}
        />
        <LoadingSpinner visible={isFetchingUsers} size="large" color="blue" />
        {this.renderList(sections)}
      </View>
    );
  }
}

const createSections = (users) => {
  const sections = [];

  users.forEach((user) => {
    if (user.name !== '') {
      // for (let i = 0; i < sections.length; i += 1) {
      //   if (sections[i].title === user.name[0]) {
      //     sections[i].data.push(user);
      //   } else if (i === sections.length - 1) {
      //     sections.push({ title: user.name[0], data: [{ user }] });
      //   }
      // }
      const res = sections.find(section => section.title === user.name[0]);
      if (res) {
        res.data.push(user);
      } else sections.push({ title: user.name[0], data: [{ ...user }] });
    }
  });

  return sections;
};

const mapStateToProps = state => ({
  isFetchingUsers: state.users.isFetchingUsers,
  sections: createSections(state.users.users),
});

const mapDispatchToProps = dispatch => ({
  requestFetchUsers: () => dispatch(requestFetchUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatCreateScreen);
