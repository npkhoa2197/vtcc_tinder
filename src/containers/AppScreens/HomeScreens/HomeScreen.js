import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});

class HomeScreen extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text>Chức năng này hiện chưa có</Text>
      </View>
    );
  }
}

export default HomeScreen;
