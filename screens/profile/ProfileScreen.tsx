import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Location} from '../../components/icons';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.profilebox}>
        <Image
          style={{width: 76, height: 76, borderRadius: 50, marginBottom: 10}}
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/2340/57a2/9d7a2d1510bf81795a05c9c2087d87c9?Expires=1684713600&Signature=Rau2ULvulo7P4ehpsDh9BOZVniGwRRpI1ZL3UME22DuLEIBYGsXvPPUe9S~pwRIM5XUh-HXCiKdhEyOgXToMqqHC3svpVjNCvJdWMgaDlx9FcpWSQEsELgQcFR1-VAGWG7UprQxr8bI9s0VP5fygecjNSnttQDUgTcGKvioFmB~Mky08fQ4WU5KVuv6ITTprjnLwpNZZ~6hygtYJkX7Kwg4cnJf15Q3HjaaKJoVYm29OtJ188KeSu5P5B~Nz0nNfuiosAMnnFxpfRA-8Owf7pa5EAmaF5zlrz8f24NUCkd9vWet~f9ydh0fqslGGSsdiFoEy7aogHRRwOX-COw89JQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          }}
        />
        <View>
          <Text style={styles.name}>Rosina Doe</Text>
          <View style={{flexDirection: 'row'}}>
            <Location />
            <View style={{marginLeft: 15}}>
              <Text style={styles.txt}>Address: 43 Oxford</Text>
              <Text style={styles.txt}>Road M13 4GR </Text>
              <Text style={styles.txt}>Manchester, UK</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

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
  name: {
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: '600',
    fontSize: 18,
    color: '#000',
  },
  profilebox: {
    padding: 20,
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
  txt: {
    fontWeight: '400',
    fontSize: 15,
    color: '#000',
    marginLeft: 10,
  },
});
