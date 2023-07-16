import React from 'react';
import {View, Modal, StyleSheet} from 'react-native';
import {baseStyle, theme} from '../config';
import {Button} from './button';
import {Heading} from './heading';
import {Input} from './input';

export const PlaceReservationModal = ({
  visible,
  onRequestClose,
  rejectHandler,
  successHandler,
}) => {
  return (
    <Modal
      animationType="fade"
      visible={visible}
      transparent={true}
      onRequestClose={onRequestClose}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <Heading center style={styles.heading}>
            Place a Reservation
          </Heading>
          <Input placeholder="Date and Day" />
          <View style={styles.inputContainer}>
            <Input placeholder="Time" style={styles.input} />
            <Input placeholder="Attendence" style={styles.input} />
          </View>
          <Input placeholder="Extra Note" />
          <View style={styles.btnContainer}>
            <Button
              danger
              type="outlined"
              onPress={rejectHandler}
              style={styles.btn}>
              Close
            </Button>
            <Button onPress={successHandler} style={styles.btn}>
              Place
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: theme.colors.white,
    borderRadius: baseStyle.borderRadius(32),
    paddingVertical: baseStyle.paddingVertical(20),
    paddingHorizontal: baseStyle.paddingHorizontal(20),
    width: '80%',
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
    marginBottom: baseStyle.marginBottom(30),
  },
  inputContainer: {
    flexDirection: 'row',
    marginVertical: baseStyle.marginVertical(15),
    justifyContent: 'space-between',
  },
  input: {
    width: '48%',
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
