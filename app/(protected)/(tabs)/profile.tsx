import React from 'react'
import { Card, Text } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Profile() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text>Content is in safe area.</Text>
        </SafeAreaView>
    )
}
