import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import MapView from "react-native-maps";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";

// nativeBase e UIKitten

export default function App() {
  return (
    <NavigationContainer>
      <Routes />

      {/* <SafeAreaView style={styles.container}>
      <Text style={styles.nome}>Onde estou?</Text>
      <View>
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={styles.map}
        />
      </View>
    </SafeAreaView> */}
    </NavigationContainer>
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  nome: {
    fontSize: 22,
    color: "#FCEEEE",
    width: "80%",
    textAlign: "center",
    backgroundColor: "#D33928",
    borderRadius: 20,
    margin: 16,
  },
  map: {
    width: '100%',
    height: '100%',
  },
}); */