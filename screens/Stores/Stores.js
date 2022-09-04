import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import { STORES } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const Stores = () => {
  const navigation = useNavigation();

  const StoresCard = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('StorePage', {
            item: [item.id, item.logoURL, item.storeName],
          })
        }
        className="items-center justify-center flex-1 mt-4">
        <View className="items-center flex-1 border h-20 w-40 rounded justify-center bg-gray-200">
          <Image source={{ uri: item.logoURL }} style={styles.logo} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView className="flex-1 align-center">
      <FlatList
        data={STORES}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={StoresCard}
      />
    </SafeAreaView>
  );
};

export default Stores;

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
