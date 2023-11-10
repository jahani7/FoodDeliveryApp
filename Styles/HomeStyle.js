import { StyleSheet } from "react-native";
export const HomeStyle= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fbfbfb",
        padding: 10,
      },
      avatarContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
      },
      avatarImage: {
        height: 60,
        width: 60,
        resizeMode: "cover",
      },
      greetingText: {
        fontSize: 15,
        color: "#4a4d55",
        fontWeight: "bold",
      },
      titleText: {
        fontSize: 30,
      },
      orangeText: {
        color: "orange",
        fontWeight: "bold",
        fontSize: 40,
      },
      searchBarContainer: {
        flexDirection: "row",
        marginTop: 40,
        borderWidth: 2,
        backgroundColor: "rgba(215, 223, 193, 0.16)",
        borderColor: "transparent",
        borderRadius: 28,
        alignItems: "center",
      },
      inputTxt: {
        flex: 1,
        padding: 10,
        marginLeft: 10,
        color: "grey",
      },
      searchIconContainer: {
        backgroundColor: "#fbfbfb",
        height: 50,
        width: 50,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
      },
    
})