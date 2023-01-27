import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    fruitContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 20, margin: 10,
        backgroundColor: 'white',
        borderWidth: 5,
    },
    fruitText: {
        flex: 1,
        textAlign: 'left',
        alignItems: 'left',
        color: 'black',
        float: "right",
    },
    imgFruit: {
        width: 60,
        height: 60,
        borderWidth: 3,
        borderColor: "magenta",
        float: "left"
    }
});
export default styles;