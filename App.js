import * as React from "react";
import MainContainer from "./views/MainContainer";
import { StyleSheet } from "react-native";

export default function App() {
  return <MainContainer />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    color: "green",
  },
  cont: {
    color: "green",
  },
});
