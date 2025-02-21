import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Avatar, Card, MD3Colors, MD3DarkTheme, MD3LightTheme, Text } from 'react-native-paper'

type Props = {
  message: number
}

export default function MessageItem({ message }: Props) {
  const ownMessage = message % 2 === 0
  return (
    <View style={[styles.messageContainer, ownMessage ? styles.ownMessage : styles.othersMessage]} >
      <Avatar.Text size={15} label="A" style={styles.avatar} />
      <View style={[styles.card, ownMessage ? styles.ownCard : styles.othrersCard]}>
        <Text>MessageItemss Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quae? Assumenda et sint natus consectetur, numquam placeat optio? Esse aspernatur consequatur ab? Sequi qui provident dicta numquam placeat sit maiores.</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  messageContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
  ownMessage: {
    alignSelf: 'flex-start',
  },
  othersMessage: {
    alignSelf: 'flex-end',
    flexDirection: 'row-reverse'
  },
  ownCard: {
    // backgroundColor: MD3Colors.secondary80 
  },
  othrersCard: {},
  avatar: { marginTop: 5 },
  card: {
    maxWidth: '80%',
    marginBottom: 5,
    padding: 5,
    paddingHorizontal: 10,
    // backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  }

})