import React from 'react';
import { navigationRef } from './RootNavigation';
import AuthNavigator from './AuthNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Constants } from '../common';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName={Constants.Screen.Auth} screenOptions={{ headerShown: false }}>
                <Stack.Screen name={Constants.Screen.Auth} component={AuthNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );   
}
export default RootNavigator;                   