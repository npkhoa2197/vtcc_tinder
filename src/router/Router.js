import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import FriendsScreen from '../containers/FriendsScreen';
import SwipeHotgirlListScreen from '../containers/SwipeHotgirlListScreen';
import ChatScreen from '../containers/ChatScreen';
import UserFirstScreen from '../containers/LoginScreens/UserFirstScreen';
import UserRegisterScreen from '../containers/LoginScreens/UserRegisterScreen';

const AuthStack = createStackNavigator({
  UserFirstScreen: { screen: UserFirstScreen, navigationOptions: { header: null } },
  RegisterScreen: {
    screen: UserRegisterScreen,
    navigationOptions: {
      title: 'Đăng ký tài khoản',
      headerStyle: {
        position: 'absolute',
        backgroundColor: 'transparent',
        zIndex: 100,
        top: 0,
        left: 0,
        right: 0,
        borderBottomWidth: 0,
      },
    },
  },
});

const Home = createStackNavigator(
  {
    FriendsScreen: { screen: FriendsScreen, navigationOptions: { header: null } },
    HotgirlsScreen: { screen: SwipeHotgirlListScreen, navigationOptions: { header: null } },
    ChatScreen,
  },
  {
    initialRouteName: 'FriendsScreen',
  },
);

const RootStack = createSwitchNavigator(
  {
    AuthStack,
    Home,
  },
  {
    initialRouteName: 'AuthStack',
  },
);

export default RootStack;
