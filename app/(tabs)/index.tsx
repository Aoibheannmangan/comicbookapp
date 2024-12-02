import { StyleSheet } from 'react-native';
import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default () => (
    <View style={styles.container}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,242,241)"></View>
      <Image
          source={require('../../assets/images/picture.jpg')}
          style={{width: 300, height: 200, resizeMode: 'cover',  borderRadius: 20, borderColor: '#F97068', borderWidth: '3'}}
      />
        <Text style={styles.title}>To Navigate the App, please click on the bottom tab buttons below.</Text>




    </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
      backgroundColor: '#FFF2F1',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
      color: '#0B4F6C',
      textAlign: 'center',
      fontFamily: 'Comic Sans',

  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
