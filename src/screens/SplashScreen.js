import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import { StyleSheet, View, Image } from 'react-native';
import { theme } from '../config';

export const SplashScreen = () => {

    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home');
          }, 3000);
        }, []);

    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/Logo/Logo.png')} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.logoBlue,
    },
    image: {
        width: 200,
        height: 200,
    },
});