import {
  View,
  Text,
  SafeAreaView,
  Modal,
  Pressable,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import { CurrencyDollarIcon, VolumeUpIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

const Header = ({ title }) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView className="bg-sky-900 pt-8 flex-row items-center">
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <View className="bg-gray-300 rounded border w-2/3 flex-col items-end p-2 ml-28 mt-12">
          <Pressable
            className="bg-sky-900 border rounded items-center w-4"
            onPress={() => setModalVisible(!modalVisible)}>
            <Text>X</Text>
          </Pressable>
          <View>
            <Text>
              This will be the cartThis will be the cartThis will be the
              cartThis will be the cart
            </Text>
          </View>
          <View className="h-9 w-16 justify-center items-center bg-sky-900 rounded">
            <Pressable
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
          <Text className="text-sm font-bold text-black">$ 16.47</Text>

          <Text className="text-sm font-bold text-black">
            <CurrencyDollarIcon size={20} color="black" /> 3500
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
