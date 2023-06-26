import React from 'react'
import { SafeAreaView, Linking, Alert } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import colors from '../constants/colors'
import Option from '../components/Option'
import OptionSeparator from '../components/OptionSeparator'

const Options = () => {

  const handleOpenURL = (url) => {
    return Linking.openURL(url).catch(() => {
      Alert.alert('Sorry, something went wrong.', 'Please try again later.')
    })
  }
  return (
    <SafeAreaView>
      <Option
        title='Themes'
        icon={<Entypo name='chevron-right' size={20} color={colors.blue} />}
        onPress={() => alert('to do!')}
      />
      <OptionSeparator />
      <Option
        title='React Native Basic'
        icon={<Entypo name='export' size={20} color={colors.blue} />}
        onPress={() => handleOpenURL('https://reactnative.dev/docs/getting-started')}
      />
      <OptionSeparator />
      <Option
        title='Create a project with Expo'
        icon={<Entypo name='export' size={20} color={colors.blue} />}
        onPress={() => handleOpenURL('https://docs.expo.dev/get-started/create-a-project/')}
      />
    </SafeAreaView>
  )
}

export default Options
