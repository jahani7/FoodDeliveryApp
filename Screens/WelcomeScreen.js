import { View, Text, StyleSheet, Dimensions, Image, StatusBar } from "react-native";
import React, { useEffect } from "react";
import { WelcomeStyle } from "../Styles/WelcomeStyle";
export default function WelcomeScreen({ navigation }) {

    useEffect(() => {
        setTimeout(() => navigation.navigate("Login"), 2500);
    }, []);

    return (
        <View style={WelcomeStyle.container}>
            <StatusBar barStyle="dark-content" backgroundColor="orange" />

            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Image
                        source={require("../Images/Welcome.jpg")}
                        style={{ height: 300, width: 300, borderRadius: 300 }}
                    />
                </View>
            </View>
            <View style={{ position: "absolute", bottom: 50 }}>
                <Text style={{ color: "white", fontSize: 60, fontWeight: "bold" }}>
                    Foody
                </Text>
                <Text
                    style={{ color: "white", fontSize: 15, left: 10, fontWeight: "500" }}
                >
                    Food is always right
                </Text>
            </View>
        </View>
    );
}