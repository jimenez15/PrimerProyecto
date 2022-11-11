import React,{useState, useRef} from 'react';
import {View,Text,TextInput,StyleSheet,Switch, Button, Image } from 'react-native';

export default function Formulario(){

const [nombre, setNombre]= useState();
const [apellidos, setApellidos]= useState();
const [edad, setEdad]= useState(0); 
const [correo, setCorreo]= useState();

const [isEnabled,setItsEnabled]=useState(false);
const [validateNombre,setValidateNombre]=useState(false);
const [validateApellidos,setValidateApellidos]=useState(false);
const [validateEdad,setValidateEdad]=useState(false);
const [validateCorreo,setValidateCorreo]=useState(false);

const [mostrarDatos, setMostrarDatos] = useState(false);

function validarNom(nombre){
    const re = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
    if(re.test(nombre)){
        setValidateNombre(true);
    }else {
        setValidateNombre(false);
    }
    setNombre(nombre);
}

function validarAp(apellidos){
    const re = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
    if(re.test(apellidos)){
        setValidateApellidos(true);
    }else{
        setValidateApellidos(false);
    }
    setApellidos(apellidos);
}

function validarEdad(edad){
    const re = /^[0-9]+/;
    if(re.test(edad)){
        setValidateEdad(true);
    }else {
        setValidateEdad(false);
    }
    setEdad(edad);
}      
    
function validarCorreo(correo){
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(re.test(correo)){
        setValidateCorreo(true);
    }else {
        setValidateCorreo(false);
    }
    setCorreo(correo);
     
}


function mostrar() {
    if(validateNombre && validateApellidos && validateEdad && validateCorreo) {
        setMostrarDatos(true)
    }
}

function mostrarTexto(){
    const sexo = isEnabled ? 'hombre' : 'mujer';
    return (
    <>
        <Text style={{marginVertical: 20}}>{'Mi nombre es '+ nombre + ' '+ apellidos+ ', tengo '+ edad + ' años, soy '+ sexo + ' y mi correo es '+ correo }</Text>
        <Image 
            style={{width:300,height:200, alignSelf: 'center'}}
            source={require('../assets/joaquin-boda.jpg')}  
        />
    </>
    )
}

return(

<View style={styles.general}>

<View style={styles.datos}>

<Text style={styles.nombreCampos}>Nombre </Text> 
<TextInput style={styles.campos} 
placeholder='Nombre'
onChangeText={nombre=>validarNom(nombre)}/>
</View>

<View style={styles.datos}>
<Text style={styles.nombreCampos}>Apellidos </Text>
<TextInput style={styles.campos} 
placeholder='Apellidos'
onChangeText={apellidos=>validarAp(apellidos)}/>

</View>

<View style={styles.datos}>
<Text style={styles.nombreCampos}>Edad </Text>
<TextInput style={styles.campos}
placeholder={validateEdad ? 'Campo erróneo':'Edad'}
onChangeText={edad => validarEdad(edad)}/>
</View>

<View style={styles.datos}>
<Text style={styles.nombreCampos}>Correo electrónico </Text>
<TextInput style={styles.campos} 
placeholder='Correo'
onChangeText={correo=>validarCorreo(correo)}/>
</View>

<View style={styles.datos}>
<Text style={styles.nombreCampos}>Sexo</Text>
<Text>Mujer</Text>
<Switch style={{alignSelf:"center"}}
    trackColor={{false:'pink',true:'blue'}}
    thumbColor={isEnabled ? 'blue': 'pink'}
    onValueChange={()=> setItsEnabled(previousState=> !previousState)}
    value={isEnabled}
/>
<Text>Hombre</Text>
</View>

<View style={styles.datos}>
<Button
    onPress={() => mostrar()}
    title={"Enviar"}/>
</View>

{mostrarDatos && mostrarTexto()}

</View>

)

}

const styles=StyleSheet.create({     

    general:{
        marginLeft:30,
        marginRight:30,
        marginTop:40,
    },

    datos:{
        
        flexDirection:'row',
        marginTop:30,
        alignItems:"center",
    },

    nombreCampos:{
        minWidth:200,
    },

    campos:{
        borderWidth:2,
        height:40,
        width:150,
    },
    
})