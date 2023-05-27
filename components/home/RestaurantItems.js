import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// const localRestaurants = [
//   {
//     id: 1,
//     name: "Beachside Bar",
//     image_url:
//       "https://cache.marriott.com/content/dam/marriott-renditions/XMNSI/xmnsi-prince-restaurant-6803-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*",
//     categories: ["Cafe", "Bar"],
//     price: "$$",
//     reviews: 1244,
//     rating: 4.5,
//     mins: "30-45 • min",
//   },
//   {
//     id: 2,
//     name: "Benihana",
//     image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhp-GpVJ0gW9-7NfLdzUOqN0NvA-xjXJ87zw&usqp=CAU",
//     categories: ["Cafe", "Bar"],
//     price: "$$",
//     reviews: 1244,
//     rating: 3.7,
//     mins: "15-25 • min",
//   },
//   {
//     id: 3,
//     name: "India's Grill",
//     image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhp-GpVJ0gW9-7NfLdzUOqN0NvA-xjXJ87zw&usqp=CAU",
//     categories: ["India", "Bar"],
//     price: "$$",
//     reviews: 700,
//     rating: 4.9,
//     mins: "20-30 • min",
//   },
// ];

export default function RestaurantItems({ navigation, ...props }) {
  return (
    <>
      {props?.restaurantData?.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={{ marginBottom: 10 }}
          onPress={() =>
            navigation.navigate("RestDetail", {
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.review_count,
              rating: restaurant.rating,
              categories: restaurant.categories,
            })
          }>
          <View style={{ marginTop: 10, backgroundColor: "white", padding: 10 }}>
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} mins={restaurant.mins} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-45 • min</Text>
    </View>
    <View style={{ backgroundColor: "#eee", height: 30, width: 30, alignItems: "center", justifyContent: "center", borderRadius: 15 }}>
      <Text>{props.rating}</Text>
    </View>
  </View>
);
