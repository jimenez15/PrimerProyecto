import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

    titulo: {
        fontSize: 50,
        color: 'white',
    },
    aplicacion: {
        alignItems: "center",
        flex: 1,
        backgroundColor: "black",
    },
    contenedor_datos: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },

    cuadrotexto_bien: {
        backgroundColor: "white",
        color: 'white',
        borderColor: 'grey',
        borderWidth: 1,
        width: 200,
    },

    cuadrotexto_mal: {
        backgroundColor: "white",
        color: 'white',
        borderColor: 'red',
        borderWidth: 1,
        width: 200,
    },

});
export default styles;