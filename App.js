import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24 }}>
        My Name is <Text style={{ fontWeight: "bold" }}>Exodus</Text>{" "}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f94f36",
    alignItems: "center",
    justifyContent: "center",
  },
});
