import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, SafeAreaView } from "react-native";


export default function Item({ curso }) {
  const [CursoData, setCursoData] = useState([]);

  useEffect(() => {
    setCursoData(curso);
  }, [curso]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerForma}>
        <Text style={styles.titulo}>Formação</Text>
        {CursoData &&
          CursoData.map((c, i) => (
            <View style={styles.item1} key={i}>
              <View>
                <Text style={styles.tItem1}>{c.titulo}</Text>
                <Text style={styles.cItem1}>{c.curso}</Text>
                <Text style={styles.cItem1}>{c.duracao}</Text>
              </View>
              <Image source={c.imgUrl} style={styles.img1} />
            </View>
          ))}
      </View>
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
  containerForma: {
    width: "95%",
    height: "50%",
    marginTop: 2,
    borderRadius: 30,
    backgroundColor: "#005E42",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  titulo: {
    fontSize: 26,
    paddingLeft: 21,
    paddingTop: 15,
    color: "#FCEEEE",
  },
  item1: {
    marginTop: 10,
    backgroundColor: "#3D8D75",
    width: "85%",
    height: "16%",
    alignSelf: "center",
    borderColor: "rgba(255, 255, 255, 0.5)",
    borderWidth: 2,
    borderRadius: 20,
    flexDirection: "row",
  },
  tItem1: {
    fontSize: 14,
    color: "#FCEEEE",
    width: "42%",
    textAlign: "center",
    backgroundColor: "#D33928",
    borderRadius: 20,
    margin: 16,
  },
  cItem1: {
    fontSize: 10,
    color: "#FCEEEE",
    width: "42%",
    textAlign: "left",
    marginLeft: 6,
  },
  img1: {
    width: 100,
    height: 60,
    alignSelf: "flex-end",
  },
  nome: {
    fontSize: 24,
  },
});