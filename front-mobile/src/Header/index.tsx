/* eslint-disable global-require */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-use-before-define */
import React from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';

function Header() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} />
      // eslint-disable-next-line no-use-before-define
      <Text style={styles.text}>Pizza delivery</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DA5C5C',
    height: 90,
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: -0.24,
    color: '#FFF',
    marginLeft: 15,
    fontFamily: 'OpenSans_700Bold',
  },
});

export default Header;
