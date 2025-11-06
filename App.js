import { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";

export default function App() {
  const [username, setUsername] = useState("BSIT 7th C");
  const [password, setPassword] = useState("123456");

  console.log("username...", username);
  console.log("password...", password);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter your name"
        style={styles.input}
        value={username}
        onChangeText={(value) => {
          setUsername(value);
        }}
        readOnly={true}
      />
      <TextInput
        placeholder="Enter your password"
        style={styles.input}
        secureTextEntry={true}
        value={password}
        onChangeText={(value) => setPassword(value)}
      />
      <TextInput
        placeholder="Explain your expertise"
        style={[styles.input, { height: 200 }]}
        multiline={true}
        maxLength={150}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },

  input: {
    fontSize: 24,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 12,
    width: "100%",
    height: 60,
    paddingHorizontal: 20,
    marginBottom: 24,
    textAlignVertical: "top",
  },
});
