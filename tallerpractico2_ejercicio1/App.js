import * as React from 'react';
import Loader from 'react-loader-spinner';
import { Divider } from 'react-native-paper';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Ionicons, Entypo } from '@expo/vector-icons';
import { ListItem, Avatar } from 'react-native-elements';
import { WebView } from 'react-native-webview';

function Peliculas() {
  return (
    <>
      <View>
        <View style={{ flexDirection: 'row' }}>
          <View styles={styles.contenedor}>
            <Text style={styles.titulo}>Comedia</Text>

            <ScrollView horizontal>
              <View>
                <Image
                  style={styles.elenco}
                  source={require('./src/img/comedia1.jpg')}
                />
              </View>

              <View>
                <Image
                  style={styles.elenco}
                  source={require('./src/img/comedia2.jpg')}
                />
              </View>

              <View>
                <Image
                  style={styles.elenco}
                  source={require('./src/img/comedia3.jpg')}
                />
              </View>

              <View>
                <Image
                  style={styles.elenco}
                  source={require('./src/img/comedia4.jpg')}
                />
              </View>

              <View>
                <Image
                  style={styles.elenco}
                  source={require('./src/img/comedia5.jpg')}
                />
              </View>

              <View>
                <Image
                  style={styles.elenco}
                  source={require('./src/img/comedia6.jpg')}
                />
              </View>
            </ScrollView>
          </View>
        </View>

        <Divider />

        <View style={{ flexDirection: 'row' }}>
          <View styles={styles.contenedor}>
            <Text style={styles.titulo}>Romance</Text>

            <ScrollView horizontal={true}>
              <View>
                <Image
                  style={styles.elenco}
                  source={require('./src/img/romance1.jpg')}
                />
              </View>

              <View>
                <Image
                  style={styles.elenco}
                  source={require('./src/img/romance2.jpg')}
                />
              </View>

              <View>
                <Image
                  style={styles.elenco}
                  source={require('./src/img/romance3.jpg')}
                />
              </View>

              <View>
                <Image
                  style={styles.elenco}
                  source={require('./src/img/romance4.jpg')}
                />
              </View>

              <View>
                <Image
                  style={styles.elenco}
                  source={require('./src/img/romance5.jpg')}
                />
              </View>

              <View>
                <Image
                  style={styles.elenco}
                  source={require('./src/img/romance6.jpg')}
                />
              </View>
            </ScrollView>
          </View>
        </View>

        <Divider />
        <View style={{ flexDirection: 'row' }}>
          <View styles={styles.contenedor}>
            <Text style={styles.titulo}>Acción</Text>

            <ScrollView horizontal>
              <View>
                <Image
                  style={styles.elenco}
                  source={require('./src/img/accion1.jpg')}
                />
              </View>

              <View>
                <Image
                  style={styles.elenco}
                  source={require('./src/img/accion2.jpg')}
                />
              </View>

              <View>
                <Image
                  style={styles.elenco}
                  source={require('./src/img/accion3.jpg')}
                />
              </View>

              <View>
                <Image
                  style={styles.elenco}
                  source={require('./src/img/accion4.jpg')}
                />
              </View>

              <View>
                <Image
                  style={styles.elenco}
                  source={require('./src/img/accion5.jpg')}
                />
              </View>

              <View>
                <Image
                  style={styles.elenco}
                  source={require('./src/img/accion6.jpg')}
                />
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </>
  );
}

function Series() {
  const DATA = [
    {
      title: 'The Office',
      pic: require('./src/img/comediaserie1.jpg'),
      seasons: '9 Temporadas',
    },
    {
      title: 'Catastrophe ',
      pic: require('./src/img/comediaserie2.jpg'),
      seasons: '4 Temporadas',
    },
    {
      title: 'Vergüenza',
      pic: require('./src/img/comediaserie3.jpg'),
      seasons: '3 Temporadas',
    },
    {
      title: 'Fleabag',
      pic: require('./src/img/comediaserie4.jpg'),
      seasons: '2 Temporadas',
    },
    {
      title: 'Flight of the conchords',
      pic: require('./src/img/comediaserie5.jpg'),
      seasons: '2 Temporadas',
    },
    {
      title: 'Parks and recreation',
      pic: require('./src/img/comediaserie6.jpg'),
      seasons: '7 Temporadas',
    },
  ];

  const Item = ({ title, pic, seasons }) => (
    <ScrollView vertical={true}>
      <View style={styles.serie}>
        <ListItem bottomDivider>
          <View style={styles.subtitleView}>
            <Image source={pic} style={styles.ratingImage} />
          </View>
          <ListItem.Content>
            <ListItem.Title>{title}</ListItem.Title>
            <ListItem.Subtitle>{seasons}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </View>
    </ScrollView>
  );
 
  const renderItem = ({ item }) => (
    <Item title={item.title} seasons={item.seasons} pic={item.pic} />
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

function Proximamente() {
  const DATA = [
    {
      title: 'You',
      video:
        'https://www.youtube.com/watch?v=NqrlWUmpVLg&feature=emb_title&ab_channel=NetflixLatinoam%C3%A9rica',
      fecha: '15 de octubre 2021',
      descripcion:
        'Sigue la historia de Joe Goldberg , un gerente de una librería en Nueva York, quien al conocer a Guinevere Beck, una aspirante a escritora, se enamora de ella. Él alimenta su obsesión tóxica usando las redes sociales y otras tecnologías para rastrear su presencia y eliminar los obstáculos a su romance.',
    },
    {
      title: 'SPIDER-MAN: NO WAY HOME',
      video:
        'https://www.youtube.com/watch?v=rt-2cxAiPJk&ab_channel=SonyPicturesEntertainment',
      fecha: ' 17 de Diciembre 2021',
      descripcion:
        'Tras los acontecimientos de Spider-Man: Far From Home, la vida de Peter Parker y su reputación se ponen patas arriba cuando su identidad queda expuesta a manos de Mysterio. Al buscar la ayuda de Stephen Strange para intentar arreglar todo, las cosas pronto se vuelven mucho más peligrosas y Parker debe encontrar lo que realmente significa ser Spider-Man.',
    },
    {
      title: 'Mi nombre',
      video:
        'https://www.youtube.com/watch?v=7_8eUHswhsE&ab_channel=NetflixLatinoam%C3%A9rica',
      fecha: ' 17 de Octubre 2021',
      descripcion:
        'La serie gira entorno a una mujer que se une a una banda para vengar la muerte de su padre.',
    },
  ];

  const Item = ({ video, title, descripcion, fecha }) => (
    <ScrollView>
      <View style={styles.serie}>
        <View style={styles.cardRounded}>
          <WebView
            mediaPlaybackRequiresUserAction={false}
            style={{
              height: 240,
              width: 320,
              alignSelf: 'center',
              alignContent: 'center',
            }}
            source={{ uri: video }}
          />
        </View>
        <Text style={styles.pelicula}>Titulo: {title}</Text>
        <Text style={styles.pelicula}>Descripcion: {descripcion}</Text>
        <Text style={styles.pelicula}>Fecha de estreno: {fecha}</Text>
      </View>
      <Divider />
    </ScrollView>
  );

  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      video={item.video}
      descripcion={item.descripcion}
      fecha={item.fecha}
    />
  );
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Peliculas"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarActiveBackgroundColor: '#feb72b',
        tabBarInactiveTintColor: '#FFF',
        tabBarInactiveBackgroundColor: '#527318',
      }}>
      <Tab.Screen
        name="Películas"
        component={Peliculas}
        options={{
          tabBarLabel: 'Peliculas',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="movie-roll"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Series"
        component={Series}
        options={{
          tabBarLabel: 'Series',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="movie-open-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Proximamente"
        component={Proximamente}
        options={{
          tabBarLabel: 'Proximamente',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="movie-filter"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10,
  },
  pelicula: {
    fontWeight: 'bold',
    fontSize: 15,
    marginVertical: 10,
  },
  elenco: {
    width: 100,
    height: 120,
    marginRight: 20,
  },
  contenedor: {
    marginHorizontal: 25,
    flex: 1,
  },
  subtitleView: {
    flexDirection: '1',
    paddingTop: 5,
  },
  ratingImage: {
    height: 75,
    width: 125,
  },
  cardRounded: {
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor: '#000000',
    flex: 0,
    height: 240,
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
