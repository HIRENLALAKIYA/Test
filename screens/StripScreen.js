import React from "react";
import { View, Text, StyleSheet } from "react-native";

const StripScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Strip Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default StripScreen;
