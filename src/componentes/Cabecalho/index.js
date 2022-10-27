import { View, TouchableOpacity, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import estilos from "./estilos";

export function Cabecalho({ acao }) {
    return (
        <View style={estilos.container}>
            <TouchableOpacity onPress={acao}>
                <Icon name="bell" size={30} color="#FFF" />
            </TouchableOpacity>
            <Image source={require("../../assets/logo.png")} />
        </View>
    );
}