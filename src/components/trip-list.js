import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {baseStyle, theme, images} from '../config';
import {Heading} from './heading';
import {Paragraph} from './paragraph';

export const TripList = ({data, style, onPress, showTime, ...restProps}) => {
  return (
    <FlatList
      {...restProps}
      style={[style]}
      data={data}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => (
        <TouchableOpacity onPress={onPress}>
          <View style={styles.container}>
            <Image source={item.img} resizeMode="cover" style={styles.img} />
            <View style={styles.desc}>
              {showTime && (
                <Heading
                  style={{...styles.remainingTime, color: theme.colors.green}}>
                  {item.remainingTime}
                </Heading>
              )}
              <Heading
                style={
                  !showTime
                    ? styles.heading
                    : {...styles.remainingTime, color: theme.colors.black}
                }>
                {item.name}
              </Heading>
              <View
                style={
                  showTime
                    ? {
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }
                    : {flexDirection: 'column'}
                }>
                <View style={styles.flex}>
                  <Image
                    source={images.pinIcon}
                    resizeMode="contain"
                    style={{...styles.icon, tintColor: theme.colors.black}}
                  />
                  <Paragraph style={styles.para}>{item.location}</Paragraph>
                </View>

                <View style={styles.flex}>
                  <Image
                    source={images.starIcon}
                    resizeMode="contain"
                    style={styles.icon}
                  />
                  <Paragraph
                    style={styles.para}>{`${item.rating} rating`}</Paragraph>
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
    height: baseStyle.height(70),
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
    flex: 2,
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
