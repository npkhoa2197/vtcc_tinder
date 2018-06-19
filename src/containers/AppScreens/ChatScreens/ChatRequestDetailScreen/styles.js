import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(223, 228, 234)',
  },
  upperContainer: {
    backgroundColor: '#FFF',
    shadowOffset: { width: 0, height: 10 },
    shadowColor: '#ced4db',
    shadowOpacity: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 11,
    paddingRight: 33,
    paddingTop: 20,
    marginBottom: 12,
  },
  followInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 16,
    paddingBottom: 26,
  },
  followerInfoContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginRight: 49,
  },
  followingInfoContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  lowerContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameAndTextContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 45,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 26,
  },
  avatar: {
    width: 96,
    height: 96,
  },
  username: {
    fontSize: 24,
    color: 'rgb(48, 49, 55)',
    marginBottom: 5,
    paddingLeft: 16,
  },
  userDescription: {
    fontSize: 13,
    color: 'rgb(137, 139, 155)',
    marginBottom: 19,
    paddingLeft: 16,
  },
  followerNumber: {
    fontSize: 20,
  },
  followerText: {
    fontSize: 14,
    color: 'rgb(137, 139, 155)',
  },
  followingNumber: {
    fontSize: 20,
  },
  followingText: {
    fontSize: 14,
    color: 'rgb(137, 139, 155)',
  },
  username2: {
    fontSize: 16,
    color: 'rgb(48, 49, 55)',
  },
  textRequest: {
    fontSize: 16,
    color: 'rgb(94, 96, 112)',
  },
  skipText: {
    fontSize: 14,
    color: 'rgb(63, 81, 181)',
  },
});
