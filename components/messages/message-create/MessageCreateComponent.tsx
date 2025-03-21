import { AppDispatch, RootState } from '@/store'
import { createMessage } from '@/store/features/chatSlice'
import { MaterialIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { Button, Card, IconButton, MD3Colors, Text, TextInput } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'

export default function MessageCreateComponent() {
    const user = useSelector((state: RootState) => state.user)
    const chat = useSelector((state: RootState) => state.chat)
    const otherUser = chat.selectedChat?.userDetails?.find(val => val._id !== user.user?._id)
    const dispatch: AppDispatch = useDispatch()

    const [messageText, setMessageText] = useState('')

    async function handleSend() {
        try {
            if (messageText && chat.selectedChat?._id && user.user?._id) {

                const body = {
                    "chatId": chat.selectedChat?._id,
                    "sender": user.user?._id,
                    "content": messageText
                }
                const response = await dispatch(createMessage(body))
                if (response.meta.requestStatus === 'fulfilled') {
                    setMessageText('')
                }
            }

        } catch (error) {

        }
    }

    return (
        <Card
            style={styles.card}
        >
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    mode="outlined"
                    value={messageText}
                    onChangeText={setMessageText}
                    // label="Outlined input"
                    placeholder="Type message"
                // right={<TextInput.Affix text="/100" />}
                />
                <Pressable onPress={handleSend} >
                    <MaterialIcons style={styles.sendIcon} name='send' size={45} />
                </Pressable>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        backgroundColor: MD3Colors.primary90,
        paddingHorizontal: 10,
        minHeight: 70,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textInput: {
        flex: 1,
        height: 45,
        marginRight: 10,
    },
    sendIcon: {
        color: MD3Colors.secondary40
    }
})