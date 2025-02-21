import ChatList from '@/components/chat-list/ChatList'
import DarkLightToggle from '@/components/dark-light-toggl/DarkLightToggle'
import Search from '@/components/search/Search'
import { RootState } from '@/store'
import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { View } from 'react-native'
import { Card, Text } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'

export default function Index() {
    const user = useSelector((state: RootState) => state.user)
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Card style={{ height: '100%' }}>
                <Card.Title
                    title='Chat App'
                    titleStyle={{ fontSize: 25 }}
                    subtitle={`Welcome ${user.user?.username}`}
                    right={() => <DarkLightToggle />}
                />
                <Search />
                <ChatList />
            </Card>
        </SafeAreaView>
    )
}
