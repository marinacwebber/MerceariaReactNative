import { Text, View, StyleSheet, Image, Button } from "react-native";

export default function Card({nome , preco, imagem}) {
    return (
        <>
        <View style={estilos.container}>
            <View style={estilos.card}>
                <Image source={{uri: imagem}} style={estilos.imagem}/>
            <View style={estilos.textoCard}>
                <Text style={estilos.textoNome}>{ nome }</Text>
                <Text style={estilos.textoPreco}>R$ { preco.toFixed(2) }</Text>
            </View>
            </View>
            <Button title="Comprar"/>
        </View>
        </>
    )
}

const estilos = StyleSheet.create ({
    container: {        
      padding: 10,
      backgroundColor: "#eee",
      elevation: 10,
      marginHorizontal: 10,
      marginVertical: 5,
    },
    card: {
      flexDirection: "row",        
      justifyContent: "flex-start",      
      paddingBottom: 12,
    },
    imagem: {
      width: 100,
      height: 100,
    },
    textoCard: {
      paddingHorizontal: 30, 
    },
    textoNome: {
      fontWeight: "bold" ,
      fontSize: 18 
    },
    textoPreco: {
      fontSize: 18,
      color: "red",
    },
  })
