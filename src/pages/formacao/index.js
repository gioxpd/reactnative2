import React from "react";
import Item from "../../components/Item";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

// nativeBase e UIKitten

export default function Formacao() {
  const curso = [
    {
      titulo: "Embarque digital",
      curso: "Graduação em Análise e Desenvolvimento de Sistemas - Senac",
      duracao: "Mar/2023 - Jul/2025",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <Item curso={curso} />

      <StatusBar style="auto"/>
    </SafeAreaView>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCEEEE",
    alignItems: "center",
    justifyContent: "flex-start",
  },
})