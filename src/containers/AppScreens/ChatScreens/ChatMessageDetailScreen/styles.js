import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  messageListContainer: {
    flex: 1,
  },
  inputFieldContainer: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#FFF',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 15,
    paddingTop: 7,
    paddingBottom: 7,
  },
  textInputContainer: {
    flex: 1,
    borderWidth: 1,
    alignItems: 'flex-start',
    borderColor: 'rgb(236, 238, 240)',
    borderRadius: 25,
    marginRight: 10,
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 22,
  },
  textInput: {
    flex: 1,
    fontSize: 15,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
