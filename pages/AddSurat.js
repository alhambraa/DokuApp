import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {Input, Button} from 'react-native-elements';

import firestore from '@react-native-firebase/firestore';

const AddSurat = ({navigation}) => {
  const [jenis, setJenis] = useState();
  const [kode, setKode] = useState();
  const [status, setStatus] = useState();

  const onChangeJenis = (jenis) => {
    setJenis(jenis);
  };

  const onChangeKode = (kode) => {
    setKode(kode);
  };

  const onChangeStatus = (status) => {
    setStatus(status);
  };

  const handleAddProduct = () => {
    firestore()
      .collection('surat')
      .add({
        jenis: jenis,
        kode: kode,
        status: status,
      })
      .then(function (docRef) {
        console.log('Document written with ID: ', docRef.id);
        alert('Surat berhasil ditambahkan');
        navigation.navigate('Dashboard');
      })
      .catch(function (error) {
        console.error('Error adding document: ', error);
        alert(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Add New Surat</Text>
      <Input
        placeholder="Jenis Surat"
        onChangeText={(jenis) => onChangeproductName(jenis)}
      />
      <Input
        placeholder="Kode Surat"
        onChangeText={(kode) => onChangeQuantity(kode)}
      />
      <Input
        placeholder="Status Surat"
        onChangeText={(status) => onChangePrice(status)}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddSurat}>
        <Text>Add Surat</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#fd5c63',
    width: '50%',
    padding: 10,
  },
});

export default AddSurat;