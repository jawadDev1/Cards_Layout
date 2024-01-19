import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    
    <View style={styles.categoriesContainer}>
      <Text style={styles.heading}>Categories</Text>
      <View style={styles.subContainer}>
        <View style={[styles.box, styles.box1]}>
          <Text style={styles.boxText}>Red</Text>
        </View>
        <View style={[styles.box, styles.box2]}>
          <Text style={styles.boxText}>Green</Text>
        </View>
        <View style={[styles.box, styles.box3]}>
          <Text style={styles.boxText}>Blue</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  categoriesContainer: {
    flex: 1,
    padding: 10,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  subContainer: {
    flexDirection: 'row',
    gap: 13,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 17,
  },
  box: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  box1: {
    backgroundColor: '#cf000f',
  },
  box2: {
    backgroundColor: '#00e640',
  },
  box3: {
    backgroundColor: '#0f0ade',
  },
  boxText: {
    fontSize: 22,
    fontWeight: 'normal',
    color: 'white',
  },
});
