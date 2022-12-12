import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../containers/ProfileScreen';
import UserScreen from '../containers/UserScreen';

const Stack = createNativeStackNavigator();

export default function HomeGroup() {
    return (
        <Stack.Navigator initialRouteName="Profile">
          <Stack.Screen name='Profile' component={ProfileScreen} options={{title:'Usuarios',headerTitleAlign:'center'}}/>
          <Stack.Screen name="Detalles"  component={UserScreen} options={{title:'Perfil',headerTitleAlign:'center'}} />
        </Stack.Navigator>
    );
  }


