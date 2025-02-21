import { useRoute } from '@react-navigation/native'
import { router, useNavigation } from 'expo-router'
import React from 'react'
import { View } from 'react-native'
import { Avatar, Card, Text } from 'react-native-paper'

export default function ChatItems() {
  function handleView() {
    router.push({ pathname: '/chat-view/[chatId]', params: { chatId: 1 } })
  }

  return (
    <Card
      style={{ marginHorizontal: 5, marginVertical: 3 }}
      onPress={handleView}
    >
      <Card.Title title='Abinesh'
        titleStyle={{ fontSize: 20 }}
        left={() => <Avatar.Text size={35} label="AB" />}
        right={() => <View style={{ marginRight: 5 }}><Text>01/01/25</Text></View>}
      />
    </Card>
  )
}
