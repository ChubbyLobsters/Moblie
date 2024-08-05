import React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Alert } from "react-native";
import { launchImageLibraryAsync } from "expo-image-picker";
import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";

// Choose one of the Pokémon images
const placeholderImg = require("./assets/imgs/pikachu.png");

const App = () => {
  const pickImageAsync = async () => {
    try {
      const result = await launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        // Process the selected image result
        console.log(result);
        // You might want to store or display the selected image
        // For example, set state here to update the image viewer
      } else {
        Alert.alert("No Image Selected", "You did not select any Pokémon image.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "An error occurred while selecting the image.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImgSrc={placeholderImg} />
      </View>
      <View style={styles.footerContainer}>
        <Button
          theme="primary"
          label="Choose a Pokémon"
          onPress={pickImageAsync}
        />
        <Button label="Use this Pokémon" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d3d3d3", // Light gray color
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 2, // Adjusted to take more space
    paddingTop: 50,
    justifyContent: "center", // Center the image vertically
    alignItems: "center", // Center the image horizontally
  },
  footerContainer: {
    flex: 1 / 3, // Takes one-third of the container's height
    alignItems: "center",
    justifyContent: "flex-end", // Align buttons at the bottom of the container
    paddingBottom: 20, // Optional padding at the bottom
  },
});

export default App;
