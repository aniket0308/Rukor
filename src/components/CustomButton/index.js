import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

/**
 * Common Button Component
 */

const CustomButton = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            activeOpacity={1}
            style={props.container}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={props.txtStyle}>{props.title}</Text>
                {
                    props.icon &&
                    <Image style={props.imgStyle} source={props.icon} resizeMode="contain" />
                }
            </View>
        </TouchableOpacity>
    )
}

export default CustomButton