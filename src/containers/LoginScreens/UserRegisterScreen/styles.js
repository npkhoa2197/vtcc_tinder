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
    marginBottom: 16,
  },
  inputFieldContainer: {
    height: 252,
    justifyContent: 'space-evenly',
    alignSelf: 'flex-start',
  },
  buttonContainer: {
    height: 128,
    marginBottom: 23,
    justifyContent: 'space-around',
    alignSelf: 'stretch',
  },
  footerTextContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginBottom: 21,
    marginLeft: 19,
  },
  headerImage: {
    width: 86,
    height: 93,
  },
  textDescription: {
    marginTop: 16,
    textAlign: 'center',
    fontSize: 15,
    color: '#000',
  },
  footerText1: {
    fontSize: 17,
  },
  footerText2: {
    fontSize: 17,
    color: 'rgb(63, 81, 181)',
  },
});
