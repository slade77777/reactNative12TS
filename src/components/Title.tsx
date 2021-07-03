import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
    title: string;
}

const Title = (props: Props) => {

    const { title } = props

    return (
        <Text style={{fontSize:20,fontWeight:'700',backgroundColor:'rgba(193, 193, 193,0.2)',paddingLeft:10}}>
                {title}
        </Text>
    )
}

export default Title

const styles = StyleSheet.create({})
