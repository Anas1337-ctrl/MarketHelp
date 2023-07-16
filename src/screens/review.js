import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    Modal,
    TextInput,
    Alert,
} from 'react-native';
import { Button, Paragraph, Wrapper } from '../components';
import { baseStyle, images, theme, routes } from '../config';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';



export const Reviews = ({ route }) => {
    const { userInfo } = useContext(AuthContext);
    const navigation = useNavigation();


    const [isModalVisible, setisModalVisible] = useState(false);
    const { item } = route.params;
    const [responseData, setResponseData] = React.useState();
    const [inputText, setInputText] = useState('');
    const [text, setText] = useState('');
    const [refresh, setRefresh] = useState(0);

    const handleSubmit = async () => {
        console.log('Submitted Feedback: ', text);
        if (text.trim() === ''){
            Alert.alert('Error', 'Feeback cannot be blank');
        }
        else{
            await axios.post(`https://6817-119-157-84-217.ngrok-free.app/listing/${item.id}/feedback`, {
            feedback: text, token: userInfo.data
        }).then(res => {
            let FeedbackInfo = res.data;
            // setFeedbackinfo(FeedbackInfo);
            // AsyncStorage.setItem('FeedbackInfo', JSON.stringify(FeedbackInfo));
            setRefresh(refresh+1);
            console.log(FeedbackInfo);
            Alert.alert('Success',FeedbackInfo.message);
            setText("");
        }).catch(e => {
            console.log(`feedback error ${e}`);

        });
        setisModalVisible(!isModalVisible);
    }
}
        React.useEffect(() => {
            axios.get(`https://6817-119-157-84-217.ngrok-free.app/listing/${item.id}/feedback`)
                .then(response => {
                    setResponseData(response.data.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }, [refresh]);

    return (
        <Wrapper>
            <View style={styles.header} >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={images.back} style={styles.backIcon} />
                </TouchableOpacity>
                < Text style={styles.headerText} > Reviews </Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.review} >
                {console.log(responseData)}
                {responseData &&
                    responseData.length > 0
                    ?
                    responseData.map((item) => (
                        <View style={styles.reviewContainer}>
                            <View style={styles.flex} >
                                <Paragraph style={styles.reviewer} > {item.name} </Paragraph>
                            </View>
                            <Paragraph>
                                {item.feedback_desc}
                            </Paragraph>
                        </View>
                    ))
                    :
                    null
                }
            </ScrollView>
            <View style={styles.footer} >
                <TouchableOpacity>
                    <Button onPress={() => {
                        if (userInfo.data) setisModalVisible(true);
                        else navigation.navigate(routes.LOGIN, { item: item });
                    }}> Post a review </Button>
                </TouchableOpacity>
            </View>
            <Modal
                transparent={true}
                animationType='slide'
                visible={isModalVisible}
            >
                <View style={styles.modalContainer}>
                    <TextInput
                    label="Review"
                    multiline={true}
                    //Capitalize="none"
                    mode="outlined"
                    activeOutlineColor={theme.colors.blue}
                    style={{ height: 40 }}
                    placeholder="Type here to enter a feedback"
                    onChangeText={newText => setText(newText)}
                    value={text}
                    placeholderTextColor={theme.colors.darkSilver}
                    color={theme.colors.blackSecondary}
                    />
                    <View style={{...styles.modalButtonContainer, width: '90%'}}>
                        <Button onPress={() => handleSubmit()}> Submit </Button>
                        <Button onPress={() => setisModalVisible(false)}> Close </Button>
                    </View>
                </View>
            </Modal>
        </Wrapper >
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: baseStyle.marginBottom(32),
        paddingHorizontal: baseStyle.paddingHorizontal(15),
    },
    backIcon: {
        width: baseStyle.width(36),
        height: baseStyle.height(36),
    },
    headerText: {
        fontFamily: theme.font.bold,
        fontSize: baseStyle.fontSize(16),
        lineHeight: baseStyle.lineHeight(19),
        color: theme.colors.black,
        marginLeft: baseStyle.marginLeft(75),
    },
    review: {
        paddingHorizontal: baseStyle.paddingHorizontal(15),
    },
    reviewContainer: {
        backgroundColor: theme.colors.lightGrey,
        paddingVertical: baseStyle.paddingVertical(15),
        paddingHorizontal: baseStyle.paddingHorizontal(15),
        borderRadius: baseStyle.borderRadius(16),
        marginBottom: baseStyle.marginBottom(15),
    },
    flex: { flexDirection: 'row', justifyContent: 'space-between' },
    reviewer: {
        opacity: 1,
        fontFamily: theme.font.bold,
        marginBottom: baseStyle.marginBottom(10),
    },
    starIcon: {
        width: baseStyle.width(15),
        height: baseStyle.height(15),
        resizeMode: 'contain',
    },
    date: { marginTop: baseStyle.marginTop(10) },
    footer: {
        borderTopLeftRadius: baseStyle.borderTopLeftRadius(32),
        borderTopRightRadius: baseStyle.borderTopRightRadius(32),
        paddingVertical: baseStyle.paddingVertical(18),
        paddingHorizontal: baseStyle.paddingHorizontal(18),
        backgroundColor: theme.colors.white,
        shadowOffset: {
            width: 0,
            height: -5,
        },
        shadowOpacity: 1,
        elevation: 5,
        shadowColor: theme.colors.silver,
        shadowRadius: 6,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
    },
    input: {
    width: baseStyle.width(80),
    height: baseStyle.height(5.5),
    fontSize: baseStyle.height(1.5),
    color: theme.colors.black,
    backgroundColor: theme.colors.white,
    alignSelf: 'center',
    margin: 0,
    padding: 0,
    },
    modalButtonContainer: {
        flexDirection: 'row',
        marginTop: baseStyle.marginTop(3.5),
        paddingHorizontal: baseStyle.paddingHorizontal(10),
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%',
    },
});