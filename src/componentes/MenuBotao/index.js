import { TouchableOpacity, Text } from "react-native";
import estilos from "./estilos";

export function MenuBotao({ acao, texto, selecionado=false }) {
    return (
        <TouchableOpacity onPress={acao} style={estilos.container}>
            <Text style={estilos.texto}>{texto}</Text>
        </TouchableOpacity>
    );
}