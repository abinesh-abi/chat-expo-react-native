import React from 'react'
import { TextProps, View } from 'react-native'
import { Text } from 'react-native-paper'
type Props = { size?: number } & TextProps

export default function Logo({ size = 16, ...rest }: Props) {
    return (
        <View>
            <Text {...rest} style={[{ fontSize: size }, rest.style]}>Chat App</Text>
        </View>
    )
}
