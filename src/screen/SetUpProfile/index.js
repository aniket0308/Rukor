import React, { Fragment } from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import commonStyles from "../../common/CommonStyles";
import styles from "./style";
import {  Constants, Icons } from "../../common";
import { CardComponent, CustomButton } from "../../components";
import { navigate } from "../../navigation/RootNavigation";

const SetUpProfile = () => {
    return (
        <View style={[commonStyles.flexOne, commonStyles.bgColor]}>
            <SafeAreaView style={commonStyles.bgColor} />
            <Text style={styles.setUpProTxt}>Set up your profiles</Text>
            <ScrollView style={{flex:1}}>
            <View style={styles.container}>
                <Text style={styles.paraTxt}>
                    A Rukkor account is associated with two profiles, one which we call Real ID and one which is your Alias. You choose in which settings you wish to expose your true identity and in which you wish to use an alias.
                </Text>
                <CardComponent
                    mainContainer={{ marginTop: 20 }}
                    icon={Icons.realId}
                    headerTitle={'Real ID'}
                    text={'With Real ID you can disclose your personal details like name, phone number, birthday, e-mail and more. Use your Real ID when interacting with trusted family, friends and colleagues.'}
                />
                <CardComponent
                    mainContainer={{ marginTop: 20 }}
                    icon={Icons.alias}
                    headerTitle={'Alias'}
                    text={'Using your Alias you can choose an additional @alias with which you can join Spaces and interact with other users in communities where you’re not comfortable sharing your personal details.'}
                />
            </View>
            </ScrollView>
            <View style={styles.container2}>
                <CustomButton
                    onPress={() => navigate(Constants.Screen.PersonalDetails)}
                    title={'Next'}
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

export default SetUpProfile