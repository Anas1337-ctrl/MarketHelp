import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {
  Alert,
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {Paragraph, Heading, Input, CheckBox, Button} from '../components';
import {baseStyle, images, routes, theme} from '../config';
import { AuthContext } from '../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay/lib';

export const Register = ({route}) => {
  const navigation = useNavigation();

  const { item } = route.params;

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [contact, setContact] = useState(null);

  const {isLoading, register} = useContext(AuthContext);

  // const {
  //   control,
  //   formState: {errors},
  //   handleSubmit,
  // } = useForm({
  //   defaultValues: {
  //     name: '',
  //     email: '',
  //     password: '',
  //     contact: '',
  //   },
  //   resolver: yupResolver(registerSchema),
  // });

  // const submitHandler = async ({
  //   name,
  //   email,
  //   password,
  //   contact,
  // }) => {
  //   try {
  //     const {user} = await auth().createUserWithEmailAndPassword(
  //       email,
  //       password,
  //     );
  //     navigation.navigate(routes.LOGIN);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };


  return (
    <SafeAreaView style={styles.container}>
      <Spinner visible={isLoading}/>
      <Image source={images.logo} resizeMode="cover" />
      <View style={styles.card}>
        <Heading center>Create An Account.</Heading>
        <Paragraph center style={styles.para}>
          Please enter below details to get registered.
        </Paragraph>
            <Input
              style={styles.input}
              value={name}
              placeholder="Enter Username"
              onChangeText={text => setName(text)}
              placeholderTextColor="#aaaaaa"
              color={theme.colors.black}
            />
            <Input
              style={styles.input}
              value={email}
              placeholder="Enter Email"
              onChangeText={text => setEmail(text)}
              placeholderTextColor="#aaaaaa"
              color={theme.colors.black}
            />

            <Input
              value={password}
              placeholder="Enter Password"
              secureTextEntry style={styles.input}
              onChangeText={text => setPassword(text)}
              placeholderTextColor="#aaaaaa"
              color={theme.colors.black}
              
            />

            <Input
              style={styles.input}
              value={contact}
              placeholder="Enter Contact"
              onChangeText={text => setContact(text)}
              placeholderTextColor="#aaaaaa"
              color={theme.colors.black}
            />
        <CheckBox text="Accept Terms & Conditions" style={styles.checkbox} />
        <Button onPress={() => { Alert.alert('Alert', 'Redirecting to login..') ? (name == '' || email == '' || password == '' || contact == ''):
          register(name, email, password, contact),navigation.navigate(routes.LOGIN, {item:item})
        }}>Register</Button>
        <View style={styles.line} />
        <Paragraph center>Already have an account</Paragraph>
        <Button
          type="outlined"
          style={styles.btn}
          onPress={() => navigation.navigate(routes.LOGIN, {item: item})}>
          Login
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.logoBlue,
    flex: 1,
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
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

  splitInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: baseStyle.marginBottom(10),
  },

  input: {
    marginBottom: baseStyle.marginBottom(10),
    placeholderTextColor: theme.colors.black,
  },
  checkbox: {
    marginBottom: baseStyle.marginBottom(15),
  },
  line: {
    marginVertical: baseStyle.marginVertical(15),
    borderBottomColor: 'black',
    width: '70%',
    alignSelf: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  btn: {
    marginTop: baseStyle.marginTop(5),
  },
  error: {color: theme.colors.red, marginBottom: 5},
});
