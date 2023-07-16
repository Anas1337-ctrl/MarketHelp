import React from 'react';
import {
  View,
  Modal,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
} from 'react-native';
import {baseStyle, images, theme} from '../config';
import {Button} from './button';
import {Wrapper} from './wrapper';

export const TripSuccessModal = ({visible, onRequestClose}) => {
  return (
    <Modal
      animationType="fade"
      visible={visible}
      transparent={true}
      onRequestClose={onRequestClose}>
      <Wrapper style={styles.container}>
        <View style={styles.modal}>
          <Text style={styles.heading}>Success!</Text>
          <Text style={styles.para}>
            Your reservation has been placed successfully. Please use this
            e-receipt for claiming your reservation at the venue.
          </Text>

          <View style={styles.body}>
            <ImageBackground
              style={styles.img}
              source={images.humans}
              resizeMode="stretch">
              <View style={styles.imgContainer}>
                <Text style={styles.imgHeading}>Mann - Cartwright Dine</Text>
                <Text style={styles.imgPara}>2535 Wunsch Stream</Text>
              </View>
            </ImageBackground>
            <Text style={styles.para}>Reservation ID:</Text>
            <View style={styles.reservation}>
              <Text style={styles.reservationId}>X48A36BP</Text>
            </View>

            <View style={styles.reservationDate}>
              <Text style={styles.para}>Reservation Date:</Text>
              <Text style={styles.date}>Saturday, September 12, 2021</Text>
            </View>

            <View style={styles.venue}>
              <View style={styles.rowNumber}>
                <Text style={styles.number}>1</Text>
              </View>
              <View style={styles.venueDetail}>
                <Text style={styles.venueTitle}>Mann - Cartwright Dine</Text>
                <View style={styles.flex}>
                  <View style={styles.flex}>
                    <Image source={images.clockIcon} style={styles.icon} />
                    <Text style={styles.venueTime}>From 7AM to 9Pm</Text>
                  </View>

                  <View
                    style={{
                      ...styles.flex,
                      marginLeft: baseStyle.marginLeft(10),
                    }}>
                    <Image source={images.clockIcon} style={styles.icon} />
                    <Text style={styles.venueTime}>2535 Wunsch Stream</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.btnContainer}>
              <Button
                danger
                type="outlined"
                style={styles.btn}
                onPress={onRequestClose}>
                Close
              </Button>
              <Button style={styles.btn}>Download E-Receipt</Button>
            </View>
          </View>
        </View>
      </Wrapper>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: theme.colors.white,
    borderRadius: baseStyle.borderRadius(32),
    paddingVertical: baseStyle.paddingVertical(10),
    paddingHorizontal: baseStyle.paddingHorizontal(15),
    width: '90%',
    shadowColor: theme.colors.darkSilver,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 6,
    elevation: 5,
    shadowOpacity: 1,
  },
  heading: {
    fontFamily: theme.font.bold,
    fontSize: baseStyle.fontSize(16),
    lineHeight: baseStyle.lineHeight(19),
    marginBottom: baseStyle.marginBottom(20),
    textAlign: 'center',
    color: theme.colors.blackSecondary,
  },
  para: {
    fontFamily: theme.font.regular,
    fontSize: baseStyle.fontSize(12),
    lineHeight: baseStyle.lineHeight(15),
    textAlign: 'center',
    color: theme.colors.blackSecondary,
  },

  body: {
    backgroundColor: theme.colors.lightGrey,
    marginTop: baseStyle.marginTop(10),
    paddingBottom: baseStyle.paddingBottom(10),
    paddingHorizontal: baseStyle.paddingHorizontal(5),
    marginBottom: baseStyle.marginBottom(10),
  },
  img: {
    borderRadius: baseStyle.borderRadius(12),
    marginBottom: baseStyle.marginBottom(15),
  },

  imgContainer: {
    paddingTop: baseStyle.paddingTop(85),
    alignItems: 'center',
    paddingBottom: baseStyle.paddingBottom(10),
    borderRadius: baseStyle.borderRadius(12),
  },

  imgHeading: {
    fontFamily: theme.font.bold,
    fontSize: baseStyle.fontSize(14),
    lineHeight: baseStyle.lineHeight(17),
    color: theme.colors.white,
  },
  imgPara: {
    fontFamily: theme.font.light,
    fontSize: baseStyle.fontSize(10),
    lineHeight: baseStyle.lineHeight(12),
    color: theme.colors.white,
    marginTop: baseStyle.marginTop(5),
  },

  reservation: {
    borderRadius: baseStyle.borderRadius(12),
    backgroundColor: theme.colors.blue,
    opacity: 0.3,
    paddingVertical: baseStyle.paddingVertical(10),
    marginBottom: baseStyle.marginBottom(15),
  },
  reservationId: {
    color: theme.colors.black,
    fontSize: baseStyle.fontSize(24),
    lineHeight: baseStyle.lineHeight(29),
    opacity: 1,
    fontFamily: theme.font.regular,
    textAlign: 'center',
  },
  reservationDate: {
    paddingVertical: baseStyle.paddingVertical(10),
    alignItems: 'center',
    borderTopColor: theme.colors.black,
    borderTopWidth: baseStyle.borderWidth(1),
  },
  date: {
    fontFamily: theme.font.regular,
    fontSize: baseStyle.fontSize(16),
    lineHeight: baseStyle.lineHeight(19),
    textAlign: 'center',
    color: theme.colors.blackSecondary,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  venue: {
    backgroundColor: theme.colors.lightBlue,
    paddingVertical: baseStyle.paddingVertical(3),
    paddingRight: baseStyle.paddingRight(14),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: baseStyle.borderRadius(15),
    marginTop: baseStyle.marginTop(8),
  },
  rowNumber: {
    width: baseStyle.width(30),
    height: baseStyle.height(30),
    backgroundColor: theme.colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: baseStyle.borderRadius(30 / 2),
    borderColor: theme.colors.lightGrey,
    borderWidth: baseStyle.borderWidth(2),
    marginRight: baseStyle.marginRight(9),
  },
  number: {
    color: theme.colors.white,
    fontSize: baseStyle.fontSize(16),
    lineHeight: baseStyle.lineHeight(19),
    fontFamily: theme.font.bold,
  },
  venueTitle: {
    fontSize: baseStyle.fontSize(10),
    lineHeight: baseStyle.lineHeight(12),
    fontFamily: theme.font.boll,
    marginBottom: baseStyle.marginBottom(2),
  },
  venueTime: {
    fontFamily: theme.font.light,
    fontSize: baseStyle.fontSize(10),
    lineHeight: baseStyle.lineHeight(12),
  },
  icons: {
    marginRight: baseStyle.marginRight(3),
    width: baseStyle.width(9),
    height: baseStyle.height(9),
    tintColor: theme.colors.black,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: baseStyle.marginTop(30),
  },
  btn: {
    width: '47%',
  },
});
