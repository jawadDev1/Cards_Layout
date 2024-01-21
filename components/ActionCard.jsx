import {Image, Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function ActionCard() {

  async function openWebsite(url){
    const supported = await Linking.canOpenURL(url);
    if(supported){
      Linking.openURL(url);
      return;
    }
    return;
  }

  return (
    <View style={styles.actionCard}>
      <Text style={styles.actionCardHeading}>Action Card</Text>
      <View style={styles.actionContainer}>
        <View style={styles.actionContainerHeading}>
          <Text style={styles.actionContainerHeadingText}>What is React Native?</Text>
        </View>
        <Image
          source={{
            uri: 'https://crowdbotics.ghost.io/content/images/size/w1000/2020/10/React-Native-Featured-Image.png',
          }}
          style={styles.actionContainerImage}
        />
        <View style={styles.actionContainerBody}>
          <Text style={styles.actionContainerDescription}>
            React Native is an open-source UI software framework created by Meta
            Platforms, Inc. It is used to develop applications for Android,
            Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling
            developers to use the React framework along with native platform
            capabilities.
          </Text>
          <TouchableOpacity
            onPress={() => openWebsite('https://reactnative.dev/')}
            style={styles.actionContainerReadMore}>
            <Text style={styles.actionContainerReadMoreText}>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  actionCard: {
    flex: 1,
    padding: 10,
    marginTop: 12,
  },
  actionCardHeading: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 18,
  },
  actionContainer: {
    borderRadius: 22,
    padding: 8,
  },
  actionContainerHeading: {
    height: 50,
    backgroundColor: '#b2bec3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionContainerHeadingText: {
    fontSize: 21,
    color: 'white',
    fontWeight: '500',
  },
  actionContainerImage: {
    height: 200,
  },
  actionContainerBody: {
    padding: 5,
    backgroundColor: '#e84118',
  },
  actionContainerDescription: {},
  actionContainerReadMore: {
    
  },
  actionContainerReadMoreText: {
    color: 'black',
    fontSize: 15,
    fontWeight: '400',
    backgroundColor: 'white',
    textAlign: 'center',
    width: 82,
    padding: 3,
    marginVertical: 7,
  },
});
