import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 46,
    backgroundColor: '#FFF',
  },
  backgroundImageStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  headerContainer: {
    alignSelf: 'flex-start',
  },
  footerContainer: {
    height: 180,
    marginBottom: 23,
    justifyContent: 'space-around',
    alignSelf: 'stretch',
  },
  footerTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyImage: {
    width: 359,
    height: 354,
    position: 'absolute',
    top: 97,
    bottom: 216,
    right: 16,
    left: 0,
  },
  logo: {
    width: 204,
    height: 56,
  },
  bigDescription: {
    fontSize: 36,
    color: '#FFF',
    marginTop: 35,
  },
  smallDescriptionContainer: {
    marginTop: 16,
  },
  smallDescription: {
    fontSize: 16,
    color: '#FFF',
    marginTop: 5,
  },
  orText: {
    fontSize: 15,
    color: '#FFF',
  },
  registerText: {
    fontSize: 18,
    color: '#FFF',
  },
});
