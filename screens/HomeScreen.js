import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import story from './thirukkural.json';

const HomeScreen = () => {
  const navigation = useNavigation();

  const [search, setSearch] = useState(null)

  const searchItem = story.filter((item)=> (item.Line1 && item.Line2).includes(search) || item.Number === Number(search))

  const pressed = (item) => {
    navigation.navigate('detail', { Option: item,
        headerTitle : `குறள் ${item.Number}`,
     });
     setSearch(null)
  };
  

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.kuralText}>{item.Line1}</Text>
        <Text style={styles.kuralText}>{item.Line2}</Text>
        <Text style={styles.numberText}>குறள்: {item.Number}</Text>
        <TouchableOpacity style={styles.button} onPress={() => pressed(item)}>
          <Text style={styles.buttonText}>விளக்கம்</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList 
        data={search ? searchItem :  story}
        renderItem={renderItem}
        keyExtractor={(item) => item.Number.toString()}
      />
      <View style={styles.searchView}>
        <TextInput onChangeText={setSearch} value={search} style={styles.input} keyboardType='Text' placeholder='தேடுக குறள் அல்லது குறள் எண்...' />

      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  kuralText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  numberText: {
    fontSize: 14,
    color: '#555',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    alignSelf: 'flex-start',
    backgroundColor: '#2196F3',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  searchView: {
    padding: 5,
    borderRadius: 15,
    position: 'static',
    backgroundColor: 'tomato',
  },
  input: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white'
  },
});
