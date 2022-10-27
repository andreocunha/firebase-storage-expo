import { View, Text, ScrollView, Image } from "react-native";
import { Cabecalho } from "../../componentes/Cabecalho";
import { Input } from "../../componentes/Input";
import estilos from "./estilos";

import image1 from "../../assets/img1.png"
import image2 from "../../assets/img2.png"

export default function Principal() {
    const data = [
        {
            id: 1,
            image: image1,
        },
        {
            id: 2,
            image: image2,
        }
    ];

    return (
        <View style={estilos.container}>
            <Cabecalho />
            <Input placeholder="O que você procura?" />
            <ScrollView style={estilos.scroll}>
                <Text style={estilos.texto}>Busque por tags</Text>

                {data.map((item) => (
                    <Image key={item.id} source={item.image} style={estilos.imagem} />
                ))}
            </ScrollView>
        </View>
    );
}
