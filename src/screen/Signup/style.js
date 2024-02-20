import { StyleSheet } from "react-native";
import { Colors } from "../../common";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingTop: 30
    },
    createTxt: {
        fontSize: 24,
        color: '#2C3135',
        fontWeight: '400',
        alignSelf: 'center',
        paddingVertical: 30
    },
    passwordContainer: {
        marginVertical:50,
        padding: 8,
        borderRadius: 8,
        backgroundColor: Colors.lightYellow
    },
    txtStyle: {
        fontSize: 14,
        fontWeight: '400',
        color: 'black'
    },
    nxtBtn: {
        backgroundColor: Colors.orange,
        borderRadius: 8,
        padding: 10,
        alignItems: 'center'
    },
    nxtTxt: {
        fontSize: 16,
        fontWeight: '400',
        color: Colors.bgWhite
    },
    container2: {
        backgroundColor: Colors.bgWhite,
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        paddingTop:50
    }
})

export default styles