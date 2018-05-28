import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 19,
    paddingBottom: 16,
    marginLeft: 10,
    marginRight: 21,
  },
  leftContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight: 12,
  },
  rightContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  innerUpperContainer: {
    marginBottom: 15,
  },
  innerLowerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  nameAndTextContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 2,
  },
  avatar: {
    width: 35,
    height: 35,
  },
  name: {
    fontSize: 16,
    color: 'rgb(48, 49, 55)',
  },
  text: {
    fontSize: 16,
    color: 'rgb(94, 96, 112)',
  },
  body: {
    fontSize: 16,
    color: 'rgb(94, 96, 112)',
  },
  time: {
    fontSize: 12,
    color: 'rgb(137, 139, 155)',
  },
  skipText: {
    fontSize: 14,
    color: 'rgb(63, 81, 181)',
  },
});
