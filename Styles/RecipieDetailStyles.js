import { StyleSheet } from "react-native";
export const RecipeDetailStyle = StyleSheet.create({
    container: {
        backgroundColor: "#fbfbfb",
      },
      imgCont: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      },
      itemImg: {
        width: "95%",
        height: 400,
        borderRadius: 30,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
      },
      mealDesCont: {
        padding: 10,
        margin: 10,
      },
      iconsContainer: {
        padding: 10,
        margin: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
        marginLeft: 10,
      },
      iconDes: {
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: "orange",
        justifyContent: "center",
        alignItems: "center",
      },
      iconInner: {
        backgroundColor: "#fbfbfb",
        height: 50,
        width: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
      },
      heartIcon: {
        textShadowColor: "white",
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 0,
      },
      ingredientContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5,
      },
    
      ingredientDot: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: "orange",
        marginRight: 10,
      },
      orderBtn: {
        marginTop: 20,
        width: "80%",
        backgroundColor: "orange",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        left:40
    },
    orderText: {
        color: "#fbfbfb",
        fontWeight: "bold",
    },
    orderStatusContainer: {
        backgroundColor: "#fbfbfb", 
        padding: 10,
        borderRadius: 5,
        margin: 10,
        alignItems: "center",
      },
      orderStatusText: {
        color: "#fff",
        fontWeight: "bold",
      },
})