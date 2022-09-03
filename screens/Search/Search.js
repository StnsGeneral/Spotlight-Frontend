import { SafeAreaView, FlatList, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { GENRES } from '../../constants/';
import { useNavigation } from '@react-navigation/native';

const Search = () => {
  const navigation = useNavigation();

  const SearchCard = ({ item }) => {
    return (
      <TouchableOpacity
        className="items-center justify-center p-4 m-4 border-8 border-sky-900 flex-1"
        onPress={() => {
          navigation.navigate('SearchPage', { item: [item.id, item.genre] });
        }}>
        <Text>{item.genre}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={GENRES}
        numColumns={2}
        renderItem={SearchCard}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Search;
