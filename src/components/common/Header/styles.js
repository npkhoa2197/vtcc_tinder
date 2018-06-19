import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 44 + 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 17,
  },
  containerIos: {
    height: 44 + 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 17,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  backButton: {
    width: 24,
    height: 24,
    marginRight: 17,
  },
  rightButton: {
    width: 24,
    height: 24,
  },
  imageStyle: {
    height: 50,
    width: 50,
  },
  titleStyle: {
    fontSize: 17,
  },
});
