import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Alert } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import OrderModal from "../Components/orderModal";
import { useNavigation } from "@react-navigation/native";
import { RecipeDetailStyle } from "../Styles/RecipieDetailStyles";

export default function RecipeDetails(props) {
  const item = props.route.params;
  const navigation = useNavigation();
  const [isHeart, setIsHeart] = useState(false);
  const [meal, setMeal] = useState(null);
  const [isOrderModalVisible, setOrderModalVisible] = useState(false);
  const [orderStatus, setOrderStatus] = useState(null);

  useEffect(() => {
    getMealData(item.idMeal);
  }, []);

  const getMealData = async (id) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    try {
      let result = await fetch(url);
      result = await result.json();
      setMeal(result.meals[0]);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const toggleHeart = () => {
    setIsHeart(!isHeart);
  };
  const handleOrderPlaced = () => {
    setOrderStatus("Your order has been placed successfully!");
    setOrderModalVisible(false);
    setTimeout(() => {
      setOrderStatus(null);
    }, 3000);
  };

  const ingredientIndex = (meal) => {
    if (!meal) return [];
    let index = [];
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        index.push(i);
      }
    }
    return index;
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={RecipeDetailStyle.container}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#fbfbfb" />
      <View style={RecipeDetailStyle.imgCont}>
        <Image source={{ uri: item.strMealThumb }} style={RecipeDetailStyle.itemImg} />
      </View>
      <View
        style={{
          position: "absolute",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "90%",
          left: 20,
          top: 20,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            backgroundColor: "#fbfbfb",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <Ionicons name="chevron-back-sharp" size={34} color="orange" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={toggleHeart}
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            backgroundColor: "#fbfbfb",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HeartIcon filled={isHeart} size={30} borderColor="orange" />
        </TouchableOpacity>
      </View>

      {/* Meal Description */}
      <View style={RecipeDetailStyle.mealDesCont}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#292826" }}>
          {meal?.strMeal}
        </Text>
        <Text style={{ fontSize: 15, color: "#7d7c7a" }}>{meal?.strArea}</Text>
      </View>

      {/* Meal Icons */}
      <View style={RecipeDetailStyle.iconsContainer}>
        <MealIcon icon="clock-o" />
        <MealIcon icon="burn" />
        <MealIcon icon="logo-stackoverflow" />
        <MealIcon icon="users" />
      </View>

      {/* Ingredients */}
      <View style={{ padding: 10, margin: 10 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#292826",
            padding: 10,
          }}
        >
          Ingredients
        </Text>
        <View>
          {ingredientIndex(meal).map((i) => {
            return (
              <View key={i} style={RecipeDetailStyle.ingredientContainer}>
                <View style={RecipeDetailStyle.ingredientDot}></View>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  {meal["strIngredient" + i]}
                </Text>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  {meal["strMeasure" + i]}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
      {/* Instructions*/}
      <View style={{ padding: 10, margin: 10 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#292826",
            padding: 10,
          }}
        >
          Instructions
        </Text>
        <Text>{meal?.strInstructions}</Text>
      </View>
      <TouchableOpacity
        style={RecipeDetailStyle.orderBtn}
        onPress={() => setOrderModalVisible(true)}
      >
        <Text style={RecipeDetailStyle.orderText}>order Now</Text>
      </TouchableOpacity>
      <OrderModal
        isVisible={isOrderModalVisible}
        onClose={() => {
          setOrderStatus(null);
          setOrderModalVisible(false);
        }}
        onOrderPlaced={handleOrderPlaced}
      />

      {orderStatus && (
        <View style={RecipeDetailStyle.orderStatusContainer}>
          <Text style={RecipeDetailStyle.orderStatusText}>{orderStatus}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const HeartIcon = ({ filled, size, borderColor }) => (
  <FontAwesome
    name="heart"
    size={size}
    color={filled ? "red" : borderColor}
    style={RecipeDetailStyle.heartIcon}
  />
);

const MealIcon = ({ icon }) => (
  <View style={RecipeDetailStyle.iconDes}>
    <View style={RecipeDetailStyle.iconInner}>
      {icon === "clock-o" && (
        <FontAwesome name="clock-o" size={24} color="black" />
      )}
      {icon === "burn" && <FontAwesome5 name="burn" size={24} color="black" />}
      {icon === "logo-stackoverflow" && (
        <Ionicons name="logo-stackoverflow" size={24} color="black" />
      )}
      {icon === "users" && <FontAwesome name="users" size={24} color="black" />}
    </View>
  </View>
);
