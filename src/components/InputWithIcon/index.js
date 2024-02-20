    import React, { Fragment } from "react";
    import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
    import styles from "./style";

    /**
     * Common InputWithIcon Component
     */


    const InputWithIcon = (props) => {
        return (
            <Fragment>
                <View style={styles.titleContainer}>
                    {
                        props.title1 &&
                        <Text style={[styles.lftTitle, props.title1Style]}>{props.title1}</Text>
                    }
                    {
                        props.title2 &&
                        <TouchableOpacity onPress={props.onPressRightTitle}>
                            <Text style={[styles.rgtTitle, props.title2Style]}>{props.title2}</Text>
                        </TouchableOpacity>
                    }
                </View>
                <View style={[styles.mainContainer, props.mainContainer]}>
                    {
                        props.icon &&
                        <Image
                            source={props.icon}
                            style={[styles.imgStyle, props.imgStyle]}
                            resizeMode="contain"
                        />
                    }
                    <TextInput
                        ref={props.refField}
                        editable={props.editable}
                        autoCapitalize={props.autoCapitalize}
                        autoFocus={props.autoFocus}
                        keyboardType={props.keyboardType}
                        multiline={props.multiline || false}
                        placeholder={props.placeholder}
                        returnKeyType={props.returnKeyType}
                        onSubmitEditing={props.onSubmitEditing}
                        blurOnSubmit={props.blurOnSubmit}
                        secureTextEntry={props.secureTextEntry}
                        value={props.value}
                        numberOfLines={props.numberOfLines}
                        pointerEvents={props.pointerEvents ? pointerEvents : 'auto'}
                        placeholderTextColor={props.placeholderTextColor}
                        onChangeText={props.onChangeText}
                        style={[styles.placeholderTxt, props.inputTextStyle]} />
                    {
                        props.icon2&&
                        <TouchableOpacity onPress={props.onPressInputRightIcon}>
                            <Image
                                source={props.icon2}
                                style={[styles.imgStyle, props.img2Style]}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    }
                </View >
            </Fragment>
        )
    }

    export default InputWithIcon