import React, {FC} from 'react';
import {SectionList, View, SafeAreaView, Text, StatusBar, TextInput, StyleSheet} from 'react-native';
import Contact, {ContactType} from './Contact';

type ListContactType = {
  data: Array<ContactType>;
};

const ListContacts: FC<ListContactType> = ({data}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.search} placeholder=" Tim kiem" />
      <SectionList
        sections={data}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <View
            style={{
              padding: 15,
              marginVertical: 8,
            }}>
            <Text style={styles.text}>
              {item.name + ' : ' + item.phoneNumber}
            </Text>
          </View>
        )}
        renderSectionHeader={({section}) => (
          <View style={styles.item}>
            <Text style={styles.header}>{section.title}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  item: {
    margin: 10,
    justifyContent: 'center',
    borderRadius: 10,
  },
  text: {
    margin: 10,
    borderBottomColor: '#E1E1E1',
    borderBottomWidth: 1,
    fontSize: 18,
    color: 'white',
  },
  search: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#11AC93',
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#11AC93',
  },
  header: {
    margin: 5,
    borderBottomColor: '#E1E1E1',
    borderBottomWidth: 1,
    fontSize: 25,
    color: 'white',
  },
});
export default ListContacts;