import { ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import SearchCard from './SearchCard';
import { GENRES } from '../../constants/';

const Search = () => {
  return (
    <SafeAreaView>
      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10,
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {GENRES.map((store) => {
          return (
            <SearchCard
              key={store.id}
              genre={store.genre}
              style={{ width: '50%' }}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
