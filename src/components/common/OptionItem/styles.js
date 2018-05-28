import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#FFF',
    borderBottomColor: 'rgb(236, 238, 240)',
    borderBottomWidth: 1,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 13,
    paddingBottom: 13,
    marginLeft: 15,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 11,
  },
  text: {
    fontSize: 14,
    color: 'rgb(48, 49, 55)',
  },
});

export default styles;
