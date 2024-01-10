import { StyleSheet, SafeAreaView, StatusBar } from "react-native";

import Card from './src/componentes/Card';


export default function App() {
  return (
    <SafeAreaView style={estilos.container}>
      <Card nome={"Morango Orgânico"} preco={"R$12,50"} imagem={"https://images.pexels.com/photos/6944172/pexels-photo-6944172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} />
      <StatusBar style="auto"/>
    </SafeAreaView>    
  )
}

  const estilos = StyleSheet.create ({
    container: {
      flex: 1
    },
  })
