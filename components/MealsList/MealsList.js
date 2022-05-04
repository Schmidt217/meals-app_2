import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import MealItem from "./MealItem";

const MealsList = ({ items }) => {
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
				data={items}
				keyExtractor={(item) => item.id}
				renderItem={renderMealItem}
			/>
		</View>
	);
};

export default MealsList;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
});
