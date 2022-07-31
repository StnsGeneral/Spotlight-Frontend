import { View, Text, Button, SafeAreaView } from 'react-native';
import React from 'react';
import axios from 'axios';

const Cart = () => {
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
    <SafeAreaView>
      <Button
        onPress={getData}
        title="Test Data"
        accessibilityLabel="See if backend works"
      />
    </SafeAreaView>
  );
};

export default Cart;
