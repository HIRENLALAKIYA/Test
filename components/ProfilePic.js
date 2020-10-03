import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  Button,
  TouchableOpacity,
} from "react-native";

import { useSelector } from "react-redux";

const ProfilePicker = (props) => {
  const selectedImage = useSelector((state) => state.feed.profileImage);
  const [pickedImage, setPickedImage] = useState();

  useEffect(() => {
    if (selectedImage) {
      setPickedImage(selectedImage);
    }
  }, [selectedImage]);

  const choiceSelector = () => {
    props.navigation.navigate("Choice");
  };
  return (
    <TouchableOpacity onPress={choiceSelector}>
      <View style={styles.profile}>
        {!pickedImage ? (
          <Text>Profile</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedImage }} />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ProfilePicker;
