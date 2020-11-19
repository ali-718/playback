import React, { Component } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import Home from "./src/screens/Home";
import Detail from "./src/screens/Detail";
import Tour from "./src/AnimationPractice.js/Tour";
import TourDetails from "./src/AnimationPractice.js/TourDetails";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import FlatlistAnimation1 from "./src/AnimationPractice.js/FlatlistAnimation1";
import FlatListAnimation2 from "./src/AnimationPractice.js/FlatListAnimation2";

const Stack = createSharedElementStackNavigator();
// const Stack = createStackNavigator();

export default class Router extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            // cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        >
          <Stack.Screen name="FlatList2" component={FlatListAnimation2} />
          <Stack.Screen name="FlatList1" component={FlatlistAnimation1} />
          <Stack.Screen name="Home" component={Tour} />
          <Stack.Screen
            name="Detail"
            component={TourDetails}
            // sharedElements={(route, otherRoute, showing) => {
            //   const { item } = route.params;
            //   return [
            //     {
            //       id: `item.${item.id}.photo`,
            //     },
            //     {
            //       id: `item.${item.id}.name`,
            //     },
            //   ];
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
