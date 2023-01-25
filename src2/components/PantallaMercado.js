import React,{useState,useEffect}from 'react';
import { FlatList, Text, RefreshControl,View } from "react-native";


const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}


export default function PantallaMercado() {
    const [fruits, setFruits] = useState(null);

    useEffect(() => {
        fetch("http://192.168.137.1:8080/fruits")
            .then(response => response.json())
            .then((response) => {
                console.log('getting data from fetch: ', response);
                setFruits(response);
            })
            .catch(error => console.log("El error es: ", error));
    }, [])

    const printElement = ({ item }) => {
        return (
            <View >
                <Text>{item.id}</Text>
                <Text>{item.name}</Text>
                <Text>{item.price}</Text>
            </View>
        )
    }

    const [refreshing, setRefreshing] = useState(false);
    const [open,setOpen]=useState();

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false), setOpen(false));
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