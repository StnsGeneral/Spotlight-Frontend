import { View, Text, TouchableOpacity, Image, Button } from 'react-native';
import React from 'react';
import { ShoppingCartIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';

const DealCard = ({ imgUrl, title, price, store, sourceUrl }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="items-center pt-5"
      onPress={() => {
        navigation.navigate('ItemPage');
      }}>
      <Image
        source={{ uri: imgUrl }}
        className="h-20 w-20 rounded outline-black outline-8 "
      />
      <View className="flex-row items-center justify-around">
        <Text className="font-bold text-black">{title}</Text>
        <Text className=" font-light text-xs">{store}</Text>
      </View>
      <View className="flex-row items-center justify-around">
        <Text className="text-2xl">{price}</Text>
        <View className="w-12 bg-sky-900 rounded items-center">
          <ShoppingCartIcon
            onPress={() => {
              navigation.navigate('Cart');
            }}
            color="white"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DealCard;
