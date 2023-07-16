import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {baseStyle, theme, images, routes} from '../config';
import {Heading} from './heading';
import {Paragraph} from './paragraph';
import { useNavigation } from '@react-navigation/native';

export const List = ({data, style, showTime, onPress, ...restProps}) => {
  const navigation = useNavigation();

  return (
    <FlatList
      style={[style]}
      {...restProps}
      data={data}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate(routes.VENUE_PROFILE, {item:item})}>
          <View style={styles.container}>
            <Image source={{uri: item.listing_image}} resizeMode="cover" style={styles.img} />
            <View style={styles.desc}>
              {showTime && (
                <Heading
                  style={{
                    ...styles.remainingTime,
                    color: theme.colors.green,
                  }}>
                  {item.listing_time}
                </Heading>
              )}
              <Heading
                style={
                  !showTime
                    ? styles.heading
                    : {...styles.remainingTime, color: theme.colors.black}
                }>
                {item.listing_title}
              </Heading>
              {!showTime && (
                <View
                  style={{
                    ...styles.flex,
                    marginTop: baseStyle.marginVertical(5),
                  }}>
                  <Paragraph style={styles.para}>{item.listing_category}</Paragraph>
                  <View style={styles.flex}>
                    <Image
                      source={images.starIcon}
                      resizeMode="contain"
                      style={styles.icon}
                    />
                    <Paragraph
                      style={{
                        ...styles.para,
                      }}>{`${item.listing_rating} rating`}</Paragraph>
                  </View>
                </View>
              )}
              <View style={{...styles.flex, marginTop: baseStyle.marginTop(5)}}>
                <View style={styles.flex}>
                  <Image
                    source={images.pinIcon}
                    resizeMode="contain"
                    style={{...styles.icon, tintColor: theme.colors.black}}
                  />
                  <Paragraph style={styles.para}>{item.listing_area}</Paragraph>
                </View>
                <View style={styles.flex}>
                  <Image
                    source={images.clockIcon}
                    resizeMode="contain"
                    style={{...styles.icon, tintColor: theme.colors.black}}
                  />
                  <Paragraph style={styles.para}>{item.listing_time}</Paragraph>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: baseStyle.marginTop(10),
    height: baseStyle.height(90),
    flexDirection: 'row',
    borderRadius: baseStyle.borderRadius(8),
    backgroundColor: theme.colors.lightGrey,
  },

  img: {
    borderRadius: baseStyle.borderRadius(8),
    height: '100%',
    flex: 1,
  },

  desc: {
    paddingVertical: baseStyle.paddingVertical(10),
    paddingLeft: baseStyle.paddingLeft(15),
    paddingRight: baseStyle.paddingRight(30),
    flex: 3,
  },

  remainingTime: {
    fontSize: baseStyle.fontSize(12),
    lineHeight: baseStyle.lineHeight(15),
    marginBottom: baseStyle.marginBottom(5),
  },

  heading: {
    color: theme.colors.black,
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
    color: theme.colors.black,
    fontSize: baseStyle.fontSize(10),
    lineHeight: baseStyle.lineHeight(12),
    opacity: 0.3,
    fontFamily: theme.font.bold,
  },

  icon: {
    marginRight: baseStyle.marginRight(3),
  },
});
