import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

const MealDetailsScreen = ({ route }) => {
	const mealId = route.params.mealId;
	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	return (
		<View>
			<Image source={{ uri: selectedMeal.imageUrl }} />
			<Text>{selectedMeal.title}</Text>
			<MealDetails
				duration={selectedMeal.duration}
				complexity={selectedMeal.complexity}
				affordability={selectedMeal.affordability}
			/>
			<Text>Ingredients</Text>
			{selectedMeal.ingredients.map((ingredient) => (
				<Text key={ingredient}>{ingredient}</Text>
			))}

			<Text>Steps</Text>
			{selectedMeal.steps.map((step) => (
				<Text key={step}>{step}</Text>
			))}
		</View>
	);
};

export default MealDetailsScreen;

const styles = StyleSheet.create({});