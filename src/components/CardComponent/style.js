import { StyleSheet } from "react-native";
import { Colors, Constants } from "../../common";

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: Colors.bgInputGray,
        borderRadius: 16,
        padding: 16,
    },
    subContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginRight: 20
    },
    headerStyle: {
        fontSize: 24,
        fontWeight: '400',
        alignSelf: 'center',
        color: 'black'
    },
    txt: {
        width: Constants.Ratio.Width - 182,
        fontSize: 14,
        fontWeight: '400',
        color: 'black'
    }
})

export default styles