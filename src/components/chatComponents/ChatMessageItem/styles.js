import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 19,
    paddingBottom: 18,
    marginLeft: 10,
    marginRight: 16,
  },
  leftContainer: {
    flexDirection: 'row',
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 12,
  },
  bodyContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 14,
  },
  name: {
    fontSize: 16,
    marginBottom: 2,
    color: 'rgb(48, 49, 55)',
  },
  icon: {
    width: 13,
    height: 8,
    marginRight: 4,
  },
  body: {
    fontSize: 13,
  },
  time: {
    fontSize: 12,
  },
});
