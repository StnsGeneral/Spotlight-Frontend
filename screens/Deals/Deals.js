import { View, Text, ScrollView, FlatList } from 'react-native';
import React from 'react';
import DealCard from './DealCard';
import { DATA } from '../../constants';

const Deals = () => {
  return (
    <ScrollView
      vertical
      // numColumns={2}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        // justifyContent: 'center',
      }}>
      {DATA.map((deal) => {
        return (
          <DealCard
            imgUrl={deal.imgUrl}
            key={deal.id}
            title={deal.title}
            store={deal.store}
            price={deal.price}
            style={{ width: '50%' }}
          />
        );
      })}
    </ScrollView>
  );
};

export default Deals;
