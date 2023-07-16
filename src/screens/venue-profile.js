import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Wrapper} from '../components';
import {baseStyle, images, routes, theme} from '../config';
import axios from 'axios';
import { Linking } from 'react-native';
export const VenueProfile = ({ route, __navigation }) => {

  const { item } = route.params;
  console.log('My item',item);

  const [responseData, setResponseData] = React.useState();


  React.useEffect(() => {
    axios.get(`https://6817-119-157-84-217.ngrok-free.app/listing/${item.id}`)
      .then(response => {
        // Handle success
        console.log(response.data);
        setResponseData(response.data);
      })
      .catch(error => {
        // Handle error
        console.log(error);
      });
    
    
    }, []);

    
    const navigation = useNavigation();

    const handleLinkPress = async () => {
      const url = `${item.listing_location}`; // Replace with your desired URL
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        await Linking.openURL(url);
      } else {
        console.log("Don't know how to open URL: ", url);
      }
    };

  return (
    <>
      <Wrapper>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image resizeMode="contain" source={images.back} />
          </TouchableOpacity>
          <Text style={styles.headerLabel}>Listing Detail</Text>
        </View>
        <ScrollView>
          <Image source={{uri: item.listing_image}} style={styles.img} resizeMode="cover" />
          <View style={styles.detail}>
            <Text style={styles.title}>{item.listing_title}</Text>
            <View style={styles.flex}>
              <Text style={styles.small}>{item.listing_category}</Text>
              <View
                style={{
                  ...styles.flex,
                  marginLeft: baseStyle.marginLeft(30),
                }}>
                <Image
                  source={images.starIcon}
                  resizeMode="contain"
                  style={[styles.icon]}
                />
                <Text style={styles.small}>{item.listing_rating}</Text>
              </View>
            </View>
            <View
              style={{
                ...styles.flex,
                marginVertical: baseStyle.marginVertical(7),
              }}>
              <Image
                source={images.clockIcon}
                resizeMode="contain"
                style={{...styles.icon, tintColor: theme.colors.black}}
              />
              <Text style={styles.small}>Open until {item.listing_time}PM</Text>
            </View>
            <View style={styles.flex}>
              {/* <View style={styles.flex}>
                <Image
                  source={images.clockIcon}
                  resizeMode="contain"
                  style={{...styles.icon, tintColor: theme.colors.black}}
                />
                <Text style={styles.small}>3.1 mi</Text>
              </View> */}

              <View
                style={{...styles.flex, marginLeft: baseStyle.marginLeft(0)}}>
                <Image
                  source={images.pinIcon}
                  resizeMode="contain"
                  style={{...styles.icon, tintColor: theme.colors.black}}
                />
                <Text style={styles.small}>{item.listing_area}</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate(routes.REVIEWS, {item:item})}>
            <View style={styles.reviewContainer}>
              <View style={styles.review}>
                <Image source={images.pearl} style={styles.reviewIcon} />
                <Text style={{...styles.reviewText, color: "#aaaaaa"}}>Reviews</Text>
              </View>
              <Image source={images.forward} style={styles.reviewIcon} />
            </View>
          </TouchableOpacity>

          <Text style={[styles.small, styles.desc]}> Description</Text>
            <ScrollView>
            <Text style={styles.small}>
                {item.listing_description}
            </Text>
            </ScrollView>
        </ScrollView>

        <View style={styles.footer}>
          <Button style={styles.btn} onPress={handleLinkPress}>
            Locate on Map
          </Button>
        </View>
      </Wrapper>

    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLabel: {
    fontFamily: theme.font.bold,
    fontSize: baseStyle.fontSize(16),
    lineHeight: baseStyle.lineHeight(19),
    color: theme.colors.black,
    textAlign: 'center'
  },
  img: {height: baseStyle.height(160), width: '100%'},
  detail: {paddingHorizontal: baseStyle.paddingHorizontal(10)},
  title: {
    fontSize: baseStyle.fontSize(18),
    lineHeight: baseStyle.lineHeight(22),
    fontFamily: theme.font.bold,
    color: theme.colors.black,
    marginVertical: baseStyle.marginVertical(5),
  },
  small: {
    color: theme.colors.black,
    fontSize: baseStyle.fontSize(14),
    lineHeight: baseStyle.lineHeight(17),
    opacity: 0.5,
    fontFamily: theme.font.regular,
    marginLeft: baseStyle.marginLeft(5),
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: baseStyle.marginRight(3),
    width: baseStyle.width(12),
    height: baseStyle.height(12),
  },
  reviewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: baseStyle.paddingVertical(15),
    paddingHorizontal: baseStyle.paddingHorizontal(15),
    backgroundColor: theme.colors.lightGrey,
    borderRadius: baseStyle.borderRadius(16),
    marginBottom: baseStyle.marginBottom(20),
  },
  review: {flexDirection: 'row'},
  reviewText: {
    fontSize: baseStyle.fontSize(13),
    lineHeight: baseStyle.lineHeight(16),
    marginLeft: baseStyle.marginLeft(15),
    
  },
  reviewIcon: {
    resizeMode: 'contain',
    alignItems: 'center',
    height: baseStyle.height(20),
    width: baseStyle.width(20),
  },
  desc: {
    marginTop: baseStyle.marginTop(10),
    marginBottom: baseStyle.marginBottom(10),
    opacity: 1,
  },
  footer: {
    borderTopLeftRadius: baseStyle.borderTopLeftRadius(32),
    borderTopRightRadius: baseStyle.borderTopRightRadius(32),
    position: 'absolute',
    bottom: 0,
    width: '100%',
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
});
