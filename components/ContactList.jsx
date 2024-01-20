import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      imageUrl:
        'https://staticg.sportskeeda.com/editor/2022/08/53e15-16596004347246.png?w=840',
      name: 'Uzumaki Naruto',
      status: '7th Hokage of Konoha',
    },
    {
      uid: 2,
      imageUrl:
        'https://rukminim2.flixcart.com/image/850/1000/l26hdow0/poster/g/2/e/medium-hatake-kakashi-naruto-anime-series-hd-matte-finish-poster-original-imagdkzk2n78nyeh.jpeg?q=90&crop=false',
      name: 'Hatake Kakashi',
      status: '6th Hokage of Konoha',
    },
    {
      uid: 3,
      imageUrl:
        'https://lh3.googleusercontent.com/Ryg5ih-fOWbpEGDpbJYJz5RTq3_28Tvo2h3JQRCdiz16lw5ghitDMN6hcWA57g0d6_8VOqQYcCemRBOfZGQA64ZKkFOn71zuF1LDsXwCh4ywF-_z6VqxbBqmbQvK_-PWfZcztxDd1WDTEEUHX6GdP60',
      name: 'Monkey D. Luffy',
      status: 'Future Pirate King',
    },
    {
      uid: 4,
      imageUrl:
        'https://static.printler.com/cache/b/a/9/b/8/e/ba9b8ed966670fea5ae66c601d751d0b3e522f55.jpg',
      name: 'Gabimaru the Hollow',
      status: 'Assasin',
    },
  ];
  return (
    <View style={styles.contactList}>
      <Text style={styles.heading}>ContactList</Text>
      <ScrollView style={styles.contactContainer}>
        {contacts.map(({uid, imageUrl, name, status}) => (
          <View colors={['#00c6e7', '#0c647e']} key={uid} style={styles.userCard}>
            <Image source={{uri: imageUrl}} style={styles.userImage} />
            <View style={styles.cardBody}>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contactList: {
    flex: 1,
    padding: 10,
    marginTop: 12,
  },
  heading: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 18,
  },
  contactContainer: {
    padding: 4,
  },
  userCard: {
    flexDirection: 'row',
    gap: 7,
    alignItems: 'center',
    marginVertical: 4,
    backgroundColor: '#027c9c',
    borderRadius: 7,
    padding: 8,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userName: {
    fontSize: 17,
    color: 'white'
  },
});
