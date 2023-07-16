import React from 'react';
import {View, Modal, StyleSheet} from 'react-native';
import {baseStyle, theme} from '../config';
import {Button} from './button';
import {Heading} from './heading';
import {Input} from './input';
import {Paragraph} from './paragraph';

export const ConfirmTripModal = ({visible, onRequestClose, successHandler}) => {
  return (
    <Modal
      animationType="fade"
      visible={visible}
      transparent={true}
      onRequestClose={onRequestClose}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <Heading center style={styles.heading}>
            Plan This Trip
          </Heading>
          <Paragraph>
            Select a date to place reservations for this trip.
          </Paragraph>
          <Input placeholder="Date $ Day" style={styles.input} />
          <View style={styles.btnContainer}>
            <Button
              danger
              type="outlined"
              onPress={onRequestClose}
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

  input: {
    marginVertical: baseStyle.marginVertical(30),
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btn: {
    width: '47%',
  },
});
