import {
  View,
  Text,
  SafeAreaView,
  Modal,
  Pressable,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import {
  CurrencyDollarIcon,
  UserAddIcon,
  VolumeUpIcon,
} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { USER, CART } from '../constants';

const Header = ({ title }) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const CartItem = ({ item }) => {
    const index = CART.indexOf(item);

    return (
      <View className="items-center bg-white border rounded p-2 m-2">
        <View className="flex flex-row items-center">
          <Image
            className="w-14 h-14 rounded pr-3"
            source={{ uri: item.imgUrl }}
          />
          <Pressable
            className="bg-sky-900 border rounded items-center p-1"
            onPress={() => CART.splice(index, 1)}>
            <Text>X</Text>
          </Pressable>
        </View>
        <View>
          <Text>{item.price}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView className="bg-sky-900 pt-8 flex-row items-center">
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <View className="rounded border w-2/3 flex-col p-2 ml-28 mt-12 bg-gray-200/90">
          <View className="items-end">
            <Pressable
              className="bg-sky-900 border rounded items-center w-4"
              onPress={() => setModalVisible(!modalVisible)}>
              <Text>X</Text>
            </Pressable>
          </View>
          <FlatList
            data={CART}
            numColumns={1}
            renderItem={CartItem}
            keyExtractor={(item) => item.itemId}
            showsVerticalScrollIndicator={true}
          />
          <View className="items-end">
            <Pressable
              className="items-center justify-center bg-sky-900 rounded border p-1"
              onPress={() => [
                navigation.navigate('Cart'),
                setModalVisible(!modalVisible),
              ]}>
              <Text className="text-black font-medium">Checkout</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {/* {Header} */}
      <View className="flex-row items-center mx-2 space-x-3 pb-2">
        <View className="flex-row flex-1 space-x-5 items-center">
          <Text className="text-2xl text-white">Spotlight</Text>
          <Text className="text-sm font-bold text-black">$ {USER.wallet}</Text>

          <Text className="text-sm font-bold text-black">
            <CurrencyDollarIcon size={20} color="black" /> {USER.points}
          </Text>

          <View className="h-7 w-7 rounded-full bg-gray-300 justify-center items-center">
            <VolumeUpIcon size={15} color="black" />
          </View>
        </View>

        <View className="h-9 w-14 justify-center items-center bg-gray-100 rounded shadow-md">
          <Pressable onPress={() => setModalVisible(true)}>
            <Text className="text-black font-medium">Cart</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
