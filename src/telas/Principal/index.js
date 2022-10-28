import { View, Text, ScrollView, Image } from "react-native";
import { Cabecalho } from "../../componentes/Cabecalho";
import { Input } from "../../componentes/Input";
import { CartaoInfo } from "../../componentes/CartaoInfo";
import estilos from "./estilos";

import image1 from "../../assets/img1.png"
import image2 from "../../assets/img2.png"
import image3 from "../../assets/img3.png"
import { Menu } from "../../componentes/Menu";

export default function Principal() {
    const data = [
        {
            id: 1,
            image: image1,
            fonte: "Telescópio Hubble",
            nome: "Via Láctea",
            descricao: "A Via Láctea é uma galáxia espiral, da qual o Sistema Solar faz parte. Vista da Terra, aparece como uma faixa brilhante e difusa que circunda toda a esfera celeste, recortada por nuvens moleculares que lhe conferem um intrincado aspecto irregular e recortado.",
        },
        {
            id: 2,
            image: image2,
            fonte: "Telescópio Kepler",
            nome: "Nebulosa",
            descricao: "Na astronomia, uma nebulosa, também conhecida como nébula, é uma nuvem interestelar de poeira e gases.",
        },
        {
            id: 3,
            image: image3,
            fonte: "Observatório W.M. Keck",
            nome: "Lua",
            descricao: "A Lua é o único satélite natural da Terra e o quinto maior do Sistema Solar. É o maior satélite natural de um planeta no sistema solar em relação ao tamanho do seu corpo primário, tendo 27% do diâmetro e 60% da densidade da Terra.",
        },
    ];

    return (
        <View style={estilos.container}>
            <Cabecalho />
            <Input placeholder="O que você procura?" />

            <Text style={estilos.texto}>Busque por tags</Text>
            <Menu 
             lista={
                [
                    { id: 1, texto: "Todas", acao: () => console.log("Todas") },
                    { id: 2, texto: "Lua", acao: () => console.log("Lua") },
                    { id: 3, texto: "Nebulosa", acao: () => console.log("Nebulosa") },
                    { id: 4, texto: "Via Láctea", acao: () => console.log("Via Láctea") },
                    { id: 5, texto: "Galáxia", acao: () => console.log("Galáxia") },
                ]
             }
            />

            <ScrollView style={estilos.scroll}>

                {data.map((item) => (
                    // <Image key={item.id} source={item.image} style={estilos.imagem} />
                    <CartaoInfo key={item.id} imagem={item.image} fonte={item.fonte} nome={item.nome} descricao={item.descricao} />
                ))}
            </ScrollView>
        </View>
    );
}
