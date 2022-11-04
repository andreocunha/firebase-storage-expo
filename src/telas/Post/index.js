import { useState } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, Alert, Image, LayoutAnimation } from "react-native";
import { salvarPost, atualizarPost, deletarPost } from "../../servicos/firestore";
import * as ImagePicker from 'expo-image-picker';
import estilos from "./estilos";
import Icon from "react-native-vector-icons/Feather";

import uploadImageBackground from "../../assets/upload.jpeg";
import { salvarImagem, deletarImagem } from "../../servicos/storage";
import { MenuSelecaoInferior } from "../../componentes/MenuSelecaoInferior";

export default function Post({ navigation, route }) {
    const { item } = route?.params || {};
    const [titulo, setTitulo] = useState(item?.titulo || "");
    const [fonte, setFonte] = useState(item?.fonte || "");
    const [descricao, setDescricao] = useState(item?.descricao || "");
    const [imagem, setImagem] = useState(item?.imagem || "");
    const [mostrarMenu, setMostrarMenu] = useState(false);

    async function salvar() {
        const data = { titulo, fonte, descricao, imagem: imagem ? imagem : null };
        const resultado = await salvarPost(data);
        if (resultado !== "erro") {
            verificarESalvarImagem(resultado);
            navigation.goBack();
        }
        else {
            Alert.alert("Erro ao salvar");
        }
    }

    async function atualizar() {
        const data = { titulo, fonte, descricao, imagem: imagem ? imagem : null };
        const resultado = await atualizarPost(item.id, data);
        if (resultado === "ok") {
            verificarESalvarImagem(item.id);
            navigation.goBack();
        }
        else {
            Alert.alert("Erro ao atualizar");
        }
    }

    async function deletar() {
        const resultado = await deletarPost(item.id);
        if (resultado === "ok") {
            item.imagem && await deletarImagem(item.id);
            navigation.goBack();
        }
        else {
            Alert.alert("Erro ao deletar");
        }
    }

    async function verificarESalvarImagem(postId) {
        let url = null;
        if (imagem) {
            url = await salvarImagem(imagem, postId);
            atualizarPost(postId, { imagem: url });
        }
        return url;
    }

    async function selecionarImagem() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
    
        if (!result.cancelled) {
            setImagem(result.uri);
            setMostrarMenu(false);
        }
    }
    
    async function removerFoto() {
        if (imagem) {
            await deletarImagem(item?.id);
            setImagem(null);
            setMostrarMenu(false);
        }
    }

    return (
        <View style={estilos.container}>
            <View style={estilos.containerTitulo}>
                <Text style={estilos.titulo}>{item ? "Editar post" : "Novo Post"}</Text>
                {item && 
                    <TouchableOpacity onPress={deletar}>
                        <Icon name="trash-2" size={25} color="#fff" />
                    </TouchableOpacity>
                }
            </View>
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

                <TouchableOpacity
                    style={estilos.imagem}
                    onPress={() => setMostrarMenu(true)}
                >
                    <Image
                        source={imagem ? { uri: imagem } : uploadImageBackground}
                        style={estilos.imagem}
                    />
                </TouchableOpacity>
            </ScrollView>

            <TouchableOpacity style={estilos.botao} onPress={item ? atualizar : salvar}>
                <Text style={estilos.textoBotao}>Salvar</Text>
            </TouchableOpacity>

            <MenuSelecaoInferior mostrarMenu={mostrarMenu} setMostrarMenu={setMostrarMenu} >
                <TouchableOpacity style={estilos.opcao} onPress={selecionarImagem}>
                    <Text>Adicionar foto</Text>
                    <Text>  &#128247;</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.opcao} onPress={removerFoto}>
                    <Text>Remover foto</Text> 
                    <Text> 	&#128465;</Text>
                </TouchableOpacity>
            </MenuSelecaoInferior>
        </View>
    );
}