import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: 340,
    height: 64,
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  textInputContainer: {
    alignSelf: 'stretch',
  },
  label: {
    fontSize: 14,
    color: 'rgb(137, 139, 155)',
    marginBottom: 11,
  },
  textInput: {
    fontSize: 16,
    borderBottomColor: '#cecece',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
});
