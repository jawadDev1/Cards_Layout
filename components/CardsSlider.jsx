import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function CardsSlider() {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardContainerHeading}>Cards Slider</Text>
      <ScrollView horizontal style={styles.cardsSlider}>
        <View style={[styles.card, styles.card1]}>
          <Text style={styles.cardText}>Card 1</Text>
        </View>
        <View style={[styles.card, styles.card2]}>
          <Text style={styles.cardText}>Card 2</Text>
        </View>
        <View style={[styles.card, styles.card3]}>
          <Text style={styles.cardText}>Card 3</Text>
        </View>
        <View style={[styles.card, styles.card4]}>
          <Text style={styles.cardText}>Card 4</Text>
        </View>
        <View style={[styles.card, styles.card5]}>
          <Text style={styles.cardText}>Card 5</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    marginTop: 7,
    padding: 10,
  },
  cardContainerHeading: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold'
  },
  cardsSlider: {
    padding: 6
  },
  card: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginHorizontal: 8,
  },
  card1: {
    backgroundColor: '#2c2c54',
  },
  card2: {
    backgroundColor: '#218c74',
  },
  card3: {
    backgroundColor: '#84817a',
  },
  card4: {
    backgroundColor: '#b33939',
  },
  card5: {
    backgroundColor: '#cc8e35',
  },
  cardText: {
    fontSize: 21,
    color: 'white',
  },

});
