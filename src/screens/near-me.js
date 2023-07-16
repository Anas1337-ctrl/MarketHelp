import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {  Carousal, Heading, Input, List, Map, Image } from '../components';
import { baseStyle, routes, theme } from '../config';
import axios from 'axios';

export const NearMe = () => {

  const [responseData, setResponseData] = useState(undefined);
  const [searchData, setSearchData] = useState([]);
  const [search, setSearch] = useState('');
  const [markerCoordinate, setMarkerCoordinate] = useState({ latitude: 24.83959, longitude: 67.08204, });


  const getAPIData = async () => {
    try {
      const url = "https://903f-202-47-60-211.ngrok-free.app/listing";
      let result = await fetch(url);
      result = await result.json();
      return result;
    } catch (error) {
      console.log(`error`)
      console.error(error)
    }
  }
  useState(async () => {
    // const data = await getAPIData();
    // setData(data);
    try {
      const url = "https://6817-119-157-84-217.ngrok-free.app/listing";
      let result = await fetch(url);
      result = await result.json();
      setResponseData(result.data);
      setSearchData(result.data);
    } catch (error) {
      console.log(`error`)
      console.error(error)
    }
  })

  console.log(responseData)

  const onSearch = (text) => {
    setSearch(text);
    const filteredData = responseData.filter((item) =>
      item.listing_area.toUpperCase().includes(text.toUpperCase())
    );
    setSearchData(filteredData);
    console.log(filteredData);
    if (filteredData.length > 0) {
      setMarkerCoordinate({
        latitude: parseFloat(filteredData[0].listing_latitude),
        longitude: parseFloat(filteredData[0].listing_longitude),
      });
    }
    if (text == ""){
      setMarkerCoordinate({
        latitude: 24.83959,
        longitude: 67.08204,
      });
    }
};

  // const handleSearchResult = () =>{
  //    setMarkerCoordinate(searchData.listing_latitude, searchData.listing_longitude);
  // }


  // axios.get('https://31bc-119-157-84-10.ngrok-free.app/listing')
  // .then(response=> {
  //   //Handle success
  //   console.log(response.data);
  // })
  // .catch(error => {
  //   console.log(error)
  // });

  // useEffect(() => {
  //   axios.get('https://31bc-119-157-84-10.ngrok-free.app/listing')
  //     .then(response => {
  //       // Handle success
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       // Handle error
  //       console.log(error);
  //     });
    
    
  //   }, []);

  // console.log("dasdadsa");
  // console.log(responseData);
  // return false;
  // const data = {"success":true,"data":[{"id":2,"listing_title":"Zahid Nehari","listing_description":"test test test","listing_category":"Food","listing_area":"Saddar","listing_location":"Saddar"},{"id":1,"listing_title":"Zahid Nehari","listing_description":"test test test","listing_category":"Food","listing_area":"Saddar","listing_location":"Saddar"}],"message":"Data Found"};

  const [carousalView, setCarousalView] = useState(true);
  const navigation = useNavigation();

  const toogleView = () => {
    setCarousalView(!carousalView);
  };

  const navigationHandler = (data) => {
    navigation.navigate(routes.VENUE_PROFILE, data);
  };
  //console.log(responseData);
  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.container}>
      <View style={styles.mapContainer}>
        <Map width="100%" height="100%" markerCoordinate={markerCoordinate} />
        <Input placeholder="Search area"
        placeholderTextColor="#aaaaaa"
        style={styles.input}
        value={search}
        onChangeText={text=>
          onSearch(text)
        } />
      </View>
      <View style={styles.headingContainer}>
        <Heading style={styles.heading}>Things To Do</Heading>
        <TouchableOpacity onPress={toogleView}>
          <Heading style={{ ...styles.heading, color: theme.colors.blue }}>
            {carousalView ? 'List View' : 'Carousel View'}
          </Heading>
        </TouchableOpacity>
      </View>
      {carousalView ? (
        <Carousal data={searchData} onPress={navigationHandler} />

      ) : (
        <List data={searchData} onPress={navigationHandler} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: baseStyle.paddingHorizontal(10),
  },
  mapContainer: {
    width: '100%',
    height: (Dimensions.get('window').height * 50) / 100,
  },
  input: {
    position: 'absolute',
    top: 20,
    width: '100%',
    alignSelf: 'center',
    paddingLeft: baseStyle.paddingLeft(15),
    backgroundColor: theme.colors.lightGrey,
    color: theme.colors.black,
  },
  heading: {
    fontSize: baseStyle.fontSize(14),
    lineHeight: baseStyle.lineHeight(17),
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: baseStyle.marginTop(20),
  },
});
