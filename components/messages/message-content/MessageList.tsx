import React from 'react'
import { ScrollView, View } from 'react-native'
import MessageItem from './MessageItem'

export default function MessageList() {
  return (
    <ScrollView style={{ height: '100%' }}>
      {
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 87, 56, 4, 3, 2, 1, 2, 3, 4, 5, 66, 4]
          .map((message, key) => {
            return <MessageItem key={key} message={message} />
          })
      }
    </ScrollView>
  )
}
