import * as React from 'react';
import {  View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {Header} from '../components/Header';
import { Text, TextInput, Button } from 'react-native-paper';
import { useState } from "react";


export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Header title="Login" />
      <TextInput
          style={styles.input}
          placeholder="Nom d'utilisateur"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button mode="contained" style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    width: 200,
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 12,
  },
  buttonText: {
    color: "#fff",
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: '#333',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  }
});
