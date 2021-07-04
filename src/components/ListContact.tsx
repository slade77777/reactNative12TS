import React from 'react'
import { SectionList, StyleSheet } from 'react-native'
import Contact from './Contact'
import Title from './Title'

interface Data {
    ContactBook: Array<{title: string,data: Array<{name: string,numberPhone:string}>}>
}

const ListContact = (props: Data) => {

    const {ContactBook} = props

    return (
        <SectionList 
            sections={ContactBook}  
            renderItem={({item,index}) => <Contact contact={item} key={index}/>}
            renderSectionHeader={({section:{title}}) => <Title title={title} />}
            keyExtractor={(item, index) => index.toString()}
        />
    )
}

export default ListContact

const styles = StyleSheet.create({})
