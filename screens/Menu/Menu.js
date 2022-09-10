import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Menu = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
    // showsVerticalScrollIndicator={false}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Settings');
        }}>
        <View className="flex-1 flex-row h-36 items-center m-5 justify-center bg-gray-200">
          <Ionicons name="person-circle" size={50} />
          <Text>Profile Container</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Settings');
        }}>
        <View className="flex-1 justify-center h-20 m-5 bg-gray-300 pl-3">
          <Text>Marketplace</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Settings');
        }}>
        <View className="flex-1 justify-center h-20 m-5 bg-gray-300 pl-3">
          <Text>Auction</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Calendar');
        }}>
        <View className="flex-1 justify-center h-20 m-5 bg-gray-300 pl-3">
          <Text>Calendar</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Settings');
        }}>
        <View className="flex-1 justify-center h-20 m-5 bg-gray-300 pl-3">
          <Text>Spotlight Family</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Settings');
        }}>
        <View className="flex-1 justify-center h-20 m-5 bg-gray-300 pl-3">
          <Text>Wishlist</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Settings');
        }}>
        <View className="flex-1 justify-center h-20 m-5 bg-gray-300 pl-3">
          <Text>Recently Purchased</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Settings');
        }}>
        <View className="flex-1 justify-center h-20 m-5 bg-gray-300 pl-3">
          <Text>Accounts</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Settings');
        }}>
        <View className="flex-1 justify-center h-20 m-5 bg-gray-300 pl-3">
          <Text>Privacy</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Settings');
        }}>
        <View className="flex-1 justify-center h-20 m-5 bg-gray-300 pl-3">
          <Text>Settings</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Settings');
        }}>
        <View className="flex-1 justify-center h-20 m-5 bg-gray-300 pl-3">
          <Text>Help</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Settings');
        }}>
        <View className="flex-1 justify-center h-20 m-5 bg-gray-300 pl-3">
          <Text>Garage</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Settings');
        }}>
        <View className="flex-1 justify-center h-20 m-5 bg-gray-300 pl-3">
          <Text>Bored?</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Menu;
