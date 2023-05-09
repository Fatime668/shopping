import {Button, StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Delete, Notification} from '../../components/icons';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BasketScreen = ({route, navigation}: any) => {
  const [basket, setBasket] = useState<any>([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      getBasket();
    }
  }, [isFocused]);

  const getBasket = async () => {
    let basket: any = await AsyncStorage.getItem('basket');
    setBasket(JSON.parse(basket));
  };
  //TotalPrice
  let totalPrice = () => {
    let total = 0;
    if (basket.length > 0) {
      basket.forEach((item: any) => {
        total += item.product.price * item.count;
      });
    }
    return total;
  };
  //handleDecrease
  const handleDecrease = async (id: number) => {
    let item: any = basket.find((p: any) => p.product.id === id);
    if (item.count >= 1) {
      item.count--;
      await AsyncStorage.setItem('basket', JSON.stringify(basket));
      setBasket([...basket]);
    }
  };
  //handleIncrease
  const handleIncrease = async (id: number) => {
    let item: any = basket.find((p: any) => p.product.id === id);
    if (item.count >= 0) {
      item.count++;
      await AsyncStorage.setItem('basket', JSON.stringify(basket));
      setBasket([...basket]);
    }
  };
  //handleDelete

  const handleDelete = async (id: number) => {
    let newBasket: any = basket.filter((pr: any) => pr.product.id !== id);
    await AsyncStorage.setItem('basket', JSON.stringify(newBasket));
    setBasket([...newBasket]);
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Basket</Text>
      </View>
      <View style={styles.bell}>
        <Notification />
        <Text style={styles.belltxt}>
          Delivery for FREE until the end of the month
        </Text>
      </View>
      {basket && basket.length > 0 ? (
        <FlatList
          data={basket}
          renderItem={({item}: any) => (
            <View style={{flex: 1}}>
              <View style={styles.cartitem}>
                <Image
                  style={styles.img}
                  source={{
                    uri: item.product.image,
                  }}
                />
                <View>
                  <Text style={styles.name}>{item.product.name}</Text>
                  <Text style={styles.price}>$ {item.product.price}</Text>
                  <View style={styles.count}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{marginRight: 10}}>Quantity</Text>
                      <Pressable
                        style={styles.minus}
                        onPress={() => handleDecrease(item.product.id)}>
                        <Text style={styles.minustxt}>-</Text>
                      </Pressable>
                      <Text style={styles.counter}>{item.count}</Text>
                      <Pressable
                        onPress={() => handleIncrease(item.product.id)}
                        style={styles.plus}>
                        <Text style={styles.plustxt}>+</Text>
                      </Pressable>
                    </View>
                    <View>
                      <Pressable onPress={() => handleDelete(item.product.id)}>
                        <Delete />
                      </Pressable>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      ) : (
        <View style={styles.empty}>
          <Text style={styles.emptytxt}>Cart is Empty!</Text>
          <Pressable
            style={styles.goShop}
            onPress={() => navigation.navigate('Products')}>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#fff'}}>
              Go to Products
            </Text>
          </Pressable>
        </View>
      )}

      {
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 10,
            position: 'relative',
            marginHorizontal: 20,
          }}>
          <Text
            style={{
              fontSize: 17,
              paddingVertical: 20,
              fontWeight: '400',
              color: '#000',
              flex: 1,
            }}>
            Total
          </Text>
          <Text style={{fontSize: 22, fontWeight: '700', color: '#5956E9'}}>
            $ {totalPrice().toFixed(2)}
          </Text>
        </View>
      }

      <Pressable style={styles.checkout}>
        <Text style={styles.txt}>Checkout</Text>
      </Pressable>
    </View>
  );
};

export default BasketScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
  },
  bell: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D3F2FF',
    paddingVertical: 10,
    marginHorizontal: 30,
    paddingHorizontal: 5,
  },
  belltxt: {
    fontSize: 10,
    fontWeight: '600',
    color: '#000',
    marginLeft: 10,
  },
  delete: {
    justifyContent: 'flex-end',
  },
  cartitem: {
    flex: 2,
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
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
  img: {
    width: 80,
    height: 80,
    marginHorizontal: 10,
    resizeMode: 'contain',
  },
  count: {
    flexDirection: 'row',
  },

  name: {
    fontWeight: '600',
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  price: {
    color: '#5956E9',
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 5,
  },
  quantity: {
    color: '#000',
    fontWeight: '400',
    fontSize: 13,
  },
  minus: {
    width: 20,
    height: 20,
    backgroundColor: '#7DCCEC',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 3,
    color: '#fff',
    borderRadius: 5,
  },
  plus: {
    width: 20,
    height: 20,
    backgroundColor: '#7DCCEC',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 3,
    borderRadius: 5,
  },
  counter: {
    color: '#000',
  },
  minustxt: {
    color: '#fff',
  },
  plustxt: {
    color: '#fff',
  },
  empty: {
    marginTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptytxt: {
    color: '#000',
    fontWeight: '700',
    fontSize: 25,
  },
  goShop: {
    marginVertical: 20,
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#5956E9',
  },
  checkout: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#5956E9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  txt: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
  },
});
