import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text } from "react-native";

export default function HomeScreen() {
  // Initialize state for the counter with an initial value of 0.
  const [count, setCount] = useState(0);

  // Function to increment the count.
  const incrementCount = () => {
    // Write your logic here to increment the count
    setCount (count => count+1) ;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>count:{count}</Text>
      <Button title="Press Me" onPress={incrementCount} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecececff",
    alignItems: "center",
    justifyContent: "center",
    color:"#6da977ff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    
  },
  countText: {
    fontSize: 48,
    fontWeight: "600",
    marginVertical: 20,
    color: "#6da977ff",

  },
  Button: {
    backgroundColor : "#6da977ff",
    color: "black",
  }
});
