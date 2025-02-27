import { RootState } from '@/store'
import { Chat } from '@/types/global'
import { useRoute } from '@react-navigation/native'
import { router, useNavigation } from 'expo-router'
import React from 'react'
import { View } from 'react-native'
import { Avatar, Card, Text } from 'react-native-paper'
import { useSelector } from 'react-redux'


type Props = {
  chat: Chat
}

export default function ChatItems({ chat }: Props) {
  const user = useSelector((state: RootState) => state.user)

  const otherUser = chat?.userDetails?.find(val => val._id !== user.user?._id)
  const icon = otherUser?.username[0].toLocaleUpperCase() ||'A'

  function handleView() {
    router.push({ pathname: '/chat-view/[chatId]', params: { chatId: 1 } })
  }

  return (
    <Card
      style={{ marginHorizontal: 5, marginVertical: 3 }}
      onPress={handleView}
    >
      <Card.Title title={otherUser?.username}
        titleStyle={{ fontSize: 20 }}
        left={() => <Avatar.Text size={35} label={icon} />}
        right={() => <View style={{ marginRight: 5 }}><Text>01/01/25</Text></View>}
      />
    </Card>
  )
}
