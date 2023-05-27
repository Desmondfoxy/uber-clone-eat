import { View, Text, ScrollView, TextInput, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar({ setCity, city }) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    const mycity = input;
    setCity(mycity);
  };

  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <Ionicons name="location-sharp" style={style.icon} />
      <TextInput placeholder="Search" style={style.search} onChangeText={(text) => setInput(text)} value={input} />
      <View style={style.searchBtn}>
        <AntDesign name="clockcircle" size={11} />
        <Text style={{ marginLeft: 5 }} onPress={handleSubmit}>
          Search
        </Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  icon: {
    position: "absolute",
    top: "30%",
    left: "1%",
    zIndex: 1000,
    fontSize: 24,
  },
  search: {
    backgroundColor: "#eee",
    borderRadius: 20,
    padding: 14,
    paddingLeft: 30,
    fontWeight: "700",
    marginTop: 7,
    flex: 1,
  },
  searchBtn: {
    position: "absolute",
    right: 5,
    top: 12,
    // height: 50,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 9,
    borderRadius: 30,
  },
});
