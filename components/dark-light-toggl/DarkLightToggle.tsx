import { AppDispatch, RootState } from '@/store'
import { setTheme } from '@/store/features/globalSlice'
import React from 'react'
import { View } from 'react-native'
import { IconButton } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'

export default function DarkLightToggle() {
  const global = useSelector((state: RootState) => state.global)
  const dispatch: AppDispatch = useDispatch()
  function setColorTheme() {
    dispatch(setTheme(global.theme === 'dark' ? 'light' : 'dark'))
  }
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      <IconButton
        icon={global.theme === 'dark' ? "weather-night" : "weather-sunny"}
        // iconColor={MD3Colors.primary80}
        animated
        size={30}
        onPress={setColorTheme}
      />
    </View>
  )
}
