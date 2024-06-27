import React, { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';

const Quest_1 = () => {
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [activityLevel, setActivityLevel] = useState('');

    const navigation = useNavigation();

    const handleSubmit = () => {
        navigation.navigate('Quest_2');
        // Need to handle form submissions here
        // console.log('Submitted:', { age, gender, height, weight, activityLevel });
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/images/img.jpg')} style={{flex: 1}}>
            <Text style={styles.title}>Questions</Text>
            <TouchableOpacity style={{marginTop: 50}}>

            <Text style={styles.question}>Age:</Text>
            <RNPickerSelect
                onValueChange={(value) => setAge(value)}
                items={[
                    { label: '18', value: '18' },
                    { label: '19', value: '19' },
                    { label: '20', value: '20' },
                    { label: '21', value: '21' },
                    // Need to add more age options here
                ]}
                style={{
                    inputIOS: styles.input,
                    inputAndroid: styles.input,
                }}
                placeholder={{
                    label: 'Select your age',
                    value: null,
                }}
            />

            <Text style={styles.question}>Gender:</Text>
            <RNPickerSelect
                onValueChange={(value) => setGender(value)}
                items={[
                    { label: 'Male', value: 'Male' },
                    { label: 'Female', value: 'Female' },
                    // Need to add more age options here
                ]}
                style={{
                    inputIOS: styles.input,
                    inputAndroid: styles.input,
                }}
                placeholder={{
                    label: 'Select your gender',
                    value: null,
                }}
            />

            <Text style={styles.question}>Height:</Text>
            <RNPickerSelect
                onValueChange={(value) => setHeight(value)}
                items={[
                    { label: '5ft 0in', value: '5ft 0in' },
                    { label: '5ft 1in', value: '5ft 1in' },
                    { label: '5ft 2in', value: '5ft 2in' },
                    { label: '5ft 3in', value: '5ft 3in' },
                    { label: '5ft 4in', value: '5ft 4in' },
                    { label: '5ft 5in', value: '5ft 5in' },
                    { label: '5ft 6in', value: '5ft 6in' },
                    { label: '5ft 7in', value: '5ft 7in' },
                    // Need to add more age options here
                ]}
                style={{
                    inputIOS: styles.input,
                    inputAndroid: styles.input,
                }}
                placeholder={{
                    label: 'Select your height',
                    value: null,
                }}
            />

            <Text style={styles.question}>Weight:</Text>
            <TextInput
                style={styles.input}
                value={weight}
                onChangeText={setWeight}
                placeholder="Enter your weight                                                      kg"
            />

            <Text style={styles.question}>Activity Level:</Text>
            <RNPickerSelect
                onValueChange={(value) => setActivityLevel(value)}
                items={[
                    { label: 'Sedentary: Little or no exercise', value: 'Sedentary: Little or no exercise' },
                    { label: 'Light: Exercise 1-3 times/week', value: 'Light: Exercise 1-3 times/week' },
                    { label: 'Moderate: Exercise 4-5 times/week', value: 'Moderate: Exercise 4-5 times/week' },
                    { label: 'Active: Daily exercise or intense exercise 3-4 times/week', value: 'Active: Daily exercise or intense exercise 3-4 times/week' },
                    { label: 'Very Active: Intense exercise 6-7 times/week', value: 'Very Active: Intense exercise 6-7 times/week'},
                    { label: 'Extra Active: Very intense exercise daily, or physical job', value: 'Extra Active: Very intense exercise daily, or physical job'}
                    // Need to add more age options here
                ]}
                style={{
                    inputIOS: styles.input,
                    inputAndroid: styles.input,
                }}
                placeholder={{
                    label: 'Select your activity level',
                    value: null,
                }}
            />
            </TouchableOpacity>

            <TouchableOpacity style={{marginTop: 20, width: 150, alignSelf: 'center' /*padding: 100,*/}}>
                <Button color={'green'} title="Submit" onPress={handleSubmit} />
            </TouchableOpacity>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },

    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 50,
    },

    question: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 10,
    },

    input: {
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10, 
        color: '#333', 
        backgroundColor: '#fff',
        width: '100%', 
        // textAlign: 'center', 
      },

});

export default Quest_1;

