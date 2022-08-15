import { View, Text, Button, SafeAreaView } from 'react-native';
import React from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
  const navigation = useNavigation();
  const getData = async () => {
    let url =
      'https://jahjc6ddjg.execute-api.us-east-2.amazonaws.com/Test/carts/';

    // axios
    //   .get(
    //     'https://jahjc6ddjg.execute-api.us-east-2.amazonaws.com/Test/carts/0/1',
    //     { headers: { 'Access-Control-Allow-Origin': '*' } },
    //     { crossDomain: true }
    //   )
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log('Error', err);
    //   });

    return fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      crossDomain: true,
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.error('Error', err);
      });

    // try {
    //   const res = await fetch(url, {
    //     headers: 'Access-Control-Allow-Origin: /*/',
    //   });
    //   const json = res.json();
    //   return json;
    // } catch (error) {
    //   console.error('Error', error);
    // }
  };

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={getData}
        title="Test Data"
        accessibilityLabel="See if backend works"
      />
      <Button
        title="Home"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </SafeAreaView>
  );
};

export default Cart;
