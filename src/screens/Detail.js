import { Icon } from "native-base";
import React, { Component } from "react";
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  PanResponder,
  Animated,
  Dimensions,
  ScrollView,
  Platform,
} from "react-native";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

export default class Detail extends Component {
  state = {
    data: {},
    pan: new Animated.ValueXY(),
    limited: false,
    flexDirection: "row",
  };

  animatedHeight = new Animated.Value(100);

  panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: (e, gesture) => {
      this.animation.extractOffset();
    },
    onPanResponderMove: (e, gesture) => {
      this.animation.setValue({ x: 0, y: gesture.dy });
    },
    onPanResponderRelease: (e, gesture) => {
      if (gesture.dy < 0) {
        Animated.spring(this.animation.y, {
          toValue: -SCREEN_HEIGHT + 90,
          tension: 1,
          useNativeDriver: false,
        }).start(() => {
          this.setState({ flexDirection: "column" });
        });
        this.setState({ limited: true });
        return;
      }
      if (gesture.dy > 0) {
        this.setState({ limited: false });
        Animated.spring(this.animation.y, {
          toValue: SCREEN_HEIGHT - 90,
          tension: 1,
          useNativeDriver: false,
        }).start(() => {
          this.setState({ flexDirection: "row" });
        });
        return;
      }
    },
  });

  componentDidMount() {
    const data = this.props.route.params.data;
    console.log(StatusBar.length);
    this.setState({ data });
  }

  animation = new Animated.ValueXY({
    x: 0,
    y: Platform.OS == "android" ? SCREEN_HEIGHT - 90 : SCREEN_HEIGHT - 90,
  });
  arrowOpacity = new Animated.Value(0);

  render() {
    const animatedHeight = {
      transform: this.animation.getTranslateTransform(),
    };

    const animatedImageHeight = this.animation.y.interpolate({
      inputRange: [0, SCREEN_HEIGHT - 90],
      outputRange: [200, 50],
      extrapolate: "clamp",
    });

    const animatedMarginLeft = this.animation.y.interpolate({
      inputRange: [0, SCREEN_HEIGHT - 90],
      outputRange: [SCREEN_WIDTH / 2 - 110, 0],
      extrapolate: "clamp",
    });

    const animatedHeaderHeight = this.animation.y.interpolate({
      inputRange: [0, SCREEN_HEIGHT - 90],
      outputRange: [SCREEN_HEIGHT / 2, 90],
      extrapolate: "clamp",
    });

    const animatedMusicViewHeight = this.animation.y.interpolate({
      inputRange: [0, SCREEN_HEIGHT - 90],
      outputRange: [SCREEN_HEIGHT, 90],
      extrapolate: "clamp",
    });

    const animatedTitleOpacity = this.animation.y.interpolate({
      inputRange: [0, SCREEN_HEIGHT - 140],
      outputRange: [0, 1],
      extrapolate: "clamp",
    });

    const animatedViewOpacity = this.animation.y.interpolate({
      inputRange: [0, SCREEN_HEIGHT - 140],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });

    return (
      <SafeAreaView
        style={{
          width: "100%",
          flex: 1,
          marginTop: StatusBar.currentHeight,
          overflow: "hidden",
        }}
      >
        <Animated.View
          style={[
            {
              width: "100%",
              // flex: 1,
              // marginVertical: 20,
              // height: this.animatedHeight,
              backgroundColor: "white",
              alignItems: "center",
              height: animatedMusicViewHeight,
            },
            animatedHeight,
          ]}
          {...this.panResponder.panHandlers}
        >
          <ScrollView scrollEnabled={false} style={{ width: "100%", flex: 1 }}>
            {/* <Animated.View
            style={{
              width: "100%",
              alignItems: "center",
              opacity: this.arrowOpacity,
            }}
          >
            <Icon style={{ fontSize: 25 }} name="down" type="AntDesign" />
          </Animated.View> */}
            <Animated.View
              style={{
                width: "100%",
                flexDirection: "row",
                padding: 10,
                height: animatedHeaderHeight,
                alignItems: "center",
              }}
            >
              <Animated.View
                style={{
                  width: animatedImageHeight,
                  height: animatedImageHeight,
                  marginLeft: animatedMarginLeft,
                }}
              >
                <Image
                  source={{ uri: this.state.data.image }}
                  style={{
                    flex: 1,
                  }}
                />
              </Animated.View>
              <Animated.View style={{ flex: 1, opacity: animatedTitleOpacity }}>
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", marginLeft: 10 }}
                >
                  {this.state.data.name}
                </Text>
                <Text style={{ fontSize: 13, marginLeft: 10, marginTop: 10 }}>
                  {this.state.data?.singer?.name}
                </Text>
              </Animated.View>
            </Animated.View>

            <Animated.View
              style={{
                width: "100%",
                alignItems: "center",
                opacity: animatedViewOpacity,
                // flex: animatedViewOpacity,
                // height: animatedViewOpacity,
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                {this.state.data.name}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "300",
                  color: "gray",
                  marginTop: 5,
                }}
              >
                {this.state.data?.singer?.name}
              </Text>
            </Animated.View>

            {/* <View
            style={{
              width: "100%",
              alignItems: "center",
              // flex: 1,
              justifyContent: "center",
            }}
          >
            <View
              style={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 9,
                },
                shadowOpacity: 0.5,
                shadowRadius: 12.35,
                elevation: 17,
              }}
            >
              <Image
                style={{
                  width: 300,
                  height: 300,
                  borderRadius: 20,
                }}
                source={{ uri: this.state.data.image }}
              />
            </View>
            <View
              style={{ width: "100%", alignItems: "center", marginTop: 50 }}
            >
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                {this.state.data.name}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "300",
                  color: "gray",
                  marginTop: 5,
                }}
              >
                {this.state.data?.singer?.name}
              </Text>
            </View>
          </View> */}
          </ScrollView>
        </Animated.View>
      </SafeAreaView>
    );
  }
}
