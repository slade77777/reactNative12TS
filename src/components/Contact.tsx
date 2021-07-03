import React from 'react'
import { StyleSheet, Text, View,Pressable } from 'react-native'

interface Props {
    contact:{
        name: string,
        numberPhone: string,
    };
}

const Contact = (props: Props) => {

    const { contact } = props

    return (
        <View style={{display:'flex',flexDirection: 'row',paddingLeft:10,justifyContent:'space-between',flex:3,height:40,alignItems:'center'}}>
            <Text style={{fontSize:18,flex:1,fontWeight:'600'}}>{contact.name}</Text>
            <Text style={{textAlign: 'left',fontSize:16}}>{contact.numberPhone}</Text>
            <Pressable style={{flex:1,}}><Text style={{textAlign: 'right',marginRight:20}}>📞</Text></Pressable>
        </View>
    )
}

export default Contact

const styles = StyleSheet.create({})
