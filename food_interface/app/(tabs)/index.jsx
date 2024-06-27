import 'react-native-gesture-handler';
import { View, Text, Image, TouchableOpacity, ImageBackground, TextInput ,ScrollView,  fontWeight } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Directions } from 'react-native-gesture-handler';
import AntDesign from '@expo/vector-icons/AntDesign';

import { useNavigation } from '@react-navigation/native';

const index = () => {

const navigation = useNavigation();

  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (text) => {
    setSearchText(text);
    navigation.navigate('Search');
  };

  return (
    <ImageBackground source={require('../../assets/images/img.jpg')} style={{ width: '100%', height: '100%' }}>
      <TouchableOpacity style={styles.profileButton} onPress={() => navigation.navigate('Profile') }>
        <FontAwesome name="user" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.searchBarContainer}>
        <TextInput
          placeholder="Search the product..."
          style={styles.searchInput}
          onPress={handleSearchChange}
          value={searchText}
        />
      </View>
      
      <View style={styles.contentcontainer}>
       <ScrollView >
         <View>
          <Text style={{fontSize :32, fontWeight : 700}} >
          How may I help {'\n'}you today? 
          </Text>
          <TouchableOpacity style={styles.AI} onPress={() => { /* Handle button press */ }}>
            <FontAwesome5 name="robot" size={43} color="white" />
          </TouchableOpacity>
         </View> 
         <View>
            <Image source={require('../../assets/images/img 3.png')} borderRadius={25} top={45}/>
         </View>   
            <View style={styles.subcontentcontainer}>
                  <Text style={{fontSize:32, fontWeight : 700  }}>Nutrient Breakdown</Text>
                
                  <View>
                  <Text style={{top : '50%' , fontSize : 22}}>Carbohydrates</Text>
                     <Image source={require('../../assets/images/carbo.png')} borderRadius={20} top={'80%'}/>
                  </View>
                  <View>
                  <Text style={{top : '90%' , fontSize : 22}}>Protein</Text>
                     <Image source={require('../../assets/images/protein.png')} borderRadius={20} top={'120%'}/>
                  </View>
                  <View>
                  <Text style={{top : '130%' , fontSize : 22}}>Fats</Text>
                     <Image source={require('../../assets/images/fat.png')} borderRadius={20} top={'160%'}/>
                  </View>
                  <View>
                  <Text style={{top : '170%' , fontSize : 22}}>Iron</Text>
                     <Image source={require('../../assets/images/carbo.png')} borderRadius={20} top={'200%'}/>
                  </View>
                  <View>
                  <Text style={{top : '210%' , fontSize : 22}}>Calcium</Text>
                     <Image source={require('../../assets/images/protein.png')} borderRadius={20} top={'240%'}/>
                  </View>
                  <View>
                  <Text style={{top : '250%' , fontSize : 22}}>Vitamin C</Text>
                     <Image source={require('../../assets/images/fat.png')} borderRadius={20} top={'280%'}/>
                  </View>
                  <View>
                  <Text style={{top : '290%' , fontSize : 22}}>Magnesium</Text>
                     <Image source={require('../../assets/images/carbo.png')} borderRadius={20} top={'320%'}/>
                  </View>
                  <View>
                  <Text style={{top : '330%' , fontSize : 22}}>Zinc</Text>
                     <Image source={require('../../assets/images/protein.png')} borderRadius={20} top={'360%'}/>
                  </View>
                  <View>
                  <Text style={{top : '370%' , fontSize : 22}}>Vitamin C</Text>
                     <Image source={require('../../assets/images/fat.png')} borderRadius={20} top={'400%'}/>
                  </View>
                  <View>
                  <Text style={{top : '410%' , fontSize : 22}}>Potassium</Text>
                     <Image source={require('../../assets/images/carbo.png')} borderRadius={20} top={'440%'}/>
                  </View>
                </View>
                <View style={styles.track}>
                  <TouchableOpacity onPress={() => { /* Handle button press */ }}>
                     <Text style={{fontSize :22, fontWeight : 700}}>Track your {'\n'} progress</Text>
                     <AntDesign name="arrowright" size={24} color="black" />
                   </TouchableOpacity>
                </View>

                <View style={styles.track2}>
                  <TouchableOpacity onPress={() => { /* Handle button press */ }}>
                     <Text style={{fontSize :22, fontWeight : 700}}>Meals</Text>
                     <AntDesign name="arrowright" size={24} color="black" />
                   </TouchableOpacity>
                </View>
       </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  
  profileButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 120,
  },
  searchBarContainer: {
    right: -60,
    left:-60,
    position: 'absolute',
    backgroundColor: '#f0f0f0', 
    padding: 10,
    borderRadius: 5,
    margin: 80, 
    paddingHorizontal : '5%',
    alignItems : 'left'
    

  },
  searchInput: {
    fontSize: 16,
    
  },

 
  contentcontainer : {
    flexGrow : 2,
    position : 'absolute',
    left : '5%',
    top :'18%',
    right : '5%' ,
    backgroundColor : 'white',
    borderRadius: 5,
    padding : '5%',
    height : '75%',
    
  },
  
  AI : {
     
     position : 'absolute',
     padding: '3%',
     backgroundColor: 'black',
     borderRadius: 50,
     right : '2%',
     
  },

  subcontentcontainer : {
    position : 'relative',
    flexGrow: 1,
    height : '100%' ,
    width : '100%',
    padding: 5,
    backgroundColor: '#f5f5f5',
    borderRadius: 25,
    top : '10%',
    },
  
    track : {
    position : 'static',
    flex: 1,
    height : 120 ,
    width : '35%',
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 25,
    top : '12%',

    },

    track2 : {
      position : 'relative',
      padding: 15,
      backgroundColor: '#f5f5f5',
      borderRadius: 30,
      left : '45%',
      width : '25%',
      
    }
});

export default index;
