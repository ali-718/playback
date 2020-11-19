import { Icon } from "native-base";
import React, { Component } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SharedElement } from "react-navigation-shared-element";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
const ITEM_HEIGHT = SCREEN_HEIGHT / 1.7;
const ITEM_WIDTH = SCREEN_WIDTH / 1.5;

class TourDetails extends Component {
  state = {
    image: "",
    name: "",
    id: "",
  };

  item = this.props.route.params.item;

  render() {
    return (
      <View style={{ width: "100%", flex: 1 }}>
        <SharedElement
          style={{ width: "100%", flex: 1 }}
          id={`item.${this.item.id}.photo`}
        >
          <View style={{ width: "100%", flex: 1 }}>
            <Image
              resizeMode="cover"
              source={{ uri: this.item.image }}
              style={{ width: "100%", flex: 1 }}
            />
          </View>
        </SharedElement>
        <View
          style={{
            width: "100%",
            height: Dimensions.get("window").height,
            position: "absolute",
            backgroundColor: "rgba(0,0,0,0.2)",
            zIndex: 1,
          }}
        >
          <SafeAreaView
            style={{
              marginTop: StatusBar.currentHeight,
              width: "100%",
              flex: 1,
            }}
          >
            <View style={{ width: "100%", padding: 10 }}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Icon
                  style={{ color: "white" }}
                  name="arrow-back"
                  type="MaterialIcons"
                />
              </TouchableOpacity>
            </View>

            {/* <SharedElement
              style={{ width: "100%", height: 100 }}
              id={`item.${this.item.id}.name`}
            > */}
            <View
              style={{
                justifyContent: "flex-end",
                padding: 10,
                width: "100%",
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "800",
                  // width: ITEM_WIDTH * 0.9,
                  color: "white",
                  textTransform: "uppercase",
                }}
              >
                {this.item.name}
              </Text>
            </View>
            {/* </SharedElement> */}
          </SafeAreaView>
        </View>
      </View>
    );
  }
}

TourDetails.sharedElements = (route) => {
  const { item } = route.params;
  //   console.log(item);
  return [
    {
      id: `item.${item.id}.photo`,
    },
    {
      id: `item.${item.id}.name`,
    },
  ];
};

export default TourDetails;
