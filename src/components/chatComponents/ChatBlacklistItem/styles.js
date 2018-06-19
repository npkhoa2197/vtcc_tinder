import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 23,
    marginTop: 15,
    marginBottom: 15,
  },
  leftContainer: {
    justifyContent: 'flex-start',
  },
  rightContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  name: {
    fontSize: 15,
    color: 'rgb(48, 49, 55)',
  },
  blacklistFrom: {
    fontSize: 12,
    color: 'rgb(137, 139, 155)',
  },
  removeText: {
    fontSize: 14,
    color: 'rgb(63, 81, 181)',
  },
});
