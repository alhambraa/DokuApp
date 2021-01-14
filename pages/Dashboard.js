import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, Button} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';

const Dashboard = ({navigation}) => {
  const [data, setData] = useState();

  useEffect(() => {
    firestore()
      .collection('surat')
      .onSnapshot((snapshot) => {
        const listSurat = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(listSurat);
        setData(listSurat);
      });
  }, []);

  let deleteData = firestore().collection('surat');

  const deleteSurat = (key) => {
    deleteData
      .doc(key)
      .delete()
      .then(() => {
        alert('Surat berhasil dihapus');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(data);
  return (
    <SafeAreaView style={styles.container}>
      <Text h3>View Surat</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.wrapper}>
              <View style={styles.surat}>
                <View>
                  <Text>{item.jenis}</Text>
                  <Text>{item.kode}</Text>
                </View>
                <View>
                  <Text>{item.status}</Text>
                </View>
              </View>
              <View style={styles.action}>
                <Button
                  title="Ubah"
                  type="outline"
                  onPress={() =>
                    navigation.navigate('UpdateSurat', {surat: item})
                  }
                />
                <Button
                  title="Hapus"
                  type="outline"
                  onPress={() => deleteSurat(item.id)}
                />
              </View>
            </View>
          );
        }}
      />
      <Button
        title="Add Surat"
        onPress={() => navigation.navigate('AddSurat')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
  },
  surat: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  action: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapper: {
    borderWidth: 1,
    borderColor: '#2e2e2e',
    padding: 20,
  },
});

export default Dashboard;