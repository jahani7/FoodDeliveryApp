import React ,{useState}from "react";
import { View, Text, Image,StatusBar,TextInput,TouchableOpacity } from "react-native";
import { LoginStyles } from "../Styles/LoginStyles";
const LoginScreen=({navigation})=>{
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <View style={LoginStyles.container}>
            <StatusBar barStyle="light-content" backgroundColor="orange" />
            <View style={LoginStyles.circle}>
            <Image
                        source={require("../Images/Welcome.jpg")}
                        style={{ height: 150, width: 150, borderRadius: 150 }}
                    />
            </View>
            <Text style={LoginStyles.text}>Sign in to Your account</Text>
            <View style={LoginStyles.inputView}>
                <TextInput
                    placeholder="Your Email"
                    onChangeText={(email) => setEmail(email)}
                    placeholderTextColor="gray"
                    style={LoginStyles.inputText}
                />
            </View>
            <View style={LoginStyles.inputView}>
                <TextInput
                    placeholder="Password"
                    onChangeText={(password) => setPassword(password)}
                    placeholderTextColor="gray"
                    style={LoginStyles.inputText}
                    secureTextEntry={!showPassword}
                />
            </View>
            <TouchableOpacity style={LoginStyles.logInBtn} onPress={() => navigation.navigate("Home")}>
                <Text style={LoginStyles.loginText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};


export default LoginScreen;