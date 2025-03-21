import MessageList from '@/components/messages/message-content/MessageList';
import MessageCreateComponent from '@/components/messages/message-create/MessageCreateComponent';
import { RootState } from '@/store';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react'
import { ScrollView, View } from 'react-native';
import { Appbar, Avatar, Card, Text } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux';

export default function ChatView() {
    const { chatId } = useLocalSearchParams();
    const chat = useSelector((state: RootState) => state.chat)
    const user = useSelector((state: RootState) => state.user)

    const otherUser = chat.selectedChat?.userDetails?.find(val => val._id !== user.user?._id)
    const icon = otherUser?.username[0].toLocaleUpperCase() || 'A'
    return (
        <SafeAreaView >
            <Card style={{ height: '100%' }}>
                <Appbar >
                    <Appbar.BackAction onPress={() => { router.back() }} />
                    <Avatar.Text size={28} label={icon} />
                    <Appbar.Content title={otherUser?.username} style={{ marginLeft: 10 }} />
                    {/* <Appbar.Action icon="magnify" onPress={_handleSearch} /> */}
                    <Appbar.Action icon="dots-vertical" onPress={() => { }} />
                </Appbar>
                <MessageList />
                <MessageCreateComponent />
            </Card>
        </SafeAreaView>
    )
}
