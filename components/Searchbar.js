import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Fontisto";

export default function Searchbar() {
  return (
    <View style={styles.container}>
      <Icon name="search" size={20} color="#858585" />
      <Text style={styles.text}>Searchbar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#333",
    height: 40,
  },
  text: {
    paddingLeft: 10,
    color: "#858585",
    fontSize: 20,
  },
});
