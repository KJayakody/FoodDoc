import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
// import { supabase } from '../../supabaseClient.js';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const navigation = useNavigation();

    const handleSignup = () => {
        // console.log("sign up")
        navigation.navigate('Quest_1');
        // Need to add signup logic here
        // console.log('Signup Button clicked');
        // console.log('Email:', email);
        // console.log('Password:', password);
    };

    const handleLogin = async () => {
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/images/img.jpg')} style={{flex: 1}}>
            <Image source={require('../../assets/images/fooddoc_logo.png')} style={{width: 300, height: 300, alignSelf: 'center'}} />
            <Text style={styles.title}>Signup</Text>

            <TextInput
                style={styles.input}
                type="email"
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                type="password"
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
            />
            
            <TouchableOpacity style={{marginTop: 10, width: 150, alignSelf: 'center' /*padding: 100,*/}}>
            <Button color={'green'} title='Sign up'onPress={handleSignup}>Signup</Button>
            </TouchableOpacity>

            <Text
            style={{textAlign: 'center', marginTop: 20,}} onPress={handleLogin}>
            Already have an account? Login here
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

    input: {
        left: 10,
        width: '95%',
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },

    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },

});

export default SignupScreen;