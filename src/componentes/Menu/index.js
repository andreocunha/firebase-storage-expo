import { View, ScrollView} from "react-native";
import { MenuBotao } from "../MenuBotao";
import estilos from "./estilos";

export function Menu({ acao, lista }) {
    return (
        <ScrollView style={estilos.container} horizontal={true} showsHorizontalScrollIndicator={false}>
            {lista.map((item) => (
                <MenuBotao key={item.id} acao={item.acao} texto={item.texto} />
            ))}
        </ScrollView>
    );
}