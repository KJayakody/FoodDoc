import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { supabase } from '../../supabaseClient.js';
import { useNavigation } from '@react-navigation/native';
import { getBackgroundColorAsync } from 'expo-system-ui';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigation = useNavigation();

  const handleLogin = async () => {
    /* const { user, error } = await supabase.auth.signIn({
      email,
      password,
    });

    if (error) setError(error.message);
    else { */
      //console.log('Logged in:', user);
      navigation.navigate('Main');
    //}
  };

  const handleSignup = async () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/images/img.jpg')} style={{flex: 1}}>
      <Image source={require('../../assets/images/fooddoc_logo.png')} style={{width: 300, height: 300, alignSelf: 'center'}} />
      <Text style={styles.title}>Login</Text>
      {error && <Text style={styles.error}>{error}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={{marginTop: 10, width: 150, alignSelf: 'center' /*padding: 100,*/}}>
      <Button color={'green'} title="Login" onPress={handleLogin} />
      </TouchableOpacity>

      <Text
        style={{textAlign: 'center', marginTop: 20,}} onPress={handleSignup}>
          Don’t have an account? Sign up here
      </Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    left: 10,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '95%',
    backgroundColor: '#fff',
  },
  error: {
    color: 'red',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default LoginScreen;
