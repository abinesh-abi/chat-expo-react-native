import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Card, IconButton, MD3Colors, Text, TextInput } from 'react-native-paper'

export default function MessageCreateComponent() {
    return (
        <Card
            style={styles.card}
        >
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    mode="outlined"
                    // label="Outlined input"
                    placeholder="Type message"
                // right={<TextInput.Affix text="/100" />}
                />
                <MaterialIcons style={styles.sendIcon} name='send' size={45} />
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
    sendIcon:{
        color:MD3Colors.secondary40
    }
})