import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
    title:string
}

const Title = (props: Props) => {

    const { title } = props

    return (
        <View>
            <Text>{title}</Text>
        </View>
    )
}

export default Title

const styles = StyleSheet.create({})
