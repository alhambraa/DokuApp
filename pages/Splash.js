import React, { useEffect } from 'react';
import {
  SafeAreaView, Image, StyleSheet, Text,
} from 'react-native';

import SplashImage from '../assets/icon/icon.png';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  });
  return (
    <SafeAreaView style={styles.container}>
      <Image source={SplashImage} style={styles.logo} />
      <Text style={{fontWeight: 'bold', fontSize: 35, color: 'turquoise'}}>
        {"\n"}
        DOKU <Text style={{color: '#000000', fontWeight: 'normal'}}>APP</Text>
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '60%',
  },
  text: {
    fontFamily: 'sans-serif',
    fontSize: 38,
    fontWeight: 'bold',
  }
});
export default Splash;
