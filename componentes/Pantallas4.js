import * as React from 'react';
import { Text, View,Button,FlatList,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';


function Profile({navigation}) {
    const DATA = [
        { id: 1,
        nombre: 'Carlos Manuel Sánchez Martín',
        edad:35,
        sexo:'Hombre',},
        { id: 2,
        nombre: 'Adrián Aparcero Gelado',
        edad:26,
        sexo:'Hombre',},
        { id: 3,
        nombre: 'Antonio Jiménez González',
        edad:25,
        sexo:'Hombre',},];

    const printElement=({item})=>{
        return(
            <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center'}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Detalles',{item})}>
                <Text style={{margin:5}}>{item.nombre}</Text>
                </TouchableOpacity>
                </View>
        )
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <FlatList
                data={DATA}
                renderItem={printElement}
                keyExtractor={item=>item.id}
            />
        </View>
    );
}

function User({route}) {
    const {item}=route.params;
    return (
      <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center',margin:5 }}>
        <Text>Nombre: {item.nombre}</Text> 
        <Text>Edad: {item.edad}</Text> 
        <Text>Sexo: {item.sexo}</Text> 
      </View>
    );
  }

function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Home') {
                  iconName = focused
                    ? "person-circle"
                    : 'person-circle-outline';
                } else if (route.name === 'Settings') {
                  iconName = focused 
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
                }
    
                 return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'magenta',
              tabBarInactiveTintColor: 'black',
            })}
          >
            <Tab.Screen name="Home" component={HomeGroup} options={{headerTitleAlign:'center'}} />
            <Tab.Screen name="Settings" component={SettingsScreen} options={{headerTitleAlign:'center'}} />
          </Tab.Navigator>
        </NavigationContainer>
      );
    }

      function HomeGroup() {
        return (
            <Stack.Navigator initialRouteName="Profile">
              <Stack.Screen name='Profile' component={Profile} options={{title:'Usuarios',headerTitleAlign:'center'}}/>
              <Stack.Screen name="Detalles"  component={User} options={{title:'Perfil',headerTitleAlign:'center'}} />
            </Stack.Navigator>
        );
      }
    