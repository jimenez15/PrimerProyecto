import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button onPress={()=>navigation.navigate('Perfil',{userName:"Antonio", edad:25})} title='Pasar página'/>
    </View>
  );
}

function ProfileScreen({route}) {
  
    const {userName}=route.params;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
        <Text>{userName}</Text>
        <Text>{route.params.edad}</Text>
        
      </View>
    );
  }

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Perfil' component={ProfileScreen} options={{title:'Mis detalles'}}/>
        <Stack.Screen name="Home"  component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;