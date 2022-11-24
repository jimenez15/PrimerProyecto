import React from 'react';
import {FlatList,View,Text} from 'react-native';

export default function FatList(){

const DATA = [
    { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Primer elemento',},
    { id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Segundo elemento',},
    { id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Tercer elemento',},];

    const printElement=({item})=>{
        return(
            <View>
            <Text>{item.title}</Text>
            <Text>{item.id}</Text>
            </View>
        )
    }

return(

<FlatList
    data={DATA}
    renderItem={printElement}
    keyExtractor={item=>item.id}
/>
)
}