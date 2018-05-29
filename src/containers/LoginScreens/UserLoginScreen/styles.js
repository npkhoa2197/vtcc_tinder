import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#FFF',
  },
  backgroundImageStyle: {
    opacity: 0.05,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  headerContainer: {
    alignItems: 'center',
    paddingTop: 62,
    marginBottom: 24,
  },
  inputFieldContainer: {
    height: 224,
    justifyContent: 'space-evenly',
    alignSelf: 'flex-start',
  },
  buttonContainer: {
    marginBottom: 23,
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  buttonContainerUpper: {
    marginBottom: 72,
  },
  buttonContainerLower: {
    marginBottom: 21,
  },
  footerTextContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginLeft: 19,
  },
  headerImage: {
    width: 91,
    height: 80,
  },
  forgetPasswordText: {
    marginTop: 16,
    color: 'rgb(63, 81, 181)',
    fontSize: 15,
  },
  footerText1: {
    fontSize: 17,
  },
  footerText2: {
    fontSize: 17,
    color: 'rgb(63, 81, 181)',
  },
});
