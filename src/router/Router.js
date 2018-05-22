import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import FriendsScreen from '../containers/FriendsScreen';
import SwipeHotgirlListScreen from '../containers/SwipeHotgirlListScreen';
import ChatScreen from '../containers/ChatScreen';
import UserFirstScreen from '../containers/LoginScreens/UserFirstScreen';

const AuthStack = createStackNavigator({
  UserFirstScreen: { screen: UserFirstScreen, navigationOptions: { header: null } },
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
