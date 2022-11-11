import React, { useState } from 'react';
import {Switch, View,Image} from 'react-native';

export default function switch1(){

const[isEnabled,setItsEnabled]=useState(false)
return(
<View>
<Switch
    trackColor={{false:'green',true:'yellow'}}
    thumbColor={isEnabled ? 'blue': 'red'}
    onValueChange={()=>setItsEnabled(previousState=> !previousState)}
    value={isEnabled}
/>
{isEnabled?
<Image
    style={{width:400,height:200}}
    source={require('../assets/joaquin-boda.jpg')}  
/>:
null}
</View>
)
}