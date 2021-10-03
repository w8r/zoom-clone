import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import StartMeeting from "../components/StartMeeting";
import { io } from "socket.io-client";

export default function MeetingRoom() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    const API_URL = "192.168.0.17";
    const socket = io(API_URL);
  }, []);

  return (
    <View style={styles.container}>
      <StartMeeting name={name} setName={setName} roomId={id} setId={setId} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    flex: 1,
  },
  form: {},
});
