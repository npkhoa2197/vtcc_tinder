import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container1: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 10,
    marginRight: 15,
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginLeft: 10,
    marginRight: 15,
  },
  leftContainer: {
    marginRight: 5,
  },
  rightContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  messageContainer: {
    width: 310,
    borderRadius: 10,
    backgroundColor: '#FFF',
    marginBottom: 8,
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 14,
    width: 35,
    height: 35,
  },
  messageBody: {
    fontSize: 15,
    color: 'rgb(51, 51, 51)',
    paddingTop: 14,
    paddingBottom: 16,
    paddingLeft: 13,
    paddingRight: 12,
  },
  time: {
    fontSize: 12,
    color: 'rgb(153, 163, 171)',
    marginBottom: 8,
  },
  icon: {
    width: 13,
    height: 8,
    marginRight: 4,
    marginBottom: 8,
  },
  status: {
    fontSize: 12,
    color: 'rgb(153, 163, 171)',
    marginBottom: 8,
  },
  tryAgainText: {
    color: 'rgb(63, 81, 181)',
    fontSize: 12,
    marginBottom: 8,
    marginLeft: 5,
  },
});
