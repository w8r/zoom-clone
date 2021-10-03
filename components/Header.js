import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

export default function Header() {
  return (
    <View style={styles.container}>
      <Icon name="notification" size={30} color="#efefef" />
      <Text style={styles.text}>Meet & Chat</Text>
      <Icon name="new-message" size={30} color="#efefef" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "700",
    color: "#efefef",
  },
});
