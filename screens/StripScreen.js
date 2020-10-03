import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Colors from "../constants/Colors";
import { loadStrip } from "../store/actions/Strip";

const StripScreen = () => {
  const stripFetchedData = useSelector((state) => state.strip.stripItems);
  const [textInputs, setTextInputs] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadStrip());
  }, [dispatch]);

  const leftStripdummyData = [
    { id: "1", color: "rgb(97,88,138)" },
    { id: "2", color: "rgb(245,248,127)" },
    { id: "3", color: "rgb(177,146,184)" },
    { id: "4", color: "rgb(208,85,42)" },
    { id: "5", color: "rgb(159,150,79)" },
    { id: "6", color: "rgb(144,39,92)" },
  ];
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.text}>Test Strip</Text>
        <View style={styles.nextContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (textInputs.length < 6) {
                Alert.alert(
                  "Please Enter any Numeric Value",
                  "You must have to Enter a value in all Inputbox",
                  [{ text: "ok" }]
                );
              } else {
                Alert.alert(
                  "Results Are !",
                  `Value of Total Hardness is ${textInputs[0]} ppm\nValue of Total chlorine is ${textInputs[1]} ppm\nValue of Free Chlorine is ${textInputs[2]} ppm\npH Value is ${textInputs[3]} ppm\nValue of Total Alkalinity is ${textInputs[4]} ppm\nValue of Cynauric Acid is ${textInputs[5]} ppm`,
                  [<Text>Okey</Text>]
                );
                setTextInputs([]);
              }
            }}
          >
            <Text style={styles.buttontext}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={styles.strip}>
          <View style={styles.leftStrip}>
            {leftStripdummyData.map((strip) => {
              return (
                <View
                  key={strip.id}
                  style={{
                    backgroundColor: strip.color,
                    height: Dimensions.get("window").width * 0.1,
                    marginVertical: Dimensions.get("window").width * 0.12,
                  }}
                />
              );
            })}
          </View>
          <View style={styles.rightStrip}>
            {stripFetchedData.map((stripItem, index) => {
              return (
                <View
                  key={stripItem.id}
                  style={{
                    height: Dimensions.get("window").width * 0.34,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      height: Dimensions.get("window").width * 0.1,
                      marginBottom: Dimensions.get("window").width * 0.02,
                    }}
                  >
                    <View
                      style={{
                        width: (Dimensions.get("window").width * 0.83) / 2,
                        flexDirection: "row",
                      }}
                    >
                      <Text
                        style={{
                          marginRight: Dimensions.get("window").width * 0.02,
                          color: "#ccc",
                          fontWeight: "bold",
                        }}
                      >
                        {stripItem.name}
                      </Text>
                      <Text style={{ color: "#ccc" }}>({stripItem.unit})</Text>
                    </View>
                    <View
                      style={{
                        width: (Dimensions.get("window").width * 0.83) / 2,
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        height: Dimensions.get("window").width * 0.1,
                      }}
                    >
                      <TextInput
                        style={{
                          color: Colors.primaryColor,
                          borderColor: "#ccc",
                          borderWidth: 1,
                          borderRadius: 5,
                          width: Dimensions.get("window").width * 0.15,
                          height: Dimensions.get("window").width * 0.09,
                          alignItems: "center",
                          textAlign: "center",
                        }}
                        keyboardType="number-pad"
                        onChangeText={(text) => {
                          let oldInput = [...textInputs];
                          oldInput[index] = text.replace(/[^0-9]/g, "");
                          setTextInputs(oldInput);
                        }}
                        value={textInputs[index]}
                        maxLength={4}
                      />
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      height: Dimensions.get("window").width * 0.22,
                    }}
                  >
                    {stripItem.values
                      .map((x, i) => {
                        x.id = (i + 1).toString();
                        return x;
                      })
                      .map((item) => {
                        return (
                          <View key={item.id}>
                            <TouchableOpacity
                              onPress={() => {
                                const value = item.value;
                                let oldInput = [...textInputs];
                                oldInput[index] = value;
                                setTextInputs(oldInput);
                              }}
                            >
                              <View
                                style={{
                                  height: Dimensions.get("window").width * 0.1,
                                  backgroundColor: item.color,
                                  borderRadius: 10,
                                  width: Dimensions.get("window").width * 0.15,
                                  marginRight:
                                    Dimensions.get("window").width * 0.02,
                                  marginBottom:
                                    Dimensions.get("window").width * 0.02,
                                }}
                              />
                            </TouchableOpacity>
                            <Text
                              style={{
                                textAlign: "center",
                                width: Dimensions.get("window").width * 0.15,
                                height: Dimensions.get("window").width * 0.1,
                                marginRight:
                                  Dimensions.get("window").width * 0.02,
                                // marginTop:
                                //   Dimensions.get("window").height * 0.01,
                              }}
                            >
                              {item.value}
                            </Text>
                          </View>
                        );
                      })}
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 60,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingBottom: 20,
    height: 50,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    width: Dimensions.get("window").width / 2,
    paddingLeft: "7%",
  },
  nextContainer: {
    width: Dimensions.get("window").width / 2,
    alignItems: "flex-end",
    paddingRight: Dimensions.get("window").width * 0.03,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    width: 60,
    height: 30,
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "white",
  },
  buttontext: {
    color: Platform.OS === "android" ? "white" : Colors.primaryColor,
  },
  strip: {
    flexDirection: "row",
    marginVertical: 40,
    marginHorizontal: 10,
  },
  leftStrip: {
    width: Dimensions.get("window").width * 0.1,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 5,
  },
  rightStrip: {
    justifyContent: "space-around",
    width: Dimensions.get("window").width * 0.83,
  },
});
export default StripScreen;
