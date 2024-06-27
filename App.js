import { View, Text ,StyleSheet, FlatList } from 'react-native'
import React from 'react'
import FoodListItems from '../my-app/components/FoodListItems';

const foodItems = [
  {label :"Pizza" , cal :75 ,brand : 'Dominos'},
  {label :"Apple" , cal :75 ,brand : 'Generic'},
];

export default function App() {
    return (
        <View style={styles.container}>
            <FlatList
            data={foodItems}
            renderItem={({item}) => <FoodListItems item= {item} />}
            contentContainerStyle={{gap:5}}
            />
             
        </View>
        
      );
    }
    const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    padding :10,
    justifyContent: 'center',
    gap :5,
    },
    });

