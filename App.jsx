import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import CardsSlider from './components/CardsSlider';
import FancyCard from './components/FancyCard';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.mainContainer}>
          <FlatCards />
          <CardsSlider />
          <FancyCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
