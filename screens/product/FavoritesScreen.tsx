import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';

const FavoritesScreen = ({route, navigation}: any) => {
  // const {wishlist} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>

      {/* {wishlist.map((product: any, index: any) => (
        <Text key={index}>{product.name}</Text>
      ))} */}
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
    marginBottom: 50,
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
});
