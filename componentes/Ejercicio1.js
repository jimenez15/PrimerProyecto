import React,{useState} from 'react';
import {View, Button,Text,TextInput,StyleSheet} from 'react-native';


export default function Ejercicio1(){

  const [edad, setEdad]= useState();
  const [flag, setFlag] = useState(false);
  const frutas =["limones", "tomates","naranjas","peras"]
  //frutas.forEach(e =>console.log("EN esta cesta hay "+e)    )
    const lista = frutas.map(e => {if(e !=="limones") {return ("En la lista hay "+e+"y cuestan: "+e.length+"€")} return null;})

    const styles=StyleSheet.create({
        nombre:{
          color:'blue'
        },
        general:{
          alignItems:'center',
          marginTop:40,
        },
      })

    

  return(
    <View style={styles.general}>
        <Text>Hola mi nombre es <Text style={styles.nombre}>Antonio Jiménez</Text></Text>
        <Text>Escribe aquí tu edad: {edad}</Text>
        <TextInput placeholder='Edad'
        onChangeText={x =>setEdad(x)} />
        <Button
            onPress={comprobar}
            title={"Enviar"}/>   
    </View>
  )


  function comprobar(){
    
    if(edad !== null){
        return(<>{edad<=18?<Text>Eres un baby</Text>:edad==19?<Text>Eres un baby Lucas</Text>:<Text>A trabajar</Text>}</>)  
    }
    return;
  }



} 
