import React,{useState,useEffect}from 'react';
import { FlatList, Text, RefreshControl,View, Image} from "react-native";
import Kiwi from "../assets/imgFrutas/kiwi.jpg";
import Manzana from "../assets/imgFrutas/manzana.jpg";
import Melocoton from "../assets/imgFrutas/melocoton.jpg";
import Naranja from "../assets/imgFrutas/naranja.jpg";
import Pera from "../assets/imgFrutas/pera.jpg";
import Piña from "../assets/imgFrutas/piña.jpg";
import Platano from "../assets/imgFrutas/platano.jpg";
import Uvas from "../assets/imgFrutas/uvas.jpg";


const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}


export default function PantallaMercado() {

    const frutas={Kiwi,Manzana,Melocoton,Naranja,Pera,Piña,Platano,Uvas};



    const [fruits, setFruits] = useState(null);

    useEffect(() => {
        getFruits()
    }, [])

    const getFruits = () => {
        fetch("http://192.168.137.1:8080/fruits")
            .then(response => response.json())
            .then((response) => {
                console.log('getting data from fetch: ', response);
                setFruits(response);
            })
            .catch(error => console.log("El error es: ", error));
    }


    const printElement = ({ item }) => {
        return (
            <View>
                <Text>{item.id}</Text>
                <Text>{item.name}</Text>
                <Text>{item.price}</Text>
                <Image source={frutas[item.name]}/>
            </View>
        )
    }

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false), getFruits());
    }, []);


    return (
        <FlatList
            data={fruits}
            renderItem={printElement}
            keyExtractor={item => item.id}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        />
    );
}