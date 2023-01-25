import React,{useState,useEffect} from 'react';
import {View,TextInput,Button} from 'react-native';


export default function PantallaAlmacen() {

    const[fruitName, setFruitName]=useState();
    const [validateFruitName,setValidateFruitName]=useState(false);
    const[fruitPrice, setFruitPrice]=useState(0);
    const [validatePrice,setValidatePrice]=useState(false);


    function setName(fruitName){
        const re = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;

        if(re.test(fruitName)){
            setValidateFruitName(true);
        }else {
            setValidateFruitName(false);
        }
        setFruitName(fruitName);
    }

    function setPrice(fruitPrice){
        const re = /^\d+(\.\d{1,2})?$/;

        if(re.test(fruitPrice)){
            setValidateFruitPrice(true);
        }else {
            setValidateFruitPrice(false);
        }
        setFruitPrice(fruitPrice);
    }

    function checkStatus(){
        if(setValidateFruitName && setValidateFruitPrice){
            postFruits()
        }
    }

    function postFruits() {
    fetch("http://192.168.137.1:8080/fruits", {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: fruitName,
            price:fruitPrice,
        }),
    });

    return(
        <View>
        <TextInput 
        placeholder='Nueva fruta'
        onChangeText={fruitName=>setName(fruitName)}/>

        <TextInput
        placeholder='Introduzca Precio'
        onChangeText={fruitPrice=>setPrice(fruitPrice)}/>

        <Button
            onPress={() => checkStatus()}
            title={"Añadir nueva fruta"}/>
        </View>
    )
}
}
