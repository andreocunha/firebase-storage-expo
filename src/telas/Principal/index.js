import { View, Text, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { Cabecalho } from "../../componentes/Cabecalho";
import { Input } from "../../componentes/Input";
import { CartaoInfo } from "../../componentes/CartaoInfo";
import { Menu } from "../../componentes/Menu";
import { NovoPostBotao } from "../../componentes/NovoPostBotao";
import { pegarPostsTempoReal } from "../../servicos/firestore";
import estilos from "./estilos";

// import image1 from "../../assets/img1.png"
// import image2 from "../../assets/img2.png"
// import image3 from "../../assets/img3.png"

export default function Principal({ navigation }) {
    const [posts, setPosts] = useState([]);
    // const data = [
    //     {
    //         id: 1,
    //         image: image1,
    //         fonte: "Telescópio Hubble",
    //         titulo: "Via Láctea",
    //         descricao: "A Via Láctea é uma galáxia espiral, da qual o Sistema Solar faz parte. Vista da Terra, aparece como uma faixa brilhante e difusa que circunda toda a esfera celeste, recortada por nuvens moleculares que lhe conferem um intrincado aspecto irregular e recortado.",
    //     },
    //     {
    //         id: 2,
    //         image: image2,
    //         fonte: "Telescópio Kepler",
    //         titulo: "Nebulosa",
    //         descricao: "Na astronomia, uma nebulosa, também conhecida como nébula, é uma nuvem interestelar de poeira e gases.",
    //     },
    //     {
    //         id: 3,
    //         image: image3,
    //         fonte: "Observatório W.M. Keck",
    //         titulo: "Lua",
    //         descricao: "A Lua é o único satélite natural da Terra e o quinto maior do Sistema Solar. É o maior satélite natural de um planeta no sistema solar em relação ao tamanho do seu corpo primário, tendo 27% do diâmetro e 60% da densidade da Terra.",
    //     },
    // ];

    useEffect(() => {
        pegarPostsTempoReal(setPosts);
    },[])

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

            <ScrollView style={estilos.scroll} showsVerticalScrollIndicator={false}>

                {posts?.map((item) => (
                    <CartaoInfo 
                        key={item.id} 
                        imagem={item.imagem}
                        titulo={item.titulo}  
                        fonte={item.fonte} 
                        descricao={item.descricao} 
                        acao={() => navigation.navigate("Post", { item })}
                    />
                ))}
            </ScrollView>

            <NovoPostBotao acao={() => navigation.navigate("Post")} />
        </View>
    );
}
