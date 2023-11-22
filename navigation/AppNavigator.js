import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Contactos from '../screens/Contactos';
import Camara from '../screens/Camara'
import VibracionScreen from '../screens/Vibracion';
import SMS from '../screens/SMS';
import Qr from '../screens/Qr';
import VideoPlayer from '../screens/VideoPlayer';
import Clipboardd from '../screens/Clipboardd'

const Stack = createNativeStackNavigator();

const AppNavigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Contactos" component={Contactos} />
                <Stack.Screen name="Camara" component={Camara} />
                <Stack.Screen name="Vibracion" component={VibracionScreen} />
                <Stack.Screen name="SMS" component={SMS} />
                <Stack.Screen name="Qr" component={Qr} />
                <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
                <Stack.Screen name="Clipboardd" component={Clipboardd} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;