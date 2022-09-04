import { Text, SafeAreaView, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const SearchPage = ({ route }) => {
  const navigation = useNavigation();
  const searchId = route.params.item[0];
  const searchGenre = route.params.item[1];

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Placeholder. Need backend.</Text>
      <Button
        title="Go back"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text>{searchGenre}</Text>
      <Text>
        Data is being passed down the structure properly. Some of the data is
        going to have to be changed once we see exactly how the backend is
        handling the requests. But those are simple changes that can be made
        when the time comes. But you can see that the genre is changing based on
        which is clicked.
      </Text>
    </SafeAreaView>
  );
};

export default SearchPage;
