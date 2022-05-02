import { StyleSheet, FlatList, View } from "react-native";
import { useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ route, navigation }) => {
	const catId = route.params.categoryId;

	const displayedMeals = MEALS.filter((meal) => {
		return meal.categoryIds.indexOf(catId) >= 0;
	});

	useLayoutEffect(() => {
		const categoryTitle = CATEGORIES.find((category) => category.id === catId)
			.title;

		navigation.setOptions({
			title: categoryTitle,
		});
	}, [catId, navigation]);

	const renderMealItem = (itemData) => {
		const item = itemData.item;
		const mealProps = {
			id: item.id,
			title: item.title,
			imageUrl: item.imageUrl,
			affordability: item.affordability,
			complexity: item.complexity,
			duration: item.duration,
		};
		return <MealItem {...mealProps} />;
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={displayedMeals}
				keyExtractor={(item) => item.id}
				renderItem={renderMealItem}
			/>
		</View>
	);
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
});
