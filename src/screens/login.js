import React, { useContext, useState } from 'react';
import {SafeAreaView, StyleSheet, Image, View, StatusBar, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {images, theme, baseStyle, routes} from '../config';
import {CheckBox, Button, Paragraph, Heading, Input} from '../components';
import { AuthContext } from '../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';


export const Login = ({route}) => {
  const navigation = useNavigation();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const {isLoading, login} = useContext(AuthContext);
  const { item } = route.params;

  
  const submitHandler = () => {
    navigation.navigate(routes.REVIEWS);
  };

  const LoginSubmit = () => {
    Alert.alert('Alert', 'Redirecting back to Listing Reviews' ) ? email == '' || password == ''
   :
      login(email,password), navigation.navigate(routes.REVIEWS, {item:item});
    }


  return (
    <SafeAreaView style={styles.container}>
      <Spinner visible={isLoading}/>
      <Image source={images.logo} style={styles.logo} resizeMode="cover" />
      <View style={styles.card}>
        <Heading center>Login To Your Account.</Heading>
        <Paragraph center style={styles.para}>
          Please enter your login details.
        </Paragraph>
        <Input
          placeholder="Enter Email"
          keyboardType="email-address"
          style={styles.input}
          value={email}
          onChangeText={text=> setEmail(text)}
          placeholderTextColor="#aaaaaa"
          color={theme.colors.black}
        />
        <Input
         placeholder="Enter a Password"
         secureTextEntry style={styles.input}
         onChangeText={text => setPassword(text)}
         value={password}
         placeholderTextColor="#aaaaaa"
         color={theme.colors.black}
         />
        <View style={styles.forgetContainer}>
          <CheckBox text="Remember Me" />
        </View>
        <Button type="filled" onPress={() => LoginSubmit()}>
          Login
        </Button>
        <View style={styles.line} />
        <Paragraph center>Don't have an account</Paragraph>
        <Button
          type="outlined"
          style={styles.btn}
          onPress={() => navigation.navigate(routes.REGISTER, {item:item})}>
          Register
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0AC2CC',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: theme.colors.logoBlue,
  },
  card: {
    backgroundColor: theme.colors.white,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: baseStyle.borderTopLeftRadius(32),
    borderTopRightRadius: baseStyle.borderTopRightRadius(32),
    paddingVertical: baseStyle.paddingVertical(30),
    paddingHorizontal: baseStyle.paddingHorizontal(30),
  },

  para: {
    marginTop: baseStyle.marginTop(5),
    marginBottom: baseStyle.marginBottom(10),
  },

  input: {
    marginBottom: baseStyle.marginBottom(10),
    placeholderTextColor: theme.colors.black,
  },

  forgetContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: baseStyle.marginBottom(15),
  },

  line: {
    marginVertical: baseStyle.marginVertical(15),
    borderBottomColor: 'black',
    width: '70%',
    alignSelf: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  rememberContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  btn: {
    marginTop: baseStyle.marginTop(5),
  },
});

export default Login;
