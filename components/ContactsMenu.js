import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const items = [
  {
    type: "starred",
    text: "Starred",
  },
  {
    type: "contact",
    text: "John Doe",
    photo: require("../assets/photos/pic.jpg"),
  },
];

export default function ContactsMenu() {
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View key={index} style={styles.row}>
          {item.type === "starred" ? (
            <View style={styles.icon}>
              <Icon name="star" size={30} color="#fff" />
            </View>
          ) : (
            <Image source={item.photo} style={styles.photo} />
          )}
          <Text style={styles.text}>{item.text}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  icon: {
    backgroundColor: "#333",
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  text: {
    paddingLeft: 20,
    color: "#efefef",
    fontSize: 18,
  },
  photo: {
    width: 55,
    height: 55,
    borderRadius: 20,
  },
});
