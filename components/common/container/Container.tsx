import { ThemedView } from '@/components/common/themedItems/ThemedView'
import React from 'react'
import { ViewProps } from 'react-native'

type Props = ViewProps

export default function Container(props: Props) {
    return (
        <ThemedView {...props} style={{ paddingTop: 20, height: '100%' }}>
            {props.children}
        </ThemedView>
    )
}
