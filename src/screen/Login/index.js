import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { Colors, Constants, Icons } from "../../common";
import commonStyles from "../../common/CommonStyles";
import styles from "./style";
import { CustomButton, InputWithIcon } from "../../components";
import { navigate } from "../../navigation/RootNavigation";

const Login = () => {
    return (
        <View style={[commonStyles.flexOne, commonStyles.bgColor]}>
            <SafeAreaView style={commonStyles.bgColor} />
            <Image
                source={Icons.appLogo}
                style={styles.logo}
                resizeMode="contain"
            />
            <View style={styles.container}>
                <InputWithIcon
                    title1={'E-mail'}
                    icon={Icons.email}
                    placeholder={'Enter your e-mail'}
                    placeholderTextColor={Colors.gray}
                />
                <InputWithIcon
                    title1={'Password'}
                    title2={'Forget Password'}
                    icon={Icons.password}
                    placeholder={'Enter your password'}
                    placeholderTextColor={Colors.gray}
                    secureTextEntry={true}
                    icon2={Icons.Eye}
                    img2Style={{ heiht: 14, width: 18 }}
                />
                <InputWithIcon
                    title1={'Language'}
                    icon={Icons.language}
                    placeholder={'Enter your Language'}
                    placeholderTextColor={Colors.gray}
                    value={'English'}
                    imgStyle={{ heiht: 14, width: 14 }}
                />
            </View>
            <View style={styles.container2}>
                <CustomButton
                    title={'Login'}
                    container={styles.loginBtn}
                    txtStyle={styles.loginTxt}
                />
                <CustomButton
                    onPress={() => navigate(Constants.Screen.SignUp)}
                    title={'Create new account'}
                    container={styles.createBtn}
                    txtStyle={styles.createTxt}
                />
            </View>
        </View>
    )
}

export default Login