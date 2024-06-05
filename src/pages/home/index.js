import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, SafeAreaView, Image, Dimensions } from 'react-native';
// nativeBase e UIKitten

const { width, height } = Dimensions.get("window");

export default function App() {
    return (
      <SafeAreaView style={styles.container}>
        <Image source={require('../../../assets/Misc_01.png')} style={styles.star1} />
        <Image source={require('../../../assets/Misc_01.png')} style={styles.star2} />
        <Image source={require('../../../assets/Misc_04.png')} style={styles.smile} />
        <View style={styles.containerText}>
            <Text style={styles.nome}>Giovanni Cláudio</Text>
            <Text style={styles.titulo}>Estudante de Análise e Desenvolvimento de Sistemas</Text>
        </View>
        <View style={styles.containerImg}>
          <View style={styles.conteinerB}></View>
          <Image source={require('../../../assets/eu.png')} style={styles.imagem}/>
        </View>
        
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFBAD3',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 0,
  },
  star1:{
    width: 40,
    height: 40,
    position: 'absolute',
    left: "16%",
    top: "48%",
    zIndex: 8
  },
  star2:{
    width: 44,
    height: 44,
    position: 'absolute',
    right: "34%",
    top: "24%",
    zIndex: 8
  },
  smile:{
    width: 70,
    height: 70,
    position: 'absolute',
    right: "16%",
    top: "34%",
    zIndex: 8
  },
  containerText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerImg: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  conteinerB:{
    backgroundColor: '#EB5A35', 
    height: "60%",
    width: "95%",
    borderRadius: 20,
    zIndex: -8,
    position: 'absolute',
    bottom: 0
  },
  nome: {
    fontSize: 36,
    color: 'black'
  },
  titulo: {
    color: 'black',
    fontSize: 14,
    textAlign: "center"
  },
  imagem: {
    resizeMode: "cover",
    height: height * 0.6,
    width: width * 1.1,
    zIndex: 9999999999,
    
  }
});