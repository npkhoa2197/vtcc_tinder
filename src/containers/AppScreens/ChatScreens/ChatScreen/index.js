import React from 'react';
import { View, Animated, StatusBar, Dimensions } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import PropTypes from 'prop-types';

import Header from '../../../../components/common/Header';
import ChatMessageScreen from '../ChatMessageScreen';
import ChatRequestScreen from '../ChatRequestScreen';
import ChatBlacklistScreen from '../ChatBlacklistScreen';
import {
  CHAT_MESSAGE_SCREEN,
  CHAT_REQUEST_SCREEN,
  CHAT_BLACK_LIST_SCREEN,
  CHAT_CREATE_SCREEN,
  CHAT_MESSAGE_SCREEN_TITLE,
  CHAT_REQUEST_SCREEN_TITLE,
  CHAT_BLACK_LIST_SCREEN_TITLE,
} from '../../../../constants/strings/screenNames';
import { styles } from './styles';

const rightButtonIcon = require('../../../../assets/images/chatScreens/chatCreateIcon.png');

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

export default class ChatScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    index: 0,
    routes: [
      { key: CHAT_MESSAGE_SCREEN, title: CHAT_MESSAGE_SCREEN_TITLE },
      { key: CHAT_REQUEST_SCREEN, title: CHAT_REQUEST_SCREEN_TITLE },
      { key: CHAT_BLACK_LIST_SCREEN, title: CHAT_BLACK_LIST_SCREEN_TITLE },
    ],
  };

  handleIndexChange = index => this.setState({ index });

  renderLabel = props => ({ route, index }) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    const outputRange = inputRange.map(inputIndex => (inputIndex === index ? 'rgb(63,81,181)' : 'rgb(162,170,176)'));
    const color = props.position.interpolate({
      inputRange,
      outputRange,
    });

    return <Animated.Text style={[styles.labelStyle, { color }]}>{route.title}</Animated.Text>;
  };

  renderHeader = props => (
    <TabBar
      {...props}
      style={styles.tabBarStyle}
      indicatorStyle={styles.tabBarIndicatorStyle}
      renderLabel={this.renderLabel(props)}
    />
  );

  renderScene = SceneMap({
    CHAT_MESSAGE: ChatMessageScreen,
    CHAT_REQUEST: ChatRequestScreen,
    CHAT_BLACK_LIST: ChatBlacklistScreen,
  });

  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <Header
          headerText="Chat"
          backgroundColor="#3f51b5"
          textColor="#FFF"
          haveRightButton
          rightButtonIcon={rightButtonIcon}
          onRightButtonPress={() => this.props.navigation.navigate(CHAT_CREATE_SCREEN)}
        />
        <TabViewAnimated
          navigationState={this.state}
          renderScene={this.renderScene}
          renderHeader={this.renderHeader}
          onIndexChange={this.handleIndexChange}
          initialLayout={initialLayout}
        />
      </View>
    );
  }
}
