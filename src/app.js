import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyDMhQWLgqaIRq8idxEUeeTXarDld-NecG4',
    authDomain: 'auth-cec72.firebaseapp.com',
    databaseURL: 'https://auth-cec72.firebaseio.com',
    projectId: 'auth-cec72',
    storageBucket: 'auth-cec72.appspot.com',
    messagingSenderId: '974410577709'
  });
}

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
