import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

const Card = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      onLongPress={props.onLongPress}
      style={{ ...styles.card, ...props.style }}
    >
      {props.children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
});

export default Card;
