import React from 'react';
import {Image} from 'react-native';

export default function EjercicioImagen(){
return(
<Image
    style={{width:400,height:200}}
    source={require('../assets/joaquin-boda.jpg')}  
/>
)
}