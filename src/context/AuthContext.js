import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import { Alert } from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [splashLoading, setSplashLoading] = useState(false);

    const register = (name, email, password, contact) => {
        setIsLoading(true);

        if (name == ''|| email == ''|| password == ''|| contact == ''){
            Alert.alert('Error', 'Input cannot be blank');
        }
        else{
            axios.post (`https://6817-119-157-84-217.ngrok-free.app/register`, {
                name, email, password, contact
            }).then(res => {
                let userInfo = res.data;
                setUserInfo(userInfo);
                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
                setIsLoading(false);
                console.log(userInfo);
                Alert.alert('Alert', "Registration Successful");
    
            }).catch(e => {
                console.log(`register error ${e}`);
                setIsLoading(false);
                Alert.alert('Alert', "Details cannot be blank");
            });
        }
    };

    const login = (email, password) => {
        setIsLoading(true);

        axios.post(`https://6817-119-157-84-217.ngrok-free.app/auth`, {
            email, password
        }).then(res => {
            let userInfo = res.data;
            console.log(userInfo);
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            setIsLoading(false);
            Alert.alert('Alert',userInfo.message);
        })
        .catch(e => {
            console.log(`login error ${e}`);
            setIsLoading(false);
            Alert.alert('Alert', "Email or Password is incorrect");
        });
    };

    const isLoggedIn = async () => {
        try{
            setSplashLoading(true);
            let userInfo = await AsyncStorage.getItem('userInfo')
            userInfo = JSON.parse(userInfo);

            if(userInfo) {
                setUserInfo(userInfo);
            }
            setSplashLoading(false);
        } catch(e) {
            console.log(`is logged in error ${e}`);
        }
    };

    useEffect(() => {
        isLoggedIn();
    }, []);
    return (
    <AuthContext.Provider
     value={{
        isLoading,
        userInfo,
        splashLoading,
        register,
        login,
    }}>
    {children}
    </AuthContext.Provider>
    );
}