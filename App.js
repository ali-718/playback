import React, { Component } from "react";
import { Text, View } from "react-native";
import { Audio } from "expo-av";
import Slider from "react-native-slider";
import Home from "./src/screens/Home";
import "./src/config/databseConfig";
import Router from "./Router";

export default class App extends Component {
  state = {
    buffered: 0,
    total: 0,
  };

  // async componentDidMount() {
  //   this.soundObject = new Audio.Sound();

  //   this.getStatus();

  //   const music = await this.soundObject.loadAsync(
  //     { uri: sound },
  //     { shouldPlay: true },
  //     true
  //   );

  //   // console.log(music);
  // }

  // getStatus = async () => {
  //   setInterval(async () => {
  //     const status = await this.soundObject.getStatusAsync();
  //     this.setState({
  //       total: status.durationMillis,
  //       buffered: status.positionMillis,
  //     });
  //     // console.log(status);
  //   }, 600);
  // };

  render() {
    return (
      <>
        {/* <View style={{ marginTop: 50 }} />
        <Slider
          maximumValue={this.state.total}
          value={this.state.buffered}
          onValueChange={(value) => {
            const position = parseInt(value);
            console.log(parseInt(value));
            this.soundObject.setPositionAsync(position);
          }}
        /> */}
        <Router />
      </>
    );
  }
}
