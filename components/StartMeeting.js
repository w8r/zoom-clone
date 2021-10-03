import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";

export default function StartMeeting({ name, setName, setId, roomId }) {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.info}>
          <TextInput
            style={styles.input}
            value={name}
            placeholder="Enter room Name"
            placeholderTextColor="#999"
            onChangeText={setName}
          />
        </View>
        <View style={styles.info}>
          <TextInput
            style={styles.input}
            value={roomId}
            placeholder="Enter room id"
            placeholderTextColor="#999"
            onChangeText={setId}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Start meeting</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  info: {
    width: "100%",
    backgroundColor: "#373538",
    height: 50,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "#484648",
    padding: 12,
    justifyContent: "center",
  },
  input: {
    color: "#fff",
    fontSize: 18,
  },
  buttonContainer: {
    alignItems: "center",
    paddingTop: 25,
  },
  button: {
    width: 350,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0740dc",
    height: 50,
    borderRadius: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
