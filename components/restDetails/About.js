import { View, Text, Image } from "react-native";
import React from "react";

export default function About(props) {
  const { name, image, price, rating, reviews, categories } = props.route.params;

  const formattedCategories = categories.map((cat) => cat.title).join(" • ");

  const description = `${formattedCategories} ${price ? " • " + price : ""} • 🎫 • ${rating} ⭐️ (${reviews}+)`;
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle name={name} />
      <RestaurantDesc description={description} />
    </View>
  );
}

const RestaurantImage = (props) => <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />;

const RestaurantTitle = (props) => <Text style={{ fontSize: 29, fontWeight: "600", marginTop: 10, marginHorizontal: 15 }}>{props.name}</Text>;

const RestaurantDesc = (props) => <Text style={{ fontSize: 15.5, fontWeight: "400", marginTop: 10, marginHorizontal: 15 }}>{props.description}</Text>;
