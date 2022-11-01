import { useState } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, Alert } from "react-native";
import { salvarPost, atualizarPost } from "../../servicos/firestore";
import estilos from "./estilos";

export default function Post({ navigation, route }) {
    const { item } = route?.params || {};
    const [titulo, setTitulo] = useState(item?.titulo || "");
    const [fonte, setFonte] = useState(item?.fonte || "");
    const [descricao, setDescricao] = useState(item?.descricao || "");

    async function salvar() {
        const data = { titulo, fonte, descricao };
        const resultado = await salvarPost(data);
        if (resultado === "ok") {
            navigation.goBack();
        }
        else {
            Alert.alert("Erro ao salvar");
        }
    }

    async function atualizar() {
        const data = { titulo, fonte, descricao };
        const resultado = await atualizarPost(item.id, data);
        if (resultado === "ok") {
            navigation.goBack();
        }
        else {
            Alert.alert("Erro ao atualizar");
        }
    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>{item ? "Editar post" : "Novo Post"}</Text>
            <ScrollView style={{ width: "100%" }}>
                <Text style={estilos.texto}>Título</Text>
                <TextInput
                    style={estilos.input}
                    placeholder="Título"
                    value={titulo}
                    onChangeText={setTitulo}
                />

                <Text style={estilos.texto}>Fonte</Text>
                <TextInput
                    style={estilos.input}
                    placeholder="Fonte"
                    value={fonte}
                    onChangeText={setFonte}
                />

                <Text style={estilos.texto}>Descrição</Text>
                <TextInput
                    style={[estilos.input, estilos.inputDescricao]}
                    placeholder="Descrição"
                    value={descricao}
                    onChangeText={setDescricao}
                    multiline
                />
            </ScrollView>

            <TouchableOpacity style={estilos.botao} onPress={item ? atualizar : salvar}>
                <Text style={estilos.textoBotao}>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
}