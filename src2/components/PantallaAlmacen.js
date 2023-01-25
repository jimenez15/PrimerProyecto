import React,{useState} from 'react';
import {View,TextInput,Button, Text} from 'react-native';


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
        console.log("----El vslot fr:validateFruitName ", validateFruitName);
        console.log("----El vslot validateFruitPrice: ", validateFruitPrice);
        if(validateFruitName && validateFruitPrice){
            postFruits();
        }
    }

    function postFruits() {
        console.log("--Entr en el post");
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
        }).catch(
            console.log("Error")
        )

    }

    return(
        <View>
        <TextInput 
        placeholder={validateFruitName ? 'Campo erróneo':'Nombre fruta'}
        onChangeText={fruitName=>setName(fruitName)}/>

        <TextInput
        placeholder={validateFruitPrice ? 'Campo erróneo':'Introduzca precio' }
        onChangeText={fruitPrice=>setPrice(fruitPrice)}/>

        <Button
            onPress={() => checkStatus()}
            title={"Añadir nueva fruta"}/>
        </View>
    )
}

