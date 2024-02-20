import { StyleSheet } from "react-native";
import { Colors } from "../../common";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingTop: 30
    },
    logo: {
        height: 120,
        width: 120,
        alignSelf: 'center',
        marginVertical: 20
    },
    loginBtn: {
        backgroundColor: Colors.orange,
        borderRadius: 8,
        padding: 10,
        alignItems: 'center'
    },
    loginTxt: {
        fontSize: 16,
        fontWeight: '400',
        color: Colors.bgWhite
    },
    createBtn: {
        backgroundColor: Colors.bgWhite,
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.orange,
        marginTop: 10
    },
    createTxt: {
        fontSize: 16,
        fontWeight: '400',
        color: Colors.orange
    },
    container2: {
        backgroundColor: Colors.bgWhite,
        flex: 1,
        justifyContent: 'flex-end',
        padding: 30
    }
})

export default styles 