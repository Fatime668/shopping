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
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <Pressable
              onPress={() =>
                navigation.navigate('productDetail', {id: item.id})
              }>
              <View>
                <Image style={styles.image} source={{uri: item.image}} />
                <View style={styles.boxitem}>
                  <View style={styles.txtbox}>
                    <Text style={styles.txtName}>{item.name}</Text>
                    <Text style={styles.txtDesc}>{item.description}</Text>
                    <Text style={styles.txtPrice}>$ {item.price}</Text>
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
    paddingVertical: 14,
    paddingLeft: 60,
    marginTop: 46,
    borderColor: '#C9C9C9',
    borderWidth: 1,
  },
  searchIcon: {
    fontSize: 25,
    top: -42,
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
    marginTop: 50,
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
    padding: 20,
    backgroundColor: '#fff',
    position: 'relative',
    borderRadius: 100,
    transform: [{translateX: 35}],
    top: 80,
    resizeMode: 'contain',
    zIndex: 3,
  },
  boxitem: {
    zIndex: 0,
    width: 200,
    padding: 10,
    position: 'relative',
    height: 230,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 20,
    marginHorizontal: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 7,
  },
  txtbox: {
    alignItems: 'center',
    top: 90,
  },
  txtName: {
    margin: 2,
    fontWeight: '600',
    fontSize: 18,
    color: '#000',
    lineHeight: 22.99,
  },
  txtDesc: {
    margin: 2,
    fontSize: 16,
    fontWeight: '600',
  },
  txtPrice: {
    marginTop: 10,
    color: '#5956E9',
    fontWeight: '500',
  },
});
