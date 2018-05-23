import { createSwitchNavigator } from 'react-navigation';
import { AuthStack, RegisterDoneStack } from './AuthStack';
import { AppStack } from './AppStack';
// import FriendsScreen from '../containers/FriendsScreen';
// import SwipeHotgirlListScreen from '../containers/SwipeHotgirlListScreen';
// import ChatScreen from '../containers/ChatScreen';

// const Home = createStackNavigator(
//   {
//     FriendsScreen: { screen: FriendsScreen, navigationOptions: { header: null } },
//     HotgirlsScreen: { screen: SwipeHotgirlListScreen, navigationOptions: { header: null } },
//     ChatScreen,
//   },
//   {
//     initialRouteName: 'FriendsScreen',
//   },
// );

const RootStack = createSwitchNavigator(
  {
    AuthStack,
    RegisterDoneStack,
    AppStack,
  },
  {
    initialRouteName: 'AuthStack',
  },
);

export default RootStack;
