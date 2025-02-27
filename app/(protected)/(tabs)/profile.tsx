import { AppDispatch } from '@/store'
import { logoutUser } from '@/store/features/userSlice'
import React from 'react'
import { Pressable } from 'react-native'
import { Button, Card, Text } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux'

export default function Profile() {
    const dispatch: AppDispatch = useDispatch()
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text>Content is in safe area.</Text>
            <Button onPress={()=>dispatch(logoutUser())}><Text>Logout</Text></Button>
        </SafeAreaView>
    )
}
