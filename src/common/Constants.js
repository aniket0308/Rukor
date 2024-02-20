import { Dimensions } from 'react-native';

const Constants = {
    App: {
        Name: 'Rukor App',
    },
    Screen: {
        Login: 'Login',
        SignUp: 'SignUp',
        SetUpProfile: 'SetUpProfile',
        CareToShare:'CareToShare',
        PersonalDetails:'PersonalDetails',
        Auth:'Auth'
    },
    Ratio: {
        Width: Dimensions.get("screen").width,
        Height: Dimensions.get("screen").height
    }
}

export default Constants;
