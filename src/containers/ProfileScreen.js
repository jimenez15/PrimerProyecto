import * as React from 'react';
import { Text, View,FlatList,TouchableOpacity} from 'react-native';


export default function ProfileScreen({navigation}) {
    
    const DATA = [
        { id: 1,
        nombre:'Carlos Manuel Sánchez Martín',
        edad:35,
        sexo:'Hombre',},
        { id: 2,
        nombre:'Adrián Aparcero Gelado',
        edad:26,
        sexo:'Hombre',},
        { id: 3,
        nombre:'Antonio Jiménez González',
        edad:25,
        sexo:'Hombre',},];

    const printElement=({item})=>{
        return(
            <View>
                <TouchableOpacity onPress={()=>navigation.navigate('Detalles',{item})}>
                <Text style={{margin:5}}>{item.nombre}</Text>
                </TouchableOpacity>
                </View>
        )
    }
    return (
        <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center',marginLeft:25, marginTop:10 }}>
            <FlatList
                data={DATA}
                renderItem={printElement}
                keyExtractor={item=>item.id}
            />
        </View>
    );
}