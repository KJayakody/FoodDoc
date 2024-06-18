import { View, Text } from 'react-native'
import React from 'react'
import {Tabs} from 'expo-router'
import TabBar from '../../components/TabBar'


const _layout = () => {
  return (
    <Tabs
         tabBar={props=> <TabBar {...props} />}
         
    >
      <Tabs.Screen
          name="index"
          options={{
            title :"FoodDoc"
             }} 
      />

      <Tabs.Screen
          name="AI"
          options={{
            title :"AI"
          }} 

      />

      <Tabs.Screen
          name="scan"
          options={{
            title :"Scan"
          }}
          
      />    


      <Tabs.Screen
          name="Book"
          options={{
            title :"Book"
          }} 

      />
      
      <Tabs.Screen
          name="Settings"
          options={{
            title :"Settings"
          }} 

      />   

    
    </Tabs> 
      
  )
}

export default _layout
