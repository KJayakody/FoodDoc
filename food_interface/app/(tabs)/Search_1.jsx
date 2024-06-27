import { View, Text, StyleSheet, FlatList, TextInput, ImageBackground, Button } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import FoodListItems from '../../components/FoodListItems.jsx';

const foodItems = [
  { label: "Pizza", cal: 75, brand: 'Dominos', fat :12.3, image: 'https://www.edamam.com/food-img/c01/c0150280d71059c23c025f501f502dc0.jpg' },
  { label: "Apple", cal: 75, brand: 'Generic', fat :0.17,image: 'https://www.edamam.com/food-img/42c/42c006401027d35add93113548eeaae6.jpg' },
];

export default function Search_1() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const performSearch = () => {
    console.warn('Searching For:', search);
    fetchData(search);
    setSearch('');
  };

  const fetchData = (query) => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://api.edamam.com/api/food-database/v2/parser?app_id=385f6558&app_key=da334b8b289d9a77be7dc12128a7b2ce&ingr=${query}&nutrition-type=cooking`,
      headers: { 
        'accept': 'application/json'
      }
    };

    axios.request(config)
      .then((response) => {
        console.log(response);
        setData(response.data.hints);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <View>
      <ImageBackground source={require('../../assets/images/img.jpg')} style={{ width: '100%', height: '100%' }}>
        <View style={styles.container}>
          <TextInput 
            value={search} 
            onChangeText={setSearch} 
            placeholder="Search.." 
            style={styles.input} 
          />
          {search && <Button title="Search" onPress={performSearch} />}

          {error && <Text style={styles.error}>Error: {error.message}</Text>}

          <FlatList
            data={data.length > 0 ? data.map(item => ({
              label: item.food.label,
              cal: item.food.nutrients.ENERC_KCAL,
              brand: item.food.brand || 'Unknown',
              image: item.food.image || 'https://example.com/default-image.jpg',
              fat: item.food.nutrients.FAT,
            })) : foodItems}
            renderItem={({ item }) => <FoodListItems item={item} />}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{ gap: 5 }}
          />
        </View>
      </ImageBackground>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    gap: 10,
    top: '10%',
  },
  input: {
    backgroundColor: '#f2f2f2',
    width: '100%',
    padding: 10,
    borderRadius: 5,
  },
  error: {
    color: 'red',
  }
});