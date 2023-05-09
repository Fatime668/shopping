import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';
import axios from 'axios';

const FavoritesScreen = ({navigation}: any) => {
  const [items, setItems] = useState<any>([]);
  useFocusEffect(() => {
    AsyncStorage.getItem('wishlist').then(data => {
      let wishlistItem = JSON.parse(data ?? '[]');
      if (wishlistItem.length != 0) {
        axios
          .get('https://64440b5e466f7c2b4b60625b.mockapi.io/products/')
          .then(res => {
            let arr = res.data.filter((item: any) =>
              wishlistItem.includes(item.id),
            );
            setItems(arr);
          });
      }
    });
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>

      {items && items.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          numColumns={2}
          data={items}
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
      ) : (
        <View>
          <Image
            style={{
              width: 352,
              height: 352,
              left: 10,
              top: 70,
            }}
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/aee2/8141/ac6ce64aa89183a28e979fff33e6c2c0?Expires=1684713600&Signature=lT5gDyKL5MEb8frymDIgVRmJlQjVF4RdeZkDjQN5f2lthuEUVoMoZwI8eqeDm1W3elwU14LDiHiOpcPQzZii3RRj3zt2XpjlG21RRjR3xlk7c5AApBuJwlh~pk5AH46kFjubcqvWa7tT3myOvl13pri2Tx3OPvmAkJFQRCBodN4dwJZcNYxGKhuVUUjW1Xraoqec0f5z4asPmYIJ46XnzH0loLM7XA6IsbcoshQOz8iA2RrP7gUvQnSHSEeekjfvgOJM8LBhIIU9iXYNR6tEhvzPoyLkogGTY7jcF3BJiEPdv7jOaYvbKk6WOcd~u2yHQfKKIYa8L5awgFG5Ib63QQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            }}
          />

          <View style={{display: 'flex', alignItems: 'center'}}>
            <Text style={styles.nofav}>No favorites yet</Text>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 17,
                color: '#000',
                width: 217,
                textAlign: 'center',
              }}>
              Hit the orange button down below to Create an order
            </Text>
            <Pressable
              style={styles.btn}
              onPress={() => navigation.navigate('Products')}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
                Start ordering
              </Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 24,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '700',
    color: '#000',
    fontSize: 18,
  },
  nofav: {
    marginTop: 20,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '700',
    color: '#000',
    fontSize: 24,
  },
  btn: {
    marginTop: 30,
    backgroundColor: '#58C0EA',
    paddingVertical: 15,
    paddingHorizontal: 95,
    borderRadius: 10,
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
    width: 130,
    height: 130,
    padding: 20,
    backgroundColor: '#fff',
    position: 'relative',
    borderRadius: 100,
    transform: [{translateX: 30}],
    top: 80,
    resizeMode: 'contain',
    zIndex: 3,
  },
  boxitem: {
    zIndex: 0,
    width: 170,
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
