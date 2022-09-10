import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { CART } from '../../constants';
import { ShoppingCartIcon } from 'react-native-heroicons/solid';

const Cart = () => {
  const navigation = useNavigation();
  const [cart, setCart] = useState(CART);

  const DealCard = ({ item }) => {
    useEffect(() => {}, [item]);
    const index = CART.indexOf(item);
    return (
      <View className="w-1/2 px-6">
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ItemPage', {
              item: [
                item.itemId,
                item.title,
                item.imgUrl,
                item.price,
                item.store,
              ],
            })
          }
          className="items-center pt-5">
          <Image
            source={{ uri: item.imgUrl }}
            className="h-20 w-20 rounded outline-black outline-8 "
          />
          <View className="flex-row items-center justify-around">
            <Text className="font-bold text-black text-base">{item.title}</Text>
            <Text className=" font-light text-xs">{item.store}</Text>
          </View>
          <View className="flex-row items-center justify-around">
            <Text className="text-2xl pr-3">{item.price}</Text>
            <Button title="Remove" onPress={() => CART.splice(index, 1)} />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

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
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      className="mt-10">
      {/* <Button
        onPress={getData}
        title="Test Data"
        accessibilityLabel="See if backend works"
      /> */}
      <Button
        title="Go back"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <ScrollView
        contentContainerStyle={{ alignItems: 'center' }}
        className="w-full">
        {cart && cart.map((item) => <DealCard item={item} key={item.itemId} />)}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;
