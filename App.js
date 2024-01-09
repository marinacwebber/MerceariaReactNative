import { StyleSheet, SafeAreaView, StatusBar, Button } from "react-native";

import Card from './src/componentes/Card';


export default function App() {
  return (
    <SafeAreaView style={estilos.container}>
      <Card nome={"Morango"} preco={"R$12,50"} />
      <StatusBar style="auto"/>
    </SafeAreaView>    
  )
}

  const estilos = StyleSheet.create ({
    container: {
      flex: 1
    },
  })
