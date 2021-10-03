import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const items = [
  {
    text: "New meeting",
    backgroundColor: "#ff751f",
    icon: "video-camera",
    onPress: (navigation) => () => navigation.navigate("Meeting"),
  },
  {
    text: "Join",
    backgroundColor: "#0470DC",
    icon: "plus-square",
    onPress: () => () => {
      console.log("Home");
    },
  },
  {
    text: "Schedule",
    backgroundColor: "#0470DC",
    icon: "calendar",
    onPress: () => () => {
      console.log("Home");
    },
  },
  {
    text: "Share screen",
    backgroundColor: "#0470DC",
    icon: "upload",
    onPress: () => () => {
      console.log("Home");
    },
  },
];

export default function MenuButtons({ navigation }) {
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View key={index} style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={item.onPress(navigation)}
            style={{ ...styles.button, backgroundColor: item.backgroundColor }}
          >
            <Icon name={item.icon} size={23} color="#efefef" />
          </TouchableOpacity>
          <Text style={styles.buttonText}>{item.text}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomColor: "#333",
    borderBottomWidth: 1,
    padding: 20,
    paddingBottom: 10,
    justifyContent: "space-between",
  },
  buttonContainer: {
    alignItems: "center",

    flex: 1,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: "blue",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#858585",
    fontSize: 12,
    paddingTop: 10,
    fontWeight: "600",
  },
});
