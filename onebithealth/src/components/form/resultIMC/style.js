import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    result: {
        alignItems: "center",
        width: "100%",

    },
    information: {
        fontSize: 18,
        color: "#FF1493",
        fontWeight: "bold"
    },
    imc: {
        fontSize: 38,
        color: "#FF1493",
        fontWeight: "bold"
    },
    boxShare: {
        width: "100%",
        alignItems: "center",
        marginBottom: 10
    },
    shared: {
        borderRadius: 50,
        backgroundColor: "#f0f0f0",
        borderWidth: 2,
        borderColor: "#FF1493",
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 12,
        margin: 10,
    },
    sharedText: {
        color: "#fff",
        fontWeight: "bold",
        paddingHorizontal: 30,
        color: "#FF1493"
    }
});

export default styles