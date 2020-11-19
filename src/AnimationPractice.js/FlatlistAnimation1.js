import React, { Component } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  View,
  Animated,
  Dimensions,
  StatusBar,
} from "react-native";

const data = [
  {
    id: 1,
    image:
      "https://cdn.pixabay.com/photo/2017/09/26/20/13/eiffel-2789943_960_720.jpg",
    name: "Paris, France",
    days: 9,
  },
  {
    id: 2,
    image:
      "https://cdn.pixabay.com/photo/2016/10/28/16/43/usa-1778564_960_720.jpg",
    name: "New York, USA",
    days: 9,
  },
  {
    id: 3,
    image:
      "https://cdn.pixabay.com/photo/2020/06/19/16/10/limburg-5317981_960_720.jpg",
    name: "Prague, Czech Republic",
    days: 9,
  },
  {
    id: 4,
    image:
      "https://cdn.pixabay.com/photo/2017/09/26/20/13/eiffel-2789943_960_720.jpg",
    name: "Paris, France",
    days: 9,
  },
  {
    id: 5,
    image:
      "https://cdn.pixabay.com/photo/2016/10/28/16/43/usa-1778564_960_720.jpg",
    name: "New York, USA",
    days: 9,
  },
  {
    id: 6,
    image:
      "https://cdn.pixabay.com/photo/2020/06/19/16/10/limburg-5317981_960_720.jpg",
    name: "Prague, Czech Republic",
    days: 9,
  },
  {
    id: 7,
    image:
      "https://cdn.pixabay.com/photo/2017/09/26/20/13/eiffel-2789943_960_720.jpg",
    name: "Paris, France",
    days: 9,
  },
  {
    id: 8,
    image:
      "https://cdn.pixabay.com/photo/2016/10/28/16/43/usa-1778564_960_720.jpg",
    name: "New York, USA",
    days: 9,
  },
  {
    id: 9,
    image:
      "https://cdn.pixabay.com/photo/2020/06/19/16/10/limburg-5317981_960_720.jpg",
    name: "Prague, Czech Republic",
    days: 9,
  },
];

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default class FlatlistAnimation1 extends Component {
  scrollY = new Animated.Value(0);

  render() {
    return (
      <SafeAreaView
        style={{ width: "100%", flex: 1, marginTop: StatusBar.currentHeight }}
      >
        <Animated.FlatList
          onScrollBeginDrag={() => {
            console.log(this.scrollY);
          }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.scrollY } } }],
            { useNativeDriver: false }
          )}
          style={{
            width: "100%",
            flex: 1,
            paddingBottom: 40,
          }}
          ListFooterComponent={() => <View style={{ marginTop: 40 }} />}
          keyExtractor={(item) => `${item.id}`}
          data={data}
          renderItem={({ item, index }) => {
            let animatedScale = this.scrollY.interpolate({
              inputRange: [0, index * 200, (index + 1) * 300],
              outputRange: [0, 0, 400],
              extrapolate: "clamp",
            });

            let animatedOpacity = this.scrollY.interpolate({
              inputRange: [0, index * 200, (index + 1) * 300],
              outputRange: [1, 1, 0],
              extrapolate: "clamp",
            });

            return (
              <Animated.View
                style={{
                  width: "100%",
                  alignItems: "center",
                  transform: [{ translateX: animatedScale }],
                  opacity: animatedOpacity,
                }}
              >
                <Image
                  style={{
                    width: "90%",
                    height: 150,
                    borderRadius: 20,
                    marginTop: 40,
                  }}
                  source={{ uri: item.image }}
                />
              </Animated.View>
            );
          }}
        />
      </SafeAreaView>
    );
  }
}
