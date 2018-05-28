import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#FFF',
  },
  headerContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 15,
    marginRight: 55,
    marginBottom: 13,
    marginTop: 16,
  },
  addText: {
    fontSize: 14,
    color: 'rgb(63, 81, 181)',
  },
  instructionText: {
    fontSize: 14,
    color: 'rgb(48, 49, 55)',
  },
  separator: {
    marginLeft: 15,
    marginRight: 15,
    height: 1,
    backgroundColor: 'rgb(230, 230, 230)',
  },
  bodySeparator: {
    backgroundColor: 'rgb(223, 228, 234)',
    height: 4,
  },
});
