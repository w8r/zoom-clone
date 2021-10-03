import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import ContactsMenu from "../components/ContactsMenu";
import Header from "../components/Header";
import MenuButtons from "../components/MenuButtons";
import Searchbar from "../components/Searchbar";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Searchbar />
      <MenuButtons navigation={navigation} />
      <ContactsMenu />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
    paddingLeft: 15,
    //alignItems: "center",
    //justifyContent: "center",
  },
});
