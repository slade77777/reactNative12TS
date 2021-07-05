//tsrnfs cú pháp tắt tạo template component có style, funtional component

import React from 'react'
import { StyleSheet, Text, View,SectionList } from 'react-native'
import Contact from './Contact'
import Title from './Title'

//a cho e tai extension cho. ok e

interface Props {
  ContactBook: Array<{title:string,data:Array<{name:string,phoneNumber:string}>}> //nen e viet thu cong nhu nay. ok e
}

const ListContacts = (props: Props) => {

  const { ContactBook } = props

  return (
    <SectionList style={{backgroundColor:'#F0F0F0'}}
      sections={ContactBook}
      keyExtractor={(item, index) => item.name}
      renderItem={({ item }) => <Contact Contact={item} />}
      renderSectionHeader={({section:{title}})=> <Title title={title}/> }
    />
  )
}

export default ListContacts

const styles = StyleSheet.create({})
