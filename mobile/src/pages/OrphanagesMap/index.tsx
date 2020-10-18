import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from "react-native-maps";
import { Feather } from "@expo/vector-icons";
import mapMarker from "../../assets/images/map_marker.png";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function OrphanagesMap() {
  const navigation = useNavigation();

  function handleNavigationToOrphanageDetails() {
    navigation.navigate("OrphanageDetails");
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -27.1129685,
          longitude: -52.6041486,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        <Marker
          icon={mapMarker}
          coordinate={{
            latitude: -27.1129685,
            longitude: -52.6041486,
          }}
          calloutAnchor={{
            x: 2.7,
            y: 0.8,
          }}
        >
          <Callout tooltip onPress={() => handleNavigationToOrphanageDetails()}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Lar das meninas</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>2 orfanatos encontrados</Text>
        <TouchableOpacity style={styles.createOrphanageButton}>
          <Feather name="plus" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
