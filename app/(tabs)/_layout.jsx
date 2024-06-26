import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import TabBar from '../../components/TabBar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileButton from '../../components/ProfileButton';
import LoginScreen from './LoginScreen';

// Creating stack navigator
const Stack = createStackNavigator();

// Define the main component layout
const _layout = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FoodDoc" component={LoginScreen} />

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
