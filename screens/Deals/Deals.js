import { View, Text, ScrollView, FlatList } from 'react-native';
import React from 'react';
import DealCard from './DealCard';

const Deals = () => {
  return (
    <ScrollView
      vertical
      // numColumns={2}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}>
      <DealCard
        imgUrl="https://www.doritos.com/sites/doritos.com/files/2018-08/new-nacho-cheese.png"
        title="Doritos Nacho Cheese"
        store="Amazon"
        price="$5.39"
      />
      <DealCard
        imgUrl="https://www.doritos.com/sites/doritos.com/files/2018-08/new-nacho-cheese.png"
        title="Doritos Nacho Cheese"
        store="Amazon"
        price="$5.39"
      />
      <DealCard
        imgUrl="https://www.doritos.com/sites/doritos.com/files/2018-08/new-nacho-cheese.png"
        title="Doritos Nacho Cheese"
        store="Amazon"
        price="$5.39"
      />
      <DealCard
        imgUrl="https://www.doritos.com/sites/doritos.com/files/2018-08/new-nacho-cheese.png"
        title="Doritos Nacho Cheese"
        store="Amazon"
        price="$5.39"
      />
      <DealCard
        imgUrl="https://www.doritos.com/sites/doritos.com/files/2018-08/new-nacho-cheese.png"
        title="Doritos Nacho Cheese"
        store="Amazon"
        price="$5.39"
      />
      <DealCard
        imgUrl="https://www.doritos.com/sites/doritos.com/files/2018-08/new-nacho-cheese.png"
        title="Doritos Nacho Cheese"
        store="Amazon"
        price="$5.39"
      />
      <DealCard
        imgUrl="https://www.doritos.com/sites/doritos.com/files/2018-08/new-nacho-cheese.png"
        title="Doritos Nacho Cheese"
        store="Amazon"
        price="$5.39"
      />
      <DealCard
        imgUrl="https://www.doritos.com/sites/doritos.com/files/2018-08/new-nacho-cheese.png"
        title="Doritos Nacho Cheese"
        store="Amazon"
        price="$5.39"
      />
      <DealCard
        imgUrl="https://www.doritos.com/sites/doritos.com/files/2018-08/new-nacho-cheese.png"
        title="Doritos Nacho Cheese"
        store="Amazon"
        price="$5.39"
      />
      <DealCard
        imgUrl="https://www.doritos.com/sites/doritos.com/files/2018-08/new-nacho-cheese.png"
        title="Doritos Nacho Cheese"
        store="Amazon"
        price="$5.39"
      />
      <DealCard
        imgUrl="https://www.doritos.com/sites/doritos.com/files/2018-08/new-nacho-cheese.png"
        title="Doritos Nacho Cheese"
        store="Amazon"
        price="$5.39"
      />
    </ScrollView>
  );
};

export default Deals;
