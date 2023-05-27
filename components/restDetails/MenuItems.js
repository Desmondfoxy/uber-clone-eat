import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { localFoods } from "../../LocalData";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";

export default function MenuItem({ restaurantName }) {
  const dispatch = useDispatch();

  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...item, restaurantName: restaurantName, checkboxValue: checkboxValue },
    });

  const cartItems = useSelector((state) => state.cartReducer.selectedItems.items);

  const isFoodInCart = (food, cartItems) => Boolean(cartItems.find((item) => item.title === food.title));

  // const selectFood = (foods) => {
  //   console.log(foods);
  // };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {localFoods.map((food, index) => (
        <View key={index}>
          <View style={style.menuItemStyle}>
            <BouncyCheckbox
              iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
              fillColor="green"
              onPress={(checkboxValue) => selectItem(food, checkboxValue)}
              isChecked={isFoodInCart(food, cartItems)}
            />
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider width={0.5} style={{ marginHorizontal: 20 }} />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: 230, justifyContent: "space-evenly" }}>
    <Text style={style.titleStyle}>{props.food.title}</Text>
    <Text style={{ fontSize: 14 }}>{props.food.desc}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    <Image source={{ uri: props.food.image }} style={{ width: 100, height: 100, borderRadius: 8 }} />
  </View>
);

const style = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 10,
    // marginHorizontal: 15,
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: "600",
  },
});
