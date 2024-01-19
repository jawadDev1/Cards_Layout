import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View style={styles.fancyCard}>
      <Text style={styles.fancyCardHeading}>Fancy Card</Text>
      <View style={styles.cardContainer}>
        <Image
          source={{
            uri: 'https://t3.ftcdn.net/jpg/03/12/43/38/360_F_312433849_WZa2vtheKKzxv3x5shBdIe6bSo7R8yCV.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardContainerBody}>
          <Text style={styles.cardHeading}>Peru</Text>
          <Text style={styles.cardTag}>Peru</Text>
          <Text style={styles.cardDescription} numberOfLines={4}>Peru is a country in South America that's home to a section of Amazon rainforest and Machu Picchu, an ancient Incan city high in the Andes mountains. The region around Machu Picchu, including the Sacred Valley, Inca Trail and colonial city of Cusco, is rich in archaeological sites. On Peru’s arid Pacific coast is Lima, the capital, with a preserved colonial center and important collections of pre-Columbian art.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fancyCard: {
    flex: 1,
    padding: 10,
    marginTop: 12,
  },
  fancyCardHeading: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  cardContainer: {
    padding: 5,
  },
  cardImage: {
    height: 200,
    borderTopRightRadius: 9,
    borderTopLeftRadius: 9,
  },
  cardContainerBody: {
    padding: 7,
    backgroundColor: '#0c2461',
  },
  cardHeading: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
  cardTag: {
    fontSize: 14,
  },
  cardDescription: {
    fontSize: 12,
  }

});
