import { View, Text ,StyleSheet } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';


const FoodListItems = ({item}) => {
    return (
        <View style={{
            backgroundColor : 'gainsboro',
            padding : 10 ,
            borderRadius :5,
            flexDirection : 'row',
            justifyContent : 'space-between',
            alignItems : 'center',

            }}>
        <View style={{flex :1 ,gap :5}}>     
        <Text style={{fontWeight: 'bold',fontSize :16 }}>{item.label}</Text>
        <Text style={{color :'dimgrey'}}>{item.cal} cal ,{item.brand}</Text>
        </View>
        <AntDesign name="pluscircleo" size={24} color="royalblue" />   

        </View>
        
    )
}
export default FoodListItems;