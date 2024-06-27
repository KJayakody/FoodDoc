import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';

const Questionnaire = () => {
    const [answers, setAnswers] = useState([]);

    const navigation = useNavigation();

    const handleAnswer = (question, answer) => {
        setAnswers(prevAnswers => [...prevAnswers, { question, answer }]);
    };

    const handleSubmit = () => {
        // console.log('Submitted:', answers);
        navigation.navigate('Main');
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/images/img.jpg')} style={{width: '100%', height: '100%', flex: 1}}>
            <Text style={styles.title}>Questions</Text>
            <TouchableOpacity style={{marginTop: 50}}>
                <Text style={styles.question}>Question 1:Do you have any health complications?</Text>
                <RNPickerSelect
                onValueChange={(value) => setAnswers(value)}
                items={[
                    { label: 'Diabetes', value: 'Diabetes' },
                    { label: 'High Blood Cholesterol', value: 'High Blood Cholesterol' },
                    { label: 'High Blood Pressure', value: 'High Blood Pressure' },
                    { label: 'Heart Disease', value: 'Heart Disease' },
                    { label: 'Stroke', value: 'Stroke' },
                ]}
                style={{
                    inputIOS: styles.input,
                    inputAndroid: styles.input,
                }}
                placeholder={{
                    label: 'Select any that apply to you',
                    value: null,
                }}
            />

                <Text style={styles.question}>Question 2: Do you have any allergies?</Text>
                <RNPickerSelect
                onValueChange={(value) => setAnswers(value)}
                items={[
                    { label: 'Milk', value: 'Milk' },
                    { label: 'Eggs', value: 'Eggs' },
                    { label: 'Peanuts', value: 'Peanuts' },
                    { label: 'Tree Nuts', value: 'Tree Nuts' },
                    { label: 'Fish', value: 'Fish' },
                    { label: 'Shellfish', value: 'Shellfish' },
                    { label: 'Wheat', value: 'Wheat' },
                    { label: 'Soy', value: 'Soy' },
                    { label: 'Sesame', value: 'Sesame' },
                    { label: 'Sulfites', value: 'Sulfites' },
                ]}
                style={{
                    inputIOS: styles.input,
                    inputAndroid: styles.input,
                }}
                placeholder={{
                    label: 'Select any that apply to you',
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
        marginBottom: 10,
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

export default Questionnaire;