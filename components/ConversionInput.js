import React from 'react'
import { TouchableOpacity, View, Text, TextInput, StyleSheet } from 'react-native'
import colors from '../constants/colors'

const ConversionInput = ({ text, onButtonPress, ...props }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} { ...props } />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 5,
    flexDirection: 'row'
  },
  button: {
    padding: 15,
    borderRightColor: colors.border,
    borderRightWidth: 1
  },
  buttonText: {
    fontSize: 18,
    color: colors.blue,
    fontWeight: 'bold'
  },
  input: {
    flex: 1,
    padding: 10,
    color: colors.textLight
  }
})

export default ConversionInput