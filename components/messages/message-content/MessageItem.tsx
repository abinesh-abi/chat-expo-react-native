import { RootState } from '@/store'
import { Message } from '@/types/global'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Avatar, Card, MD3Colors, MD3DarkTheme, MD3LightTheme, Text } from 'react-native-paper'
import { useSelector } from 'react-redux'

type Props = {
  message: Message
}

export default function MessageItem({ message }: Props) {

  const user = useSelector((state: RootState) => state.user)
  const chat = useSelector((state: RootState) => state.chat)
  const otherUser = chat.selectedChat?.userDetails?.find(val => val._id !== user.user?._id)

  const ownMessage = user.user?._id === message.sender

  return (
    <View style={[styles.messageContainer, ownMessage ? styles.ownMessage : styles.othersMessage]} >
      <Avatar.Text size={15} label="A" style={styles.avatar} />
      <Card style={[styles.card, ownMessage ? styles.ownCard : styles.othrersCard]}>
        <Text>{message.content}</Text>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  messageContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
  ownMessage: {
    alignSelf: 'flex-start',
  },
  othersMessage: {
    alignSelf: 'flex-end',
    flexDirection: 'row-reverse'
  },
  ownCard: {
    // backgroundColor: MD3Colors.secondary80 
  },
  othrersCard: {},
  avatar: { marginTop: 5 },
  card: {
    maxWidth: '80%',
    marginBottom: 5,
    padding: 5,
    paddingHorizontal: 10,
    // backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  }

})