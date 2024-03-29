import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import CardsSlider from './components/CardsSlider';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.mainContainer}>
          <FlatCards />
          <CardsSlider />
          <FancyCard />
          <ActionCard />
          <ContactList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#353b48'
  },
});
