import React from 'react';
import {Modal, View, Image, StyleSheet} from 'react-native';
import {baseStyle, images, theme} from '../config';
import {Heading} from './heading';
import {Paragraph} from './paragraph';

export const SuccessModal = ({
  visible,
  label,
  description,
  onRequestClose,
  ...restProps
}) => {
  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={onRequestClose}
      {...restProps}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <Heading center>{label}</Heading>
          <Image
            source={images.checkMark}
            resizeMode="contain"
            style={styles.img}
          />
          <Paragraph center>{description}</Paragraph>
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
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 6,
    elevation: 5,
    shadowOpacity: 1,
    height: 'auto',
  },
  img: {
    marginVertical: baseStyle.marginVertical(20),
    alignSelf: 'center',
  },
});
