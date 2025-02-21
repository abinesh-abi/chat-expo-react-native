import React from 'react'
import { ScrollView } from 'react-native'
import ChatItems from './ChatItems'

export default function ChatList() {
    return (
        <ScrollView keyboardDismissMode='on-drag'>
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9].map((chat, key) => {
                    return <ChatItems key={key} />
                })
            }
        </ScrollView>
    )
}
