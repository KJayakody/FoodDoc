import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Image } from 'react-native';
// import { supabase } from '../../supabaseClient.js';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSignup = () => {
        // Need to add signup logic here
        console.log('Signup Button clicked');
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <View>
            <ImageBackground source={require('../../assets/images/img.jpg')} style={{width: '100%', height: '100%', flex: 1}}>
            <Image source={require('../../assets/images/fooddoc_logo.png')} style={{width: 300, height: 300, alignSelf: 'center'}} />
            <Text>Signup</Text>
            <TextInput
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextInput
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleSignup}>Signup</Button>
            </ImageBackground>
        </View>
    );
};

export default SignupScreen;