import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Image } from 'react-native';
import HomeScreen from '../containers/AppScreens/HomeScreens/HomeScreen';
import TopicScreen from '../containers/AppScreens/TopicScreens/TopicScreen';
import ProfileScreen from '../containers/AppScreens/ProfileScreens/ProfileScreen';
import MediaScreen from '../containers/AppScreens/MediaScreens/MediaScreen';
import ChatMessageScreen from '../containers/AppScreens/ChatScreens/ChatMessageScreen';
import ChatMessageDetailScreen from '../containers/AppScreens/ChatScreens/ChatMessageDetailScreen';
import ChatBlackListScreen from '../containers/AppScreens/ChatScreens/ChatBlacklistScreen';
import ChatBlacklistAddNewScreen from '../containers/AppScreens/ChatScreens/ChatBlacklistAddNewScreen';
import ChatBlacklistNotificationScreen from '../containers/AppScreens/ChatScreens/ChatBlacklistNotificationScreen';
import ChatRequestScreen from '../containers/AppScreens/ChatScreens/ChatRequestScreen';
import ChatRequestDetailScreen from '../containers/AppScreens/ChatScreens/ChatRequestDetailScreen';
import ChatScreen from '../containers/AppScreens/ChatScreens/ChatScreen';

const homeTabIcon = require('../assets/images/app/homeTabIcon.png');
const topicTabIcon = require('../assets/images/app/topicTabIcon.png');
const mediaTabIcon = require('../assets/images/app/mediaTabIcon.png');
const chatTabIcon = require('../assets/images/app/chatTabIcon.png');
const profileTabIcon = require('../assets/images/app/profileTabIcon.png');

const HomeStack = createStackNavigator({
  HomeScreen: { screen: HomeScreen, navigationOptions: { header: null } },
});

const TopicStack = createStackNavigator({
  TopicScreen: { screen: TopicScreen, navigationOptions: { header: null } },
});

const MediaStack = createStackNavigator({
  MediaScreen: { screen: MediaScreen, navigationOptions: { header: null } },
});

export const ChatMessageStack = createStackNavigator(
  {
    ChatMessageScreen: { screen: ChatMessageScreen, navigationOptions: { header: null } },
  },
  {
    initialRouteName: 'ChatMessageScreen',
  },
);

export const ChatRequestStack = createStackNavigator(
  {
    ChatRequestScreen: { screen: ChatRequestScreen, navigationOptions: { header: null } },
  },
  {
    initialRouteName: 'ChatRequestScreen',
  },
);

export const ChatBlacklistStack = createStackNavigator(
  {
    BlackListScreen: { screen: ChatBlackListScreen, navigationOptions: { header: null } },
  },
  {
    initialRouteName: 'BlackListScreen',
  },
);

// const ChatStack = createMaterialTopTabNavigator(
//   {
//     'ĐANG CHAT': {
//       screen: ChatMessageStack,
//     },
//     'YÊU CẦU CHAT': {
//       screen: ChatRequestStack,
//     },
//     'DS. CHẶN': {
//       screen: ChatBlacklistStack,
//     },
//   },
//   {
//     order: ['ĐANG CHAT', 'YÊU CẦU CHAT', 'DS. CHẶN'],
//     animationEnabled: false,
//   },
// );

const ProfileStack = createStackNavigator({
  ProfileScreen: { screen: ProfileScreen, navigationOptions: { header: null } },
});

const BottomNavigatorStack = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          if (focused) {
            return <Image style={{ width: 20, height: 17 }} source={homeTabIcon} />;
          }
          return <Image style={{ width: 20, height: 17, opacity: 0.3 }} source={homeTabIcon} />;
        },
      },
    },
    Topic: {
      screen: TopicStack,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          if (focused) {
            return <Image style={{ width: 20, height: 15 }} source={topicTabIcon} />;
          }
          return <Image style={{ width: 20, height: 15, opacity: 0.3 }} source={topicTabIcon} />;
        },
      },
    },
    Media: {
      screen: MediaStack,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          if (focused) {
            return <Image style={{ width: 40, height: 40 }} source={mediaTabIcon} />;
          }
          return <Image style={{ width: 40, height: 40, opacity: 0.3 }} source={mediaTabIcon} />;
        },
      },
    },
    Chat: {
      screen: ChatScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          if (focused) {
            return <Image style={{ width: 20, height: 20 }} source={chatTabIcon} />;
          }
          return <Image style={{ width: 20, height: 20, opacity: 0.3 }} source={chatTabIcon} />;
        },
      },
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          if (focused) {
            return <Image style={{ width: 18, height: 18 }} source={profileTabIcon} />;
          }
          return <Image style={{ width: 18, height: 18, opacity: 0.3 }} source={profileTabIcon} />;
        },
      },
    },
  },
  {
    order: ['Home', 'Topic', 'Media', 'Chat', 'Profile'],
  },
);

export const AppStack = createStackNavigator({
  BottomNavigatorStack: { screen: BottomNavigatorStack, navigationOptions: { header: null } },
  ChatMessageDetailScreen,
  ChatRequestDetailScreen,
  ChatBlacklistNotificationScreen: {
    screen: ChatBlacklistNotificationScreen,
    navigationOptions: { header: null },
  },
});
