import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Header from '../../../../components/common/Header';
import SearchBox from '../../../../components/common/SearchBox';
import { styles } from './styles';

class ChatBlacklistAddNewScreen extends React.PureComponent {
  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
    }).isRequired,
  };
  render() {
    return (
      <View style={styles.container}>
        <Header
          headerText="Thêm người muốn chặn"
          isBack
          onBackPress={() => this.props.navigation.goBack()}
        />
        <SearchBox placeholder="tìm kiếm hồ sơ" />
      </View>
    );
  }
}

export default ChatBlacklistAddNewScreen;
