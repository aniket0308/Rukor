import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./style";

/**
 * Common Card Component
 */


const CardComponent = (props) => {
    return (
        <View style={[styles.mainContainer,props.mainContainer]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={styles.subContainer}>
                    <Text style={styles.headerStyle}>{props.headerTitle}</Text>
                    <Image source={props.icon} style={{ height: 64, width: 64,marginTop:20 }} resizeMode="contain" />
                </View>
                <Text style={styles.txt}>
                    {props.text}
                </Text>
            </View>
        </View>
    )
}

export default CardComponent