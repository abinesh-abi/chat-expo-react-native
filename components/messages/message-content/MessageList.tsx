import React, { useEffect, useRef, useState } from 'react'
import { ScrollView, View } from 'react-native'
import MessageItem from './MessageItem'
import { useLocalSearchParams } from 'expo-router';
import { retrieveChatMessages } from '@/api';
import { ApiResponse, Message } from '@/types/global';

export default function MessageList() {
  const scrollRef = useRef<ScrollView>(null);
  const { chatId } = useLocalSearchParams();

  const [fetchedMessages, setFetchedMessages] = useState<ApiResponse<Message>>()

  useEffect(() => {
    scrollRef.current?.scrollToEnd()
  }, [])

  useEffect(() => {
    fetchData()
  }, [chatId])

  async function fetchData() {
    try {
      if (chatId && typeof chatId === 'string') {
        const response = await retrieveChatMessages(chatId)
        setFetchedMessages(response)
      }
    } catch (error) {

    }
  }


  return (
    <ScrollView ref={scrollRef} style={{ height: '100%', paddingVertical: 10, paddingHorizontal: 5 }}>
      {
        fetchedMessages?.data
          .map((message, key) => {
            return <MessageItem key={key} message={message} />
          })
      }
    </ScrollView>
  )
}
