import React from 'react';
import {StyleSheet} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {baseStyle} from '../config';

export const Map = ({width, height, markerCoordinate, style}) => {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={[styles.map, {width, height, ...style}]}
      region={{
        latitude: markerCoordinate.latitude,
        longitude: markerCoordinate.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
      zoomEnabled
      loadingEnabled
      >
        <Marker coordinate={markerCoordinate}/>
      </MapView>
    
  );
};

const styles = StyleSheet.create({
  map: {
    borderRadius: baseStyle.borderRadius(24),
  },
});
