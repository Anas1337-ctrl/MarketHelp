import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';
import {baseStyle, theme, images} from '../config';

export const VenueList = ({data, style, onPress, ...restProps}) => {
  return (
    <FlatList
      {...restProps}
      style={[style]}
      data={data}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => (
        <TouchableOpacity onPress={onPress}>
          <View style={styles.container}>
            <Image source={item.img} style={styles.img} />
            <View style={styles.desc}>
              <Text style={styles.heading}>{item.name}</Text>
              <Text style={[styles.para, styles.country]}>{item.country}</Text>
              <Text style={styles.para}>
                Pariatur sit quos amet dolores occaecati laudantium. Soluta
                atque eum voluptatem cum
              </Text>
              <View style={styles.flex}>
                <Image
                  source={images.clockIcon}
                  resizeMode="contain"
                  style={styles.icon}
                />
                <Text style={[styles.para, styles.time]}>{item.time}</Text>
              </View>

              <View style={styles.flex}>
                <Image
                  source={images.pinIcon}
                  resizeMode="contain"
                  style={styles.icon}
                />
                <Text style={styles.para}>{item.location}</Text>
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
    flexDirection: 'row',
    borderRadius: baseStyle.borderRadius(8),
    backgroundColor: theme.colors.lightGrey,
    paddingVertical: baseStyle.paddingVertical(10),
    paddingHorizontal: baseStyle.paddingHorizontal(10),
  },

  img: {
    borderRadius: baseStyle.borderRadius(8),
    height: '100%',
    flex: 1,
  },

  desc: {
    marginLeft: baseStyle.marginLeft(10),
    flex: 3,
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
    fontFamily: theme.font.light,
  },
  country: {
    marginVertical: baseStyle.marginVertical(5),
  },

  time: {
    marginVertical: baseStyle.marginVertical(5),
  },

  icon: {
    marginRight: baseStyle.marginRight(3),
    tintColor: theme.colors.black,
    marginRight: baseStyle.marginRight(5),
    width: baseStyle.width(9),
    height: baseStyle.height(9),
  },
});
