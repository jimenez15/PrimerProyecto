import React,{useState} from 'react';
import {View, Button,Text,TextInput,StyleSheet} from 'react-native';


export default function EjercicioEdad(){

const [edad, setEdad]= useState(0);
const [texto,setTexto]=useState(null);
const [color,setColor]=useState(null);
const [validateNumber,setvalidateNumber]=useState(false);
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
        <TextInput style={validateNumber ?{borderWidth:2,height:40,borderColor: 'green'}:{borderWidth:2,height:40,borderColor: 'red'}} placeholder='Edad'
        onChangeText={edad => validarEdad(edad)} />
        <Text style={{color:color}}>{texto}</Text>
        <Button
            onPress={comprobar}
            title={"Enviar"}/>
            
    </View>)

    function validarEdad(edad){
        const re = /^[0-9]+/;
        if(re.test(edad)){
            setvalidateNumber(true);
            setEdad(edad);
        }else{
            setvalidateNumber(false);
        }
    }

  function comprobar(){
    
    if(edad<18){
        setTexto('Eres un cachorrito');
        setColor('blue');
    }else if(edad<20){
        setTexto('Qué buena edad');
        setColor('red');
    }else if(edad>20){
        setTexto('Estás en la pubertad');
        setColor('green');
    }
} 
}
