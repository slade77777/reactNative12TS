import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Header from './src/components/Header'
import ListContact from './src/components/ListContact'

interface Props {
  
}

const App = (props: Props) => {

  const ContactBook = [
    {
      title:'A', 
      data:[
        {name:'Alex Sander',numberPhone:'0456974132'},
        {name:'Âu Cơ',numberPhone:'0845127485'},
        {name:'Anh Hai',numberPhone:'0845623423'},
        {name:'A Phở',numberPhone:'07419856321'},
        {name:'An Ngok',numberPhone:'0512398456'}
      ]
    },{ 
      title:'B',
      data: [
        {name:'Bacon',numberPhone:'098465312'},
        {name:'Baby❤',numberPhone:'0498653865'},
        {name:'Bố',numberPhone:'0416396328'},
        {name:'Banking',numberPhone:'0946153251'},
        {name:'Bee',numberPhone:'0954284652'},
        {name:'Bảo Nguyễn',numberPhone:'0887845132'}
      ]
    },{
      title:'C',
      data:[
        {name:'Chí Phèo',numberPhone:'09453125412'},
        {name:'Cậu vàng',numberPhone:'0478453655'},
        {name:'Cu thóc',numberPhone:'0416532945'},
        {name:'Cô giáo',numberPhone:'0977851324'},
        {name:'CaCa',numberPhone:'0978643556'},
        {name:'Claim',numberPhone:'0874561377'},
        {name:'Chocolate',numberPhone:'0798532131'},
        {name:'Cf',numberPhone:'0998845123'},
        {name:'Chu Minh',numberPhone:'0778945323'},
        {name:'C-H',numberPhone:'07965320000'},
        {name:'Chương',numberPhone:'04684589465'}
      ]
    },{
      title:'H',
      data:[
        {name:'Hoàng 12A2',numberPhone:'0784513256'},
        {name:'Hoàn béo',numberPhone:'099853213152'},
        {name:'Huy',numberPhone:'055585421511'}
      ]
    },{
      title:'T',
      data:[
        {name:'Tù trưởng',numberPhone:'0874653214'},
        {name:'Thầy',numberPhone:'0748153254'},
        {name:'Tưởng',numberPhone:'0786532851'},
        {name:'Thomas',numberPhone:'048653285'},
        {name:'Thanh Duy',numberPhone:'097831251'},
        {name:'Top',numberPhone:'0798563120'},
        {name:'Tam Ca',numberPhone:'0874653214'},
        {name:'TikTok',numberPhone:'097865322'}
      ]
    },{
      title:'V',
      data:[
        {name:'Việt Vũ',numberPhone:'0798461532'},
        {name:'Văn',numberPhone:'096845132845'},
        {name:'Vương',numberPhone:'08746512'},
      ]
    },
    {
      title:'O',
      data:[
        {name:'Obama',numberPhone:'0856431245'}
      ]
    }
  ]

  return (
    <SafeAreaView style={{paddingBottom:145}}>
      <Header />
      <ListContact ContactBook={ContactBook} />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})

