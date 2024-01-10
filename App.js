import { StyleSheet, SafeAreaView, StatusBar } from "react-native";

import Card from './src/componentes/Card';

const produtos = [
  {
    nome: "Laranja",
    preco: 3.56,
    imagem: "https://images.pexels.com/photos/691166/pexels-photo-691166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
  },
  {
    nome: "Banana",
    preco: 7.12,
    imagem: "https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
]


export default function App() {
  return (
    <SafeAreaView style={estilos.container}>
      {produtos.map(produto => <Card nome={produto.nome} preco={produto.preco} imagem={produto.imagem} />)} 

      <StatusBar style="auto"/>
    </SafeAreaView>    
  )
}

  const estilos = StyleSheet.create ({
    container: {
      flex: 1
    },
  })
