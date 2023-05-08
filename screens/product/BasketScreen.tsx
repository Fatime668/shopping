import {Button, StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import {Delete, Notification} from '../../components/icons';
import {useFocusEffect} from '@react-navigation/native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

const BasketScreen = ({route}: any) => {
  const {cartItems, removeFromCart} = route.params;

  useFocusEffect(() => {
    removeFromCart;
  });

  useEffect(() => {
    console.log('BasketItems güncellendi:', cartItems);
  }, [cartItems]);

  return (
    <View style={styles.container}>
      <View style={styles.delete}>
        <Text style={styles.title}>Basket</Text>
        {cartItems.map((item: any) => (
          <TouchableOpacity onPress={() => removeFromCart(item.id)}>
            <Delete />
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.bell}>
        <Notification />
        <Text style={styles.belltxt}>
          Delivery for FREE until the end of the month
        </Text>
      </View>
      <View style={{flex: 1}}>
        <View style={styles.cartitem}>
          <Image
            style={styles.img}
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/2bcf/f015/088a1086529ff42148b98f993ba52d93?Expires=1684713600&Signature=ha5Wf3iAn3KPieo2-aUSqCn4XPUCdjJHXiXjYbB8WQ79-65rIUtGB4Q-WAcFoIEePUnzL9VM3ATtvCPRdCIVXQXQ2cB4a4LryexE8nrOypAnn50SMdHver8fHYZeTsUYM1if3uaaK5zYIyEELRbCg2g3uiVQzdgECvjrlnyEfMjcHOvV8IGKlll48o~02LNXEKOJc-OXzIZbzbreJRGG-tHulpjBr093fK--L0A8VeYDzZ26G8tnPuUdTIsp6VkZaViOVddkLwKginCbvl~qUDO~JTNpkrT38deGEGjvJEN-iF3Y-rgqZOFmtA1bQwz6gzVowvy5WzeXybcVe2PXzw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            }}
          />
          <View>
            <Text style={styles.name}>Apple Watch</Text>
            <Text style={styles.price}>$ 300</Text>
            <View style={styles.count}>
              <Text style={styles.quantity}>1</Text>
              <View style={{flexDirection: 'row', marginLeft: 10}}>
                <TouchableOpacity style={styles.minus}>
                  <Text style={styles.minustxt}>-</Text>
                </TouchableOpacity>
                <Text style={styles.counter}>0</Text>
                <TouchableOpacity style={styles.plus}>
                  <Text style={styles.plustxt}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* {cartItems.map((item: any) => (
        <View key={item.id} style={{flex: 1}}>
          <View style={styles.cartitem}>
            <Image
              style={styles.img}
              source={{
                uri: item.image,
              }}
            />
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>$ {item.price}</Text>
              <View style={styles.count}>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <View style={{flexDirection: 'row', marginLeft: 10}}>
                  <TouchableOpacity style={styles.minus}>
                    <Text style={styles.minustxt}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.counter}>0</Text>
                  <TouchableOpacity style={styles.plus}>
                    <Text style={styles.plustxt}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      ))} */}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          flex: 1,
          position: 'relative',
          bottom: -90,
          marginHorizontal: 20,
        }}>
        <Text style={{fontSize: 17, fontWeight: '400', color: '#000'}}>
          Total
        </Text>
        <Text style={{fontSize: 22, fontWeight: '700', color: '#5956E9'}}>
          $ 945
        </Text>
      </View>
      <Pressable style={styles.checkout}>
        <Text style={styles.txt}>Checkout</Text>
      </Pressable>
      {/* <View>
        {cartItems.map((item: any) => (
          <>
            <Text key={item.id}>
              {item.name} - Quantity: {item.quantity}
            </Text>
            <Button
              title="Remove from Cart"
              onPress={() => removeFromCart(item.id)}
            />
          </>
        ))}
      </View>  */}
    </View>
  );
};

// {cartItems.map((item: any) => (
//   <>
//     <Text key={item.id}>
//       {item.name} - Quantity: {item.quantity}
//     </Text>
//     <Button
//       title="Remove from Cart"
//       onPress={() => removeFromCart(item.id)}
//     />
//   </>
// ))}

export default BasketScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 24,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
    left: 150,
  },
  bell: {
    marginTop: 20,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  cartitem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    paddingVertical: 10,
    marginHorizontal: 20,
    backgroundColor: '#fafafa',
  },
  img: {
    width: 80,
    height: 80,
    marginHorizontal: 10,
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
    color: '#fff',
  },
  minustxt: {
    color: '#fff',
  },
  plustxt: {
    color: '#fff',
  },
  checkout: {
    paddingVertical: 25,
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
