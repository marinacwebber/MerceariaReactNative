import { Text, View, StyleSheet, Image } from "react-native";

import morangos from '../../assets/morangos.jpeg';

export default function Card({nome , preco}) {
    return (
        <>
        <View style={estilos.card}>
        <Image source={morangos} style={estilos.imagem}/>
        <View>
            <Text>{ nome }</Text>
            <Text>{ preco }</Text>
        </View>
        </View>
        </>
    )
}

const estilos = StyleSheet.create ({
    imagem: {
      width: 110,
      height: 110,
    },
    card: {
        alignItems: "center",
        flexDirection: "row",
        padding: 50,
        justifyContent: "space-between",
    }
  })
