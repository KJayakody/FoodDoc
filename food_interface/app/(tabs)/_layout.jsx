import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import TabBar from '../../components/TabBar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileButton from '../../components/ProfileButton';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import Quest_1 from './Quest_1';
import Quest_2 from './Quest_2';
import Search_1 from './Search_1';

// Creating stack navigator
const Stack = createStackNavigator();

// Define the main component layout
const _layout = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="FoodDoc" 
        component={LoginScreen} 
        options= {{ headerShown : false }} 
      />

      <Stack.Screen
        name='Search'
        component={Search_1}
        options={{ headerShown : false }}
      />

      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{ headerShown : false }}
      />

      <Stack.Screen
        name='Signup'
        component={SignupScreen}
        options={{ headerShown : false }}
      />

      <Stack.Screen
        name="Quest_1"
        component={Quest_1}
        options={{ headerShown : false }}
      />

      <Stack.Screen
        name="Quest_2"
        component={Quest_2}
        options={{ headerShown : false }}
      />

      <Stack.Screen
        name="Main"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      
      <Stack.Screen
        name="Profile"
        component={ProfileButton}
        options={{ title: 'Profile' }}
      />
    </Stack.Navigator>
  );
};

// Define the main tabs component
const MainTabs = () => {
  return (
    <Tabs
      tabBar={props => <TabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{ title: 'FoodDoc', headerShown: false }}
      />
      <Tabs.Screen
        name="AI"
        options={{ title: 'AI', headerShown: false }}
      />
      <Tabs.Screen
        name="scan"
        options={{ title: 'Scan' }}
      />
      <Tabs.Screen
        name="Book"
        options={{ title: 'Book' }}
      />
      <Tabs.Screen
        name="Settings"
        options={{ title: 'Settings' }}
      />
    </Tabs>
  );
};

export default _layout;
