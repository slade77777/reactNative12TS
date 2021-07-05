import React, {FC} from 'react';
import {SectionList, View, SafeAreaView, Text} from 'react-native';
import Contacts, {ContactType} from './Contact';

type ListContactsType = {
  data: Array<ContactType>;
};

const ListContacts: FC<ListContactsType> = ({data}) => {
  return (
    <SafeAreaView>
      <SectionList style={{backgroundColor:'#F0F0F0'}}
      sections={data}
      keyExtractor={(item, index) => item.name}
      renderItem={({ item }) => (
        <View>
          <Text>{item.name +" : " + item.phoneNumber}</Text>
        </View>
      )}
      renderSectionHeader={({section})=>(
        <View>
          <Text>{section.title}</Text>
        </View>
      )}
    />
    </SafeAreaView>
  );
};

export default ListContacts;