import { StyleSheet } from "react-native";
export const ModalStyle = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      modalContent: {
        backgroundColor: "#fbfbfb",
        padding: 20,
        borderRadius: 10,
        width: "80%",
      },
      modalTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
      },
      input: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 5,
        height: 40,
        marginBottom: 10,
        paddingLeft: 10,
      },
      orderButton: {
        backgroundColor: "orange",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        marginTop: 10,
      },
      orderButtonText: {
        color: "#fbfbfb",
        fontWeight: "bold",
      },

})