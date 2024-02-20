import React, { Fragment } from "react";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import commonStyles from "../../common/CommonStyles";
import styles from "./style";
import { Colors, Constants, Icons } from "../../common";
import { CustomButton, InputWithIcon } from "../../components";

const PersonalDetails = () => {
    return (
        <View style={[commonStyles.flexOne, commonStyles.bgColor]}>
            <SafeAreaView style={commonStyles.bgColor} />
            <Text style={styles.headerTxt}>Real ID</Text>
            <ScrollView style={{ flex: 1 }}>
            <TouchableOpacity>
                <Image source={Icons.uploadPic} style={{ alignSelf: 'center' }} />
            </TouchableOpacity>
                <View style={styles.container}>
                    <InputWithIcon
                        title1={'E-mail *'}
                        icon={Icons.mail}
                        placeholder={'tony@stark-industries.com'}
                        placeholderTextColor={Colors.gray}
                    />
                    <InputWithIcon
                        title1={'User Name *'}
                        icon={Icons.userName}
                        placeholder={'tony@stark-industries.com'}
                        placeholderTextColor={Colors.gray}
                    />
                    <InputWithIcon
                        title1={'First Name *'}
                        icon={Icons.email}
                        placeholder={'Tony'}
                        placeholderTextColor={Colors.gray}
                    />
                    <InputWithIcon
                        title1={'Last Name *'}
                        icon={Icons.email}
                        placeholder={'Stark'}
                        placeholderTextColor={Colors.gray}
                    />
                    <InputWithIcon
                        title1={'Mobile'}
                        icon={Icons.mobile}
                        placeholder={'Stark'}
                        placeholderTextColor={Colors.gray}
                    />
                </View>
            </ScrollView>
            <View style={styles.container2}>
                <CustomButton
                    title={'Save and continue'}
                    container={styles.nxtBtn}
                    txtStyle={styles.nxtTxt}
                    icon={Icons.rightArrow}
                    imgStyle={{ marginLeft: 10, height: 16, width: 14 }}
                />
                <Image source={Icons.appLogo} style={{ height: 40, width: 40, alignSelf: 'center' }} resizeMode="contain" />
            </View>
            <SafeAreaView style={commonStyles.bgColor} />
        </View>
    )
}

export default PersonalDetails