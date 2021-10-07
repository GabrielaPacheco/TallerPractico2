import React, { useState, useEffect } from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Alert,
} from 'react-native';
import { Picker } from '@react-native-community/picker';
import Ciudad from './src/Ciudad';

import { Card } from 'react-native-paper';

export default function App() {
  const [busqueda, guardarbusqueda] = useState({
    ciudad: '',
  });
  const [consultar, guardarconsultar] = useState(false);
  const [resultado, guardarresultado] = useState({});
  const { ciudad } = busqueda;
  useEffect(() => {
    const extraerDatos = async () => {
      if (consultar) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=75ec9b62fdb4f2b4e79f8109e9893421`;
        try {
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
          guardarresultado(resultado);
          guardarconsultar(false);
          
        } catch (error) {
          mostrarAlerta();
        }
      }
    };
    extraerDatos();
  }, [consultar]);
  const mostrarAlerta = () => {
    Alert.alert('Error', 'No hay resultado intenta con otra ciudad o país'),
      [{ Text: 'Ok' }];
  };
  return (
    <View style={styles.app}>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            height: 40,
            marginTop: 5,
            backgroundColor: 'lightgray',
            textAlignVertical: 'center',
            borderRadius: 10,
            marginLeft: 10,
            marginRight: 10,
          }}>
          Ejercicio 2
        </Text>
        <View style={styles.contenido}>
          <Picker
            selectedValue={ciudad}
            onValueChange={
               (ciudad) => guardarbusqueda({ ...busqueda, ciudad }) | guardarconsultar(true)
            }

            style={styles.itemciudad}>
            <Picker.Item label="Ciudades" value="" />
            <Picker.Item label="Aguilares" value="Aguilares" />
            <Picker.Item label="Apopa" value="Apopa" />
            <Picker.Item label="Ayutuxtepeque" value="Ayutuxtepeque" />
            <Picker.Item label="Ciudad Delgado" value="Ciudad Delgado" />
            <Picker.Item label="El Paisnal" value="El Paisnal" />
            <Picker.Item label="Guazapa" value="Guazapa" />
            <Picker.Item label="Ilopango" value="Ilopango" />
            <Picker.Item label="Mejicanos" value="Mejicanos" />
            <Picker.Item label="Nejapa" value="Nejapa" />
            <Picker.Item label="Panchimalco" value="Panchimalco" />
            <Picker.Item label="Rosario de Mora" value="Rosario de Mora" />
            <Picker.Item label="San Marcos" value="San Marcos" />
            <Picker.Item label="San Martin" value="San Martin" />
            <Picker.Item label="San Salvador" value="San Salvador" />
            <Picker.Item
              label="Santiago Texacuangos"
              value="Santiago Texacuangos"
            />
            <Picker.Item label="Santo Tomas" value="Santo Tomas" />
            <Picker.Item label="Soyapango" value="Soyapango" />
            <Picker.Item label="Tonacatepeque" value="Tonacatepeque" />
          </Picker>
          <Ciudad resultado={resultado} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemciudad: {
    height: 45,
    backgroundColor: '#D5C0F7',
  },
  app: {
    flex: 1,
    backgroundColor: '#C0E5F7',
    justifyContent: 'center',
  },
  contenido: {
    margin: '2.5%',
  },
});
