import React from 'react';
import { SafeAreaView, View, FlatList,} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Emoticonos() {
const DATA = [
{ id: '1',
title: 'Cantarrana',
Icon: 'account-circle',},
{ id: '2',
title: 'Bicho',
Icon: 'alien',},
{ id: '3',
title: 'El macho',
Icon: 'alpha-i-box',},
{ id: '4',
title: 'Boostrap',
Icon: 'alpha-j-box',},
];


  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
         <Button 
          title={item.title}
          onPress={() => navigation.navigate("Details")} />
   
    <Icon name={item.Icon} size={100} color="#4F8EF7"/>
  </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}
