import React from 'react';
import { View, Animated, StatusBar, Dimensions, StyleSheet } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

import Header from '../../../components/common/Header';
import ChatMessageScreen from './ChatMessageScreen';
import ChatRequestScreen from './ChatRequestScreen';
import ChatBlacklistScreen from './ChatBlacklistScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  labelStyle: {
    fontSize: 14,
    color: 'rgb(63, 81, 181)',
  },
  tabBarStyle: {
    backgroundColor: '#FFF',
    paddingTop: 10,
    paddingBottom: 10,
  },
  tabBarIndicatorStyle: {
    backgroundColor: '#FFF',
  },
});

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

export default class ChatScreen extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'CHAT_MESSAGE', title: 'ĐANG CHAT' },
      { key: 'CHAT_REQUEST', title: 'YÊU CẦU CHAT' },
      { key: 'CHAT_BLACK_LIST', title: 'DS. CHẶN' },
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
        <Header headerText="Chat" backgroundColor="#3f51b5" textColor="#FFF" />
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
