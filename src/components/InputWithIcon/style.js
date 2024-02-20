import { StyleSheet } from "react-native";
import { Colors, Constants } from "../../common";

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: Colors.bgInputGray,
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 4,
        marginBottom: 5,
        width: Constants.Ratio.Width - 60
    },
    placeholderTxt: {
        fontSize: 14,
        fontWeight: '400',
        width: Constants.Ratio.Width - 120
    },
    imgStyle: {
        height: 14,
        width: 13,
        marginRight: 10
    },
    lftTitle: {
        fontSize: 14,
        fontWeight: '400',
        color: '#2C3135',
        paddingVertical: 10
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rgtTitle:{
        fontSize: 14,
        fontWeight: '400',
        color: Colors.orange,
        paddingVertical: 10
    }

})

export default styles