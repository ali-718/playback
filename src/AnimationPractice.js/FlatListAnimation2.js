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

export default class FlatListAnimation2 extends Component {
  scrollX = new Animated.Value(0);

  render() {
    return (
      <SafeAreaView
        style={{ width: "100%", flex: 1, marginTop: StatusBar.currentHeight }}
      >
        <View style={{ width: "100%", alignItems: "center", height: 500 }}>
          <Animated.FlatList
            style={{
              width: SCREEN_WIDTH,
              flex: 1,
              paddingBottom: 40,
            }}
            ListFooterComponent={() => <View style={{ marginTop: 40 }} />}
            keyExtractor={(item) => `${item.id}`}
            data={data}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      x: this.scrollX,
                    },
                  },
                },
              ],
              { useNativeDriver: true }
            )}
            horizontal
            snapToInterval={SCREEN_WIDTH}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            // ListHeaderComponent={() => {
            //   //   return (
            //   //     <FlatList
            //   //       keyExtractor={(item) => `${item.id}`}
            //   //       data={data}
            //   //       scrollEnabled={false}
            //   //       renderItem={({ item, index }) => {
            //   //         let animatedNameTransform = this.scrollX.interpolate({
            //   //           inputRange: [
            //   //             (index - 1) * SCREEN_WIDTH,
            //   //             index * SCREEN_WIDTH,
            //   //             (index + 1) * SCREEN_WIDTH,
            //   //           ],
            //   //           outputRange: [100, 0, 100],
            //   //         });
            //   //         return (
            //   //           <Animated.Text
            //   //             style={{
            //   //               marginBottom: 20,
            //   //               transform: [{ translateY: animatedNameTransform }],
            //   //             }}
            //   //           >
            //   //             {item.name}
            //   //           </Animated.Text>
            //   //         );
            //   //       }}
            //   //     />
            //   //   );
            // }}
            renderItem={({ item, index }) => {
              let animatedOpacity = this.scrollX.interpolate({
                inputRange: [
                  (index - 1) * SCREEN_WIDTH,
                  index * SCREEN_WIDTH,
                  (index + 1) * SCREEN_WIDTH,
                ],
                outputRange: [0, 1, 0],
              });

              let animatedScale = this.scrollX.interpolate({
                inputRange: [
                  (index - 1) * SCREEN_WIDTH,
                  index * SCREEN_WIDTH,
                  (index + 1) * SCREEN_WIDTH,
                ],
                outputRange: [0, 1, 0],
              });

              return (
                <Animated.View
                  style={{
                    width: SCREEN_WIDTH,
                    height: 500,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Animated.Image
                    style={{
                      width: 200,
                      height: 200,
                      opacity: animatedOpacity,
                      transform: [{ scale: animatedScale }],
                    }}
                    source={{ uri: item.image }}
                  />
                </Animated.View>
              );
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}
