import React, { Component } from "react";
import { Button, Image, Text, View, Share } from "react-native";
import * as Print from "expo-print";

export default class Home extends Component {
  render() {
    return (
      <View
        style={{
          width: "100%",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{ width: 250, height: 400 }}
          source={{
            uri:
              "https://cdn.pixabay.com/photo/2020/11/09/22/27/garlic-5728008_960_720.jpg",
          }}
        />
        <View style={{ marginTop: 30 }} />
        <Button
          onPress={() =>
            Print.printAsync({
              // uri:
              //   "http://www.unesco.org/new/fileadmin/MULTIMEDIA/HQ/CI/CI/pdf/programme_doc_documentary_script.pdf",
              html: `<html>
              <body>
              <img src="https://cdn.pixabay.com/photo/2020/11/09/22/27/garlic-5728008_960_720.jpg" style="width:612px;height:792px;" />
              </body>
              </html>`,
            })
          }
          title="Print"
          style={{ marginTop: 20 }}
        />
        <View style={{ marginTop: 40 }} />
        <Button
          onPress={() =>
            Share.share({
              message:
                "https://cdn.pixabay.com/photo/2020/11/09/22/27/garlic-5728008_960_720.jpg",
            })
          }
          title="Share it!"
        />
      </View>
    );
  }
}
