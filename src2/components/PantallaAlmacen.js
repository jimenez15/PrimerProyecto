import React,{useState} from 'react';
import {View,TextInput,Button} from 'react-native';


export default function PantallaAlmacen() {
    const[fruitName, setFruitName]=useState();
    const [validateFruitName,setValidateFruitName]=useState(false);
    const[fruitPrice, setFruitPrice]=useState(0);
    const [validateFruitPrice,setValidateFruitPrice]=useState(false);

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

        if(validateFruitName && validateFruitPrice){
            postFruits();
        }
    }

    function postFruits() {

        fetch("http://192.168.137.1:8080/fruits",{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name:  fruitName,
                price: fruitPrice,
            }),
        })

        .then((response) => response.json())
        .then((responseData) => {
            console.log(
                "POST Response",
                "Response Body -> " + JSON.stringify(responseData)
            )
            setFruitName("");
            setFruitPrice("");
            setValidateFruitName(true);
            setValidateFruitPrice(true);
            
        }).catch()
    }


    return(
        <View>
        <TextInput 
                placeholder={validateFruitName ? 'Campo erróneo' : 'Nombre fruta' }
        value={fruitName}
        onChangeText={name=>setName(name)}/>

        <TextInput
                placeholder={validateFruitPrice ? 'Campo erróneo' : 'Introduzca precio' }
        value={fruitPrice}
        keyboardType="numeric"
        onChangeText={price=>setPrice(price)}/>

        <Button
            onPress={() => checkStatus()}
            title={"Añadir nueva fruta"}/>
        </View>
    )
}

