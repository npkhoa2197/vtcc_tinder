import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { mockDataChatCreate } from '../../../constants/mockData';
import ChatCreateContactItem from '../../../components/chatComponents/ChatCreateContactItem';
import SearchBox from '../../../components/common/SearchBox';
import Header from '../../../components/common/Header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#FFF',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#FFF',
    paddingLeft: 22,
    paddingTop: 12,
  },
  sectionHeader: {
    fontSize: 14,
    color: 'rgb(48, 49, 55)',
    marginBottom: 17,
  },
});

class ChatCreateScreen extends React.PureComponent {
  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
    }).isRequired,
  };
  keyExtractor = item => item.id;
  renderItem = item => <ChatCreateContactItem item={item} />;
  renderSectionHeader = title => <Text style={styles.sectionHeader}>{title}</Text>;
  render() {
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
        <View style={styles.innerContainer}>
          <SectionList
            sections={[
              {
                title: 'A',
                data: mockDataChatCreate.slice(0, 2),
              },
              { title: 'B', data: mockDataChatCreate.slice(2, 4) },
            ]}
            keyExtractor={this.keyExtractor}
            renderItem={({ item }) => this.renderItem(item)}
            renderSectionHeader={({ section: { title } }) => this.renderSectionHeader(title)}
            stickySectionHeadersEnabled={false}
          />
        </View>
      </View>
    );
  }
}

export default ChatCreateScreen;
