import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StatusBar,
  StyleSheet,
  TextInput,
} from "react-native";
import Categories from "../Components/Categories";
import Recipies from "../Components/Recipies";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomeStyle } from "../Styles/HomeStyle";

const HomeScreen = ({ navigation }) => {
  const [activeCategories, setactiveCategories] = useState("Beef");
  const [Categoriesdata, setCategoriesdata] = useState([]);
  const [getrecipiesData, setrecipiesData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getCategories = async () => {
    const url = "https://themealdb.com/api/json/v1/1/categories.php";
    try {
      let result = await fetch(url);
      result = await result.json();
      console.log(result.data);
      setCategoriesdata(result.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const getRecipies = async (category = "Beef") => {
    const url = `https://themealdb.com/api/json/v1/1/filter.php?c=${category}`;
    try {
      let result = await fetch(url);
      result = await result.json();

      const filteredRecipes = result.meals.filter((meal) =>
        meal.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setrecipiesData(filteredRecipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const handleChange = (category) => {
    getRecipies(category);
    setactiveCategories(category);
    setrecipiesData([]);
  };

  useEffect(() => {
    getCategories();
    getRecipies();
  }, [searchQuery]);

  return (
    <View style={HomeStyle.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fbfbfb" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={HomeStyle.avatarContainer}>
          <Image
            source={require("../Images/avatar.jpg")}
            style={HomeStyle.avatarImage}
          />
          <Ionicons name="notifications-outline" size={40} color="black" />
        </View>

        <Text style={HomeStyle.greetingText}>Hello, Foody!</Text>
        <Text style={HomeStyle.titleText}>Flavours for Royalty,</Text>
        <Text style={[HomeStyle.titleText, HomeStyle.orangeText]}>Stay at Home</Text>

        {/* Search Bar */}
        <View style={HomeStyle.searchBarContainer}>
          <TextInput
            placeholder="Search any Food"
            placeholderTextColor="grey"
            style={HomeStyle.inputTxt}
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
          <View style={HomeStyle.searchIconContainer}>
            <Ionicons name="search" size={30} color="rgba(0, 0, 0, 0.42)" />
          </View>
        </View>
        {/* Categories */}
        <Categories
          Categoriesdata={Categoriesdata}
          activeCategories={activeCategories}
          handleChange={handleChange}
        />

        <Recipies
          Categories={Categories}
          getrecipiesData={getrecipiesData}
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
