import { View, Text } from "react-native";
import React from "react";

export default function Divider(props) {
  return <View style={{ width: "100%", height: `${props.height}`, backgroundColor: "#bbb", marginTop: 15 }}></View>;
}
