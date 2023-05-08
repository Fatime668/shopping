import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const SplashScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Find Your Gadget</Text>
        <Image
          style={styles.image}
          source={require('../assets/86bea11d7b45101d1685154a6218463f.png')}
        />
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Tabs')}>
        <Text style={styles.btntitle}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5956E9',
    flex: 1,
  },
  title: {
    fontSize: 65,
    lineHeight: 69,
    fontWeight: '700',
    color: '#fff',
    marginTop: 75,
    marginHorizontal: 45,
  },
  image: {
    width: 486,
    height: 486,
    position: 'relative',
    left: -42,
    filter: 'blur(10)',
  },
  btn: {
    position: 'relative',
    bottom: -30,
    paddingVertical: 27,
    paddingHorizontal: 30,
    marginHorizontal: 50,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  btntitle: {
    textAlign: 'center',
    color: '#5956E9',
    fontSize: 20,
    fontWeight: '700',
  },
});
