import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/components/Login/Login';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Login/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
