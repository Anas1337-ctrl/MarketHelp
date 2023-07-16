import React, {useState, useEffect}from 'react';
import {
  FlatList,
  ImageBackground,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import { Paragraph } from './paragraph';
import { Heading } from './heading';
import { baseStyle, images, theme, routes } from '../config';
import { useNavigation } from '@react-navigation/native';

export const Carousal = ({ data, style, onPress }) => {
  const navigation = useNavigation();

    // const [imageUri, setImageUri] = useState(null);
  
    // useEffect(() => {
    //   fetchImage();
    // }, []);
  
    // const fetchImage = async () => {
    //   try {
    //     const response = await fetch (`$item.listing_image`); // Replace with your image URI
    //     const blob = await response.blob();
    //     const uri = URL.createObjectURL(blob);
    //     setImageUri(uri);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };


  return (
    // data.length > 0
    // ?
    <FlatList
      horizontal
      style={style}
      data={data}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate(routes.VENUE_PROFILE, {item:item})}>
          <ImageBackground
            source={{uri: item.listing_image}}
            style={styles.flatList}
            resizeMode="contain">
            <Heading style={styles.heading}>{item.listing_title}</Heading>
            <View
              style={{
                ...styles.flex,
                marginVertical: baseStyle.marginVertical(5),
              }}>
              <Paragraph style={styles.para}>{item.listing_area}</Paragraph>
              <View style={styles.flex}>
                <Image
                  style={{...styles.img, tintColor: theme.colors.white}}
                  source={images.starIcon}
                  resizeMode="contain"
                />
                <Paragraph style={styles.para}>{item.listing_rating}</Paragraph>
              </View>
            </View>
            <View style={styles.flex}>
              <View style={styles.flex}>
                <Image
                  style={{...styles.img, tintColor: theme.colors.white}}
                  source={images.pinIcon}
                  resizeMode="contain"
                />
                <Paragraph style={styles.para}>{item.listing_category}</Paragraph>
              </View>
              <View style={styles.flex}>
                <Image
                  style={{...styles.img,tintColor: theme.colors.white}}
                  source={images.clockIcon}
                  resizeMode="contain"
                />
                <Paragraph style={styles.para}>{item.listing_time}</Paragraph>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      )}
    />
    // :
    // <Text style={styles.flex}> No Record Found </Text>
  );
};

const styles = StyleSheet.create({
  flatList: {
    paddingTop: baseStyle.paddingTop(84),
    paddingLeft: baseStyle.paddingLeft(15),
    paddingBottom: baseStyle.paddingBottom(15),
    paddingRight: baseStyle.paddingRight(44),
    marginVertical: baseStyle.marginVertical(10),
    marginRight: baseStyle.marginRight(10),
    width: baseStyle.width(315),
    height:200,
  },
  heading: {
    color: theme.colors.white,
    alignItems: 'center',
    fontSize: baseStyle.fontSize(14),
    lineHeight: baseStyle.lineHeight(17),
    opacity: 1,
    fontFamily: theme.font.bold,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  para: {
    color: theme.colors.white,
    fontSize: baseStyle.fontSize(10),
    lineHeight: baseStyle.lineHeight(12),
    opacity: 1,
    fontFamily: theme.font.bold,
  },
  img: {
    marginRight: baseStyle.marginRight(3),
  },
  imagee: {
    width: '100%',
    height: '100%',
    flex: 1,
  }
});