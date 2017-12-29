import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Splash from './src/components/splash';
import Login from './src/components/login';


export default class App extends React.Component {
  render() {
    return (
      <Login />
    );
  }
}

const styles = {
   container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}
