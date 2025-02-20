import React from 'react'
import { useColorScheme, View } from 'react-native'
import { IconButton, MD3Colors, Text } from 'react-native-paper'

export default function DarkLightToggle() {
  const theme = useColorScheme()
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      <IconButton
        icon={theme ==='dark' ? "weather-night" : "weather-sunny"}
        // iconColor={MD3Colors.primary80}
        animated
        size={30}
        onPress={() => console.log('Pressed')}
      />
    </View>
  )
}
