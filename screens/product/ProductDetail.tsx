import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  Alert,
  Button,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {ArrowLeft, Heart} from '../../components/icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ScrollView} from 'react-native-gesture-handler';

const ProductDetail = ({route, navigation}: any) => {
  let {id} = route.params;

  const [detail, setDetail] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState<any>([]);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [color, setColor] = useState('#fff');

  const goToProduct = () => {
    navigation.navigate('Home');
  };
  //Add Basket
  const handleAddBasket = async () => {
    let basket: any = await AsyncStorage.getItem('basket');
    if (!basket) {
      basket = [];
      let basketItem = {
        product: detail,
        count: 1,
      };
      basket.push(basketItem);
      await AsyncStorage.setItem('basket', JSON.stringify(basket));
    } else {
      let parseData = JSON.parse(basket);
      let basketItem = parseData.find(
        (item: any) => item.product.id == detail.id,
      );
      if (basketItem) {
        basketItem.count++;
        await AsyncStorage.setItem('basket', JSON.stringify(parseData));
      } else {
        let basketItem = {
          product: detail,
          count: 1,
        };
        parseData.push(basketItem);
        await AsyncStorage.setItem('basket', JSON.stringify(parseData));
      }
    }
  };

  useEffect(() => {
    axios
      .get('https://64440b5e466f7c2b4b60625b.mockapi.io/products/' + id)
      .then(res => {
        setDetail(res.data);
        console.log(res.data);

        setLoading(false);
      });
  }, []);

  useEffect(() => {
    AsyncStorage.getItem('wishlist').then(data => {
      let wishlist = JSON.parse(data ?? '[]');
      setWishlist(wishlist);
    });
  }, []);

  const wishlistOperations = async (id: any) => {
    const data = await AsyncStorage.getItem('wishlist');

    if (data) {
      const parsedData = JSON.parse(data);
      const existingItem = parsedData.find((item: any) => item === id);
      if (existingItem) {
        let filteredProducts = wishlist.filter(
          (removed: {id: number}) => removed != id,
        );
        AsyncStorage.setItem('wishlist', JSON.stringify([...filteredProducts]));
        setWishlist([...filteredProducts]);
      } else {
        setIsFavorite(true);
        setColor('#5956E9');

        let newWishlist: any = [...wishlist, id];
        await AsyncStorage.setItem('wishlist', JSON.stringify(newWishlist));
        setWishlist(newWishlist);
        setIsFavorite(false);
      }
    } else {
      setIsFavorite(true);
      setColor('#5956E9');

      let newWishlist: any = [...wishlist, id];
      await AsyncStorage.setItem('wishlist', JSON.stringify(newWishlist));
      setWishlist(newWishlist);
    }
  };

  return (
    <View style={styles.detailpage}>
      <ActivityIndicator animating={loading} color="red" />
      {loading ? (
        <></>
      ) : (
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Pressable onPress={() => goToProduct()}>
              <ArrowLeft />
            </Pressable>
            <Pressable>
              <Heart
                fill={!isFavorite ? color : 'white'}
                stroke={!isFavorite ? color : '#200E32'}
                onPress={() => wishlistOperations(detail.id)}
              />
            </Pressable>
          </View>
          <View>
            <Image style={styles.image} source={{uri: detail.image}} />
          </View>
          <Text style={styles.name}>{detail.name}</Text>
          <Text style={styles.color}>Colors</Text>
          <View style={styles.colors}>
            <Pressable style={styles.clrBtn}>
              <Text style={styles.blue}></Text>
              <Text style={styles.clr}>Sky Blue</Text>
            </Pressable>
            <Pressable style={styles.clrBtn}>
              <Text style={styles.pink}></Text>
              <Text style={styles.clr}>Rose Gold</Text>
            </Pressable>
            <Pressable style={styles.clrBtn}>
              <Text style={styles.red}></Text>
              <Text style={styles.clr}>Green</Text>
            </Pressable>
          </View>
          <View>
            <Text style={styles.descTitle}>Get Apple TV+ free for a year</Text>
            <Text style={styles.description}>
              Available when you purchase any new iPhone, iPad, iPod Touch, Mac
              or Apple TV, £4.99/month after free trial.
            </Text>
          </View>
          <View style={styles.price}>
            <Text style={styles.pricetitle}>Price</Text>
            <Text style={styles.total}>$ {detail.price}</Text>
          </View>

          <Pressable style={styles.addtocart} onPress={handleAddBasket}>
            <Text style={styles.txt}>Add to basket</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  detailpage: {
    backgroundColor: '#fff',
  },
  container: {
    marginHorizontal: 24,
  },
  image: {
    width: 360,
    height: 304,
    marginTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    resizeMode: 'contain',
  },
  name: {
    fontWeight: '600',
    fontSize: 28,
    lineHeight: 32,
    color: '#000',
    marginTop: 20,
  },
  color: {
    fontWeight: '700',
    fontSize: 17,
    lineHeight: 19,
    color: '#000',
    marginTop: 10,
  },
  colors: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  clrBtn: {
    width: 113,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  clr: {
    color: '#000',
    fontWeight: '700',
    fontSize: 12,
    top: -8,
  },
  blue: {
    left: -30,
    borderRadius: 50,
    top: 8,
    marginRight: 15,
    height: 15,
    width: 15,
    backgroundColor: '#7485C1',
  },
  pink: {
    left: -30,
    borderRadius: 50,
    top: 8,
    marginRight: 20,
    height: 15,
    width: 15,
    backgroundColor: '#C9A19C',
  },
  red: {
    left: -30,
    borderRadius: 50,
    top: 8,
    marginRight: 5,
    height: 15,
    width: 15,
    backgroundColor: '#A1C89B',
  },
  descTitle: {
    fontWeight: '700',
    fontSize: 17,
    color: '#000',
    lineHeight: 19,
    marginTop: 15,
    marginBottom: 5,
  },
  description: {
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 24,
    letterSpacing: 0.3,
    color: '#222',
  },
  price: {
    marginTop: 40,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pricetitle: {
    color: '#000',
    fontSize: 17,
    fontWeight: '400',
  },
  total: {
    color: '#5956E9',
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 25,
  },
  addtocart: {
    paddingVertical: 25,
    paddingHorizontal: 15,
    backgroundColor: '#5956E9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  txt: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
  },
});
