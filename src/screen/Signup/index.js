import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import commonStyles from "../../common/CommonStyles";
import styles from "./style";
import { CustomButton, InputWithIcon } from "../../components";
import { Colors, Constants, Icons } from "../../common";
import { navigate } from "../../navigation/RootNavigation";

const SignUp = ({ navigation }) => {
    return (
        <View style={[commonStyles.flexOne, commonStyles.bgColor]}>
            <SafeAreaView style={commonStyles.bgColor} />
            <Text style={styles.createTxt}>Create new account</Text>
            <ScrollView style={styles.container}>
                <InputWithIcon
                    title1={'E-mail *'}
                    icon={Icons.mail}
                    placeholder={'tony@stark-industries.com'}
                    placeholderTextColor={Colors.gray}
                />
                <InputWithIcon
                    title1={'Password *'}
                    icon={Icons.password}
                    placeholder={'Choose a password'}
                    placeholderTextColor={Colors.gray}
                    secureTextEntry={true}
                    icon2={Icons.Eye}
                    img2Style={{ heiht: 14, width: 18 }}
                />
                <InputWithIcon
                    title1={'Confirm Password *'}
                    icon={Icons.password}
                    placeholder={'Confirm your password'}
                    placeholderTextColor={Colors.gray}
                    secureTextEntry={true}
                    icon2={Icons.Eye}
                    img2Style={{ heiht: 14, width: 18 }}
                />
                <View style={styles.passwordContainer}>
                    <Text style={styles.txtStyle}>
                        Pick a strong password, requirements are at least one of each, minimum 10 characters.
                    </Text>
                    <Text style={styles.txtStyle}>
                        Uppercase letter ( A-Z )
                    </Text>
                    <Text style={styles.txtStyle}>
                        Lowercase letter ( a-z )
                    </Text>
                    <Text style={styles.txtStyle}>
                        Number ( 0-9 )
                    </Text>
                    <Text style={styles.txtStyle}>
                        Symbol ( !@#$%^&* )
                    </Text>
                </View>
            </ScrollView>
            <View style={styles.container2}>
                <CustomButton
                    onPress={() => navigate(Constants.Screen.SetUpProfile)}
                    title={'Next'}
                    container={styles.nxtBtn}
                    txtStyle={styles.nxtTxt}
                    icon={Icons.rightArrow}
                    imgStyle={{ marginLeft: 10, height: 16, width: 14 }}
                />
                <CustomButton
                    onPress={() => navigation.goBack()}
                    title={'Cancel account creation'}
                    container={[styles.nxtBtn, { backgroundColor: Colors.bgWhite, marginVertical: 10 }]}
                    txtStyle={[styles.nxtTxt, { color: Colors.orange }]}
                    imgStyle={{ marginLeft: 10, height: 16, width: 14 }}
                />
                <Image source={Icons.appLogo} style={{ height: 40, width: 40, alignSelf: 'center' }} resizeMode="contain" />
            </View>
            <SafeAreaView style={commonStyles.bgColor} />
        </View>
    )
}

export default SignUp