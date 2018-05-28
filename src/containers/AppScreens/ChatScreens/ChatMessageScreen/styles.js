import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#FFF',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
  },
  requestNumberBackground: {
    backgroundColor: 'rgb(245, 166, 35)',
    borderRadius: 20,
    borderColor: 'rgb(245, 166, 35)',
  },
  separator: {
    height: 1,
    backgroundColor: 'rgb(230, 230, 230)',
  },
  headerText: {
    fontSize: 14,
    color: 'rgb(94, 96, 112)',
  },
  requestNumber: {
    fontSize: 14,
    color: '#FFF',
    paddingLeft: 8,
    paddingRight: 8,
  },
});
