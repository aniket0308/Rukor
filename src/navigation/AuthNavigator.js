import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Constants } from '../common';
import { CareToShare, Login, PersonalDetails, SetUpProfile, Signup } from '../screen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={Constants.Screen.Login} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={Constants.Screen.Login} component={Login} />
            <Stack.Screen name={Constants.Screen.SignUp} component={Signup} />
            <Stack.Screen name={Constants.Screen.SetUpProfile} component={SetUpProfile} />
            <Stack.Screen name={Constants.Screen.PersonalDetails} component={PersonalDetails} />
            <Stack.Screen name={Constants.Screen.CareToShare} component={CareToShare} />
        </Stack.Navigator>
    );
}

export default AuthNavigator;