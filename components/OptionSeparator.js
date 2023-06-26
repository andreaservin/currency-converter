import React from 'react'
import { StyleSheet, View } from 'react-native'
import colors from '../constants/colors'

const OptionSeparator = () => {
  return (
    <View style={styles.separator} />
  )
}

const styles = StyleSheet.create({
  separator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20
  }
})

export default OptionSeparator