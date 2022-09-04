import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ShoppingCartIcon } from 'react-native-heroicons/solid';

const ItemPage = ({ route }) => {
  const navigation = useNavigation();
  const itemId = route.params.item[0];
  const itemName = route.params.item[1];
  const itemImageUrl = route.params.item[2];
  const itemPrice = route.params.item[3];
  const itemStore = route.params.item[4];
  return (
    <SafeAreaView className="flex-1 px-6 justify-center">
      <TouchableOpacity className="items-center pt-5">
        <Image
          source={{ uri: itemImageUrl }}
          className="h-20 w-20 rounded outline-black outline-8 "
        />
        <View className="flex-row items-center justify-around">
          <Text className="font-bold text-black text-base">{itemName}</Text>
          <Text className=" font-light text-xs">{itemStore}</Text>
        </View>
        <View className="flex-row items-center justify-around">
          <Text className="text-2xl pr-3">{itemPrice}</Text>
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
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <View className="items-center">
        <Text>
          Just a placeholder still. But it's fully scalable and any information
          can be put into the item being rendered.
        </Text>
        <Text>
          Proof of that is this itemId that changes on the images being
          selected.
        </Text>
        <Text>{itemId}</Text>
      </View>
    </SafeAreaView>
  );
};

export default ItemPage;
