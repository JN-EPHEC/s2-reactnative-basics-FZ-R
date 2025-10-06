import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function HomeScreen() {
  // Initialize state for the counter with an initial value of 0.
  const [count, setCount] = useState(0);

  // Function to increment the count.
  const incrementCount = () => {
    // Write your logic here to increment the count
    setCount (count => count+1) ;
  }

  return (
    //<SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>count:{count}</Text>
          <TouchableOpacity style={styles.button} onPress={incrementCount}>
          <Text>Press me</Text>
        </TouchableOpacity>
        </SafeAreaView>
    //</SafeAreaProvider>
  );
}

      

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecececff",
    alignItems: "center",
    justifyContent: "center",

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


  },
  button: {
    backgroundColor : "#6da977ff",
    
  }
});
