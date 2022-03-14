import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        flex: 1,
        backgroundColor: "#f0f0f0",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 30,
    },
    form: {
        width: "80%",
        height: "auto",
        paddingTop: 30
    },
    formLabel: {
        fontSize: 18,
        color: "#000000"
    },
    required: {
        color: "red"
    },
    formInput: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#fff",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    button: {
        borderRadius: 50,
        alignItems: "center",
        width: "90%",
        backgroundColor: "#FF1493",
        paddingTop: 14,
        paddingBottom: 12,
        marginLeft: 12,
        margin: 10
    },
    textButton: {
        color: "#fff",
        fontSize: 17,
        fontWeight: "bold"
    },
    error: {
        fontSize: 12,
        color: "red",
        paddingLeft: 20
    },
    exibitionResult: {
        width: "80%",
        height: "90%",
    },
    listIMC: {
        paddingTop: 10,
    },
    textResultItem: {
        fontSize: 16,
        color: "black",
        height: 50,
        width: "100%",
        alignItems: "center"
    },
    resultIMCList: {
        color: "#FF1493",
        fontSize: 24,
    }
});

export default styles