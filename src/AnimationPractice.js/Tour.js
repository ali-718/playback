import React, { Component } from "react";
import {
  Dimensions,
  FlatList,
  Text,
  View,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
} from "react-native";
import { SharedElement } from "react-navigation-shared-element";

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
];

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
const ITEM_HEIGHT = SCREEN_HEIGHT / 1.7;
const ITEM_WIDTH = SCREEN_WIDTH / 1.5;

export default class Tour extends Component {
  scrollX = new Animated.Value(0);

  render() {
    return (
      <View style={{ width: "100%", flex: 1, marginTop: 80 }}>
        <Animated.FlatList
          horizontal
          data={data}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: this.scrollX } } }],
            { useNativeDriver: false }
          )}
          keyExtractor={(item, i) => `${i}`}
          snapToInterval={ITEM_WIDTH}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            let inputRange = [
              (index - 1) * ITEM_WIDTH,
              index * ITEM_WIDTH,
              (index + 1) * ITEM_WIDTH,
            ];

            const translateX = this.scrollX.interpolate({
              inputRange,
              outputRange: [
                ITEM_WIDTH,
                index == data.length - 1 ? -60 : 0,
                -ITEM_WIDTH,
              ],
            });

            const scale = this.scrollX.interpolate({
              inputRange,
              outputRange: [1, 1.1, 1],
            });

            return (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("Detail", {
                    item,
                  })
                }
                style={[
                  {
                    marginLeft: 20,
                    marginRight: index == data.length - 1 ? 20 : 0,
                    width: "100%",
                    flex: 1,
                    marginTop: 20,
                  },
                ]}
              >
                {/* <View style={[{ overflow: "hidden" }]}> */}
                <SharedElement
                  style={[style.image]}
                  id={`item.${item.id}.photo`}
                >
                  <Animated.Image
                    style={[
                      style.image,
                      { transform: [{ scale: scale }], borderRadius: 20 },
                    ]}
                    source={{ uri: item.image }}
                  />
                </SharedElement>
                {/* </View> */}
                {/* <SharedElement
                  style={[style.image, { position: "absolute" }]}
                  id={`item.${item.id}.name`}
                > */}
                <View style={[style.image, { position: "absolute" }]}>
                  <Animated.Text
                    style={[
                      style.title,
                      { transform: [{ translateX: translateX }] },
                    ]}
                  >
                    {item.name}
                  </Animated.Text>
                </View>
                {/* </SharedElement> */}
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  image: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    width: ITEM_WIDTH * 0.8,
    color: "white",
    textTransform: "uppercase",
    margin: 10,
  },
});
