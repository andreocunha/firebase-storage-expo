import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    imagem: {
        width: "100%",
        height: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    containerTexto: {
        flexDirection: "column",
        width: "100%",
        minHeight: 80,
        backgroundColor: "#041833",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        paddingHorizontal: 20,
    },
    textoNome: {
        color: "#D9D9D9",
        fontSize: 20,
        fontWeight: "600",
        marginVertical: 5,
    },
    textoFonte: {
        color: "#D9D9D9",
        fontSize: 16,
        fontWeight: "400",
        marginVertical: 5,
    },
    textoDescricao: {
        color: "#D9D9D9",
        fontSize: 14,
        fontWeight: "400",
        marginVertical: 5,
        display: "none",
        marginBottom: 10,
    },
});