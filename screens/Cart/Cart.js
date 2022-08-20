import { View, Text, Button, SafeAreaView } from 'react-native';
import React from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
  const navigation = useNavigation();
  const getData = () => {
    axios
      .get(
        'https://jahjc6ddjg.execute-api.us-east-2.amazonaws.com/Test/carts/',
        { crossDomain: true }
      )
      .then((res) => {
        console.log(res.data.Items[0]);
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
    </SafeAreaView>
  );
};

export default Cart;
