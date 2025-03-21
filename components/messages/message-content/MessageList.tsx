import React, { useEffect, useRef } from 'react'
import { ScrollView } from 'react-native'
import MessageItem from './MessageItem'
import { useLocalSearchParams } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { clearChatMessages, fetchChatMessages } from '@/store/features/chatSlice';

export default function MessageList() {
  const scrollRef = useRef<ScrollView>(null);
  const { chatId } = useLocalSearchParams();
  const dispatch: AppDispatch = useDispatch()
  const chat = useSelector((state: RootState) => state.chat)


  useEffect(() => {
    scrollRef.current?.scrollToEnd()
  }, [])

  useEffect(() => {
    if (chatId && typeof chatId === 'string') {
      dispatch(fetchChatMessages({ chatId }))
    }
    return function () {
      dispatch(clearChatMessages())
    }
  }, [chatId])




  return (
    <ScrollView ref={scrollRef} style={{ height: '100%', paddingVertical: 10, paddingHorizontal: 5 }}>
      {
        chat.chatMessages
          .map((message, key) => {
            return <MessageItem key={key} message={message} />
          })
      }
    </ScrollView>
  )
}
