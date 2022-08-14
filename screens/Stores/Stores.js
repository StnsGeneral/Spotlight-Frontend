import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { STORES } from '../../constants';
import StoresCard from './StoresCard';

const Stores = () => {
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
        {STORES.map((store) => {
          return (
            <StoresCard
              key={store.id}
              store={store.storeName}
              style={{ width: '50%' }}
              imgUrl={store.logoURL}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Stores;
