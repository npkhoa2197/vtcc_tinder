import { createStackNavigator } from 'react-navigation';
import UserFirstScreen from '../containers/LoginScreens/UserFirstScreen';
import UserRegisterScreen from '../containers/LoginScreens/UserRegisterScreen';
import UserLoginScreen from '../containers/LoginScreens/UserLoginScreen';
import UserRegisterDoneScreen from '../containers/LoginScreens/UserRegisterDoneScreen';

export const AuthStack = createStackNavigator(
  {
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
    LoginScreen: {
      screen: UserLoginScreen,
      navigationOptions: {
        title: 'Đăng nhập',
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
  },
  {
    initialRouteName: 'UserFirstScreen',
  },
);

export const RegisterDoneStack = createStackNavigator(
  {
    RegisterDoneScreen: { screen: UserRegisterDoneScreen, navigationOptions: { header: null } },
  },
  {
    initialRouteName: 'RegisterDoneScreen',
  },
);
