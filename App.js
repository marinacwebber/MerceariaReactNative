import { StyleSheet, SafeAreaView, StatusBar } from "react-native";

import Card from './src/componentes/Card';

const produtos = [
  {
    id: 1,
    nome: "Laranja",
    preco: 3.56,
    imagem: "https://images.pexels.com/photos/691166/pexels-photo-691166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    estoque: 30 
  },
  {
    id: 2,
    nome: "Banana",
    preco: 7.12,
    imagem: "https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    estoque: 10
  },
  {
    id: 3,
    nome: "Chocolate",
    preco: 5.00,
    imagem: "https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    estoque: 50
  }
]


export default function App() {
  return (
    <SafeAreaView style={estilos.container}>
      {produtos.map(produto => <Card key={produto.id} nome={produto.nome} preco={produto.preco} imagem={produto.imagem} estoque={produto.estoque}/>)} 

      <StatusBar style="auto"/>
    </SafeAreaView>    
  )
}

  const estilos = StyleSheet.create ({
    container: {
      flex: 1
    },
  })
