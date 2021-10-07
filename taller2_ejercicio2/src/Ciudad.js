import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Ciudad = ({ resultado }) => {
  const [info, setinfo] = useState({});
  const [nombre, setnombre] = useState();
  const [tipo, settipo] = useState();
  const [minimo, setminimo] = useState();
  const [maximo, setmaximo] = useState();
  const [humedad, sethumedad] = useState();
  const [viento, setviento] = useState();
  const [imagen, setimagen] = useState();

  useEffect(() => {
    
    setinfo(resultado);
    Object.values(info).map((e) => {
      setnombre(info.name);
      settipo(info.weather[0].description);
      setminimo(info.main.temp_min);
      setmaximo(info.main.temp_max);
      sethumedad(info.main.humidity);
      setviento(info.wind.speed);
      setimagen(info.weather[0].icon);
    });
  });
  return (
    <Card>
      <Card.Title style={styles.item}>Nombre Ciudad: {nombre}</Card.Title>
      <Card.Divider />
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: `http://openweathermap.org/img/w/${imagen}.png`,
          }}
        />
        <Text style={styles.item}> Tipo de Clima: {tipo}</Text>
        <Text style={styles.item}>
          Minimo: {minimo}° -  Maximo: {maximo}°
        </Text>
        <Text style={styles.item}>Humedad: {humedad}</Text>
        <Text style={styles.item}>Viento a velocidadad: {viento}</Text>
      </View>
    </Card>
  );
};

export default Ciudad;
const styles = StyleSheet.create({
  image: {
    width: 85,
    height: 85,
    resizeMode: 'contain',
  },
    item: {
    padding: 5,
    fontSize: 15,
    height: 44,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
