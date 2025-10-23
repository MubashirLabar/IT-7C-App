import { View, StyleSheet, ScrollView, Image, Dimensions } from "react-native";

// const width = Dimensions.get("window").width;
// const height = Dimensions.get("window").height;

const { width, height } = Dimensions.get("window");

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={require("./images/img-1.jpg")} style={styles.image} />
        <Image
          source={{
            uri: "https://images.pexels.com/photos/20188350/pexels-photo-20188350.jpeg",
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: "https://images.pexels.com/photos/18023782/pexels-photo-18023782.jpeg",
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: "https://images.pexels.com/photos/20188350/pexels-photo-20188350.jpeg",
          }}
          style={styles.image}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: height,
    width: width,
  },
});
