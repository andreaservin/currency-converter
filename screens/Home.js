import React from 'react'
import { View, StyleSheet, StatusBar, Image, Dimensions } from 'react-native'
import colors from '../constants/colors'

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor={colors.blue} />
      <View style={styles.logoContainer}>
        <Image resizeMode='contain' style={styles.logoBackground} source={require("../assets/images/background.png")} />
        <Image resizeMode='contain' style={styles.logo} source={require("../assets/images/logo.png")} />
      </View>
    </View>
  )
}

const screen = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoBackground: {
    width: screen.width * 0.45,
    height: screen.height * 0.45
  },
  logo: {
    position: 'absolute',
    width: screen.width * 0.25,
    height: screen.height * 0.25
  },
})

export default Home