import * as React from 'react';
import { Text, View} from 'react-native';

export default function UserScreen({route}) {
  
  const {item}=route.params;

  return (
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center',margin:5 }}>
      <Text>Nombre: {item.nombre}</Text> 
      <Text>Edad: {item.edad}</Text> 
      <Text>Sexo: {item.sexo}</Text> 
    </View>
  );
}