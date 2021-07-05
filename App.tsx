import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SectionList,
  SafeAreaView,
  TextInput,
  StatusBar,
} from 'react-native';

const Contacts: {
  title: string;
  data: {
    name: string;
    phoneNumber: string;
  }[];
}[] = [
  {
    title: 'A',
    data: [
      {name: 'Anh Binh', phoneNumber: '0982887446'},
      {name: 'Anh chu nha', phoneNumber: '0982887447'},
      {name: 'Anh Gia', phoneNumber: '0982887448'},
    ],
  },
  {
    title: 'B',
    data: [
      {name: 'Ba Ngoai', phoneNumber: '0982887449'},
      {name: 'Bac Dinh', phoneNumber: '0982887440'},
      {name: 'Bac Hoan', phoneNumber: '0982887441'},
    ],
  },
  {
    title: 'C',
    data: [
      {name: 'Cau Phuong', phoneNumber: '0982887442'},
      {name: 'Co Kieu Anh', phoneNumber: '0982887443'},
      {name: 'Co Thi', phoneNumber: '0982887444'},
    ],
  },
  {
    title: 'D',
    data: [
      {name: 'Dau', phoneNumber: '0982887445'},
      {name: 'Duy Hieu', phoneNumber: '0982887446'},
      {name: 'Duong Ch', phoneNumber: '0982887447'},
    ],
  },
];

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.search} placeholder=" Tim kiem" />
      <SectionList
        sections={Contacts}
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
            <Text style={styles.text}>{section.title}</Text>
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
});

export default App;
