import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import colors from '../constants/colors'

const Option = ({ icon, title, onPress }) => {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <Text style={styles.text}>{ title }</Text>
      { icon }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 16,
    color: colors.text
  }
})

export default Option