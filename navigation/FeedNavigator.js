import React from "react";
import { Platform, Text } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
//import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import FeedScreen from "../screens/FeedScreen";
import StripScreen from "../screens/StripScreen";
import ChoiceScreen from "../screens/ChoiceScreen";
import Colors from "../constants/Colors";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const ScreenNavigator = createStackNavigator({
  MyFeed: {
    screen: FeedScreen,
    navigationOptions: {
      headerTitle: "MY APP",
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  },
  Choice: {
    screen: ChoiceScreen,
  },
});
const tabConfig = {
  Feed: {
    screen: ScreenNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Entypo name="video" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel: "Feed",
    },
  },
  Strip: {
    screen: StripScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Entypo name="colours" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel: "Strip",
    },
  },
};

const AppNavigator =
  Platform.OS === "android"
    ? createBottomTabNavigator(tabConfig, {
        activeColor: "white",
        shifting: true,
      })
    : createBottomTabNavigator(tabConfig, {
        tabBarOptions: {
          activeTintColor: Colors.primaryColor,
        },
      });

export default createAppContainer(AppNavigator);
