import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: 23,
    paddingRight: 15,
    backgroundColor: '#FFF',
  },
  headerImageBackground: {
    position: 'absolute',
    top: 67,
    bottom: 446,
    width: 337,
    height: 134,
  },
  headerContainer: {
    alignItems: 'center',
    paddingTop: 72,
    marginBottom: 88,
  },
  buttonContainer: {
    marginBottom: 52,
    alignSelf: 'stretch',
  },
  bodyImage: {
    marginBottom: 30,
    width: 206,
    height: 228,
  },
  headerText1: {
    paddingTop: 49,
    paddingBottom: 16,
    textAlign: 'center',
    fontSize: 24,
    color: 'rgb(63, 81, 181)',
  },
  headerText2: {
    textAlign: 'center',
    fontSize: 15,
  },
});
