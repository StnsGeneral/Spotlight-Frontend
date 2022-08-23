import { View, Text, Button, SafeAreaView } from 'react-native';
import React from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const Cart = () => {
  const navigation = useNavigation();
  const [cart, setCart] = useState(null);
  const getData = () => {
    axios
      .get(
        'https://jahjc6ddjg.execute-api.us-east-2.amazonaws.com/Test/carts/0/1',
        { crossDomain: true }
      )
      .then((res) => {
        setCart(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log('Error', err);
      });
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
      {cart && <Text>{cart.Item.Items}</Text>}
    </SafeAreaView>
  );
};

export default Cart;
