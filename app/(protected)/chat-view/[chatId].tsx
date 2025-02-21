import MessageList from '@/components/messages/message-content/MessageList';
import MessageCreateComponent from '@/components/messages/message-create/MessageCreateComponent';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react'
import { ScrollView, View } from 'react-native';
import { Appbar, Avatar, Card, Text } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function ChatView() {
    const { chatId } = useLocalSearchParams();
    return (
        <SafeAreaView >
            <Card style={{ height: '100%' }}>
                <Appbar >
                    <Appbar.BackAction onPress={() => { router.back() }} />
                    <Avatar.Text size={28} label="XD" />
                    <Appbar.Content title="Title" style={{ marginLeft: 10 }} />
                    {/* <Appbar.Action icon="magnify" onPress={_handleSearch} /> */}
                    <Appbar.Action icon="dots-vertical" onPress={() => { }} />
                </Appbar>
                <MessageList />
                <MessageCreateComponent />
            </Card>
        </SafeAreaView>
    )
}
