import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";

export default function App() {
  return (
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        <View style={[styles.box, { backgroundColor: "red" }]}>
          <Text style={styles.title}>Pizza</Text>
        </View>
        <View style={[styles.box, { backgroundColor: "orange" }]}>
          <Text style={styles.title}>Burger</Text>
        </View>
        <View style={[styles.box, { backgroundColor: "blue" }]}>
          <Text style={styles.title}>Salad</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    gap: 20,
    paddingVertical: StatusBar.currentHeight + 24,
    paddingHorizontal: 20,
  },
  box: {
    height: 250,
    width: 200,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
  },
});
