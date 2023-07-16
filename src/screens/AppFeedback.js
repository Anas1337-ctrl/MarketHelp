import React from "react";
import { WebView } from "react-native-webview";


export const AppFeedback = () => {
    return (
    <WebView
    source={{ uri: 'https://docs.google.com/forms/d/e/1FAIpQLSfTo3IezK8EwWHEfiJNBf2n33Ly8nb_JM55MZblVaYJ9C7nwg/viewform?usp=sf_link' }}
    style={{ marginTop: 20 }}
  />
    )
};