import React, { useEffect } from 'react'
import { ScrollView } from 'react-native'
import ChatItems from './ChatItems'
import { AppDispatch, RootState } from '@/store'
import { useDispatch, useSelector } from 'react-redux'
import { fetchChatList } from '@/store/features/chatSlice'

export default function ChatList() {

    const chat = useSelector((state: RootState) => state.chat)
    const dispatch: AppDispatch = useDispatch()

    // console.log(chat.chatList.)

    useEffect(() => {
        dispatch(fetchChatList())
    }, [])
    return (
        <ScrollView keyboardDismissMode='on-drag'>
            {
                chat.chatList.data.map((chat, key) => {
                    return <ChatItems key={key} chat={chat} />
                })
            }
        </ScrollView>
    )
}
