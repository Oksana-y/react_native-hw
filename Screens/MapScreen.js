import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { PROVIDER_GOOGLE } from "react-native-maps";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function MapScreen() {
  const {
    params: { placeLocation },
  } = useRoute();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        provider={PROVIDER_GOOGLE}
        region={{
          ...placeLocation,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      >
        {place && <Marker title="I am here" coordinate={place} />}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});