import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
  Contact:{
    name: string,
    phoneNumber:string
  }
}

const Contact = (props: Props ) => {

  const { Contact } = props

  return (
    <View style={{...styles.container, backgroundColor: '#F9C6C6'}}>
      <Text style={styles.textStyle}>{Contact.name + ' : '}</Text>
      <Text style={styles.textStyle}>{Contact.phoneNumber}</Text>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    justifyContent: 'center',
    padding: 10
  },
  container: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
