import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  outerContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(63, 81, 181, 0.7)',
  },
  innerContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 15,
    elevation: 1,
    marginLeft: 15,
    marginRight: 15,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 35,
  },
  introText: {
    fontSize: 14,
    color: 'rgb(94, 96, 112)',
    marginBottom: 24,
  },
  bodyText: {
    fontSize: 14,
    color: 'rgb(137, 139, 155)',
  },
  cancelText: {
    fontSize: 14,
    color: 'rgb(63, 81, 181)',
    marginRight: 24,
  },
  okText: {
    fontSize: 14,
    color: 'rgb(63, 81, 181)',
  },
});
