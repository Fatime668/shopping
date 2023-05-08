import {Image, StyleSheet, Text, View, FlatList, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import axios from 'axios';
import {useIsFocused} from '@react-navigation/native';
import {Home, Search} from '../../components/icons';

const HomeScreen = ({navigation, route}: any) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [originalData, setOriginalData] = useState<any>([]);

  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      axios
        .get('https://64440b5e466f7c2b4b60625b.mockapi.io/products')
        .then(res => {
          // console.log(res.data);
          setProducts(res.data);
          setOriginalData(res.data);
        });
    }
  }, [isFocused]);
  let search = (value: any) => {
    let filteredProducts = originalData.filter((q: any) =>
      q.name.toLowerCase().includes(value.toLowerCase()),
    );

    setProducts([...filteredProducts]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.home}>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={search}
            placeholder="Search"
          />
          <Search style={styles.searchIcon} />
        </View>
        <View>
          <Text style={styles.title}>Order online collect in store</Text>
        </View>
        <View style={styles.tabs}>
          <Text style={styles.active}>Wearable</Text>
          <Text style={styles.tabItem}>Laptops</Text>
          <Text style={styles.tabItem}>Phones</Text>
          <Text style={styles.tabItem}>Drones</Text>
        </View>
        <FlatList
          data={products}
          horizontal
          renderItem={({item}) => (
            <Pressable
              onPress={() =>
                navigation.navigate('productDetail', {id: item.id})
              }>
              <View>
                <Image style={styles.image} source={{uri: item.image}} />
                <View style={styles.boxitem}>
                  <View>
                    <Text style={styles.txtName}>{item.name}</Text>
                    <Text style={styles.txtDesc}>{item.description}</Text>
                    <Text style={styles.txtPrice}>${item.price}</Text>
                  </View>
                </View>
              </View>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
};

interface Product {
  name: string;
  description: string;
  image: string;
  price: number;
  id: object;
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    flex: 1,
  },
  home: {
    marginHorizontal: 24,
  },
  input: {
    borderRadius: 30,
    paddingVertical: 18,
    paddingLeft: 60,
    marginTop: 46,
    borderColor: '#C9C9C9',
    borderWidth: 2,
  },
  searchIcon: {
    fontSize: 25,
    top: -45,
    left: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    lineHeight: 40,
    width: 243,
    color: '#000',
  },
  tabs: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabItem: {
    fontWeight: '600',
    fontSize: 17,
    color: '#9A9A9D',
    lineHeight: 19.96,
  },
  active: {
    fontWeight: '600',
    fontSize: 17,
    color: '#5956E9',
    borderBottomColor: '#5956E9',
    borderBottomWidth: 3,
    lineHeight: 19.96,
    paddingBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    position: 'relative',
    borderRadius: 50,
    top: 80,
    // backgroundColor: '#9747FF',
    left: 35,
    zIndex: 2,
  },
  boxitem: {
    zIndex: 0,
    width: 200,
    position: 'relative',
    height: 250,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginHorizontal: 10,
  },
  txtName: {
    margin: 2,
    top: 120,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 22,
    color: '#000',
    lineHeight: 22.99,
  },
  txtDesc: {
    margin: 2,
    fontSize: 16,
    fontWeight: '600',
    top: 120,
    textAlign: 'center',
  },
  txtPrice: {
    marginTop: 10,
    top: 120,
    textAlign: 'center',
    color: '#5956E9',
    fontWeight: '500',
  },
});
