import { StyleSheet } from "react-native";
import { Colors } from "../../common";

const styles=StyleSheet.create({
    headerTxt: {
        fontSize: 24,
        color: '#2C3135',
        fontWeight: '400',
        alignSelf: 'center',
        paddingVertical: 30
    },
    container: {
        paddingHorizontal: 30,
        paddingTop: 30
    },
    container2: {
        backgroundColor: Colors.bgWhite,
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        paddingTop:20,
        flex:0.2,
    },
    nxtBtn: {
        backgroundColor: Colors.orange,
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
        marginBottom:20
    },
    nxtTxt: {
        fontSize: 16,
        fontWeight: '400',
        color: Colors.bgWhite
    },
})

export default styles