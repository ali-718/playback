// import React, { Component } from "react";
// import {
//   SafeAreaView,
//   StatusBar,
//   Text,
//   View,
//   Image,
//   ScrollView,
//   TouchableOpacity,
// } from "react-native";
// import * as f from "firebase";
// import * as Print from "expo-print";

// export default class Home extends Component {
//   state = {
//     data: [],
//   };

//   componentDidMount() {
//     f.default
//       .database()
//       .ref("songs")
//       .once("value")
//       .then((res) => {
//         res.forEach((snapshot) => {
//           this.setState({
//             data: [...this.state.data, { id: snapshot.key, ...snapshot.val() }],
//           });
//         });

//         console.log(res);
//       });
//   }

//   render() {
//     return (
//       <SafeAreaView
//         style={{ width: "100%", flex: 1, marginTop: StatusBar.currentHeight }}
//       >
//         <ScrollView style={{ width: "100%", flex: 1 }}>
//           <View style={{ width: "100%", flex: 1, padding: 15 }}>
//             <View style={{ width: "100%" }}>
//               <Text
//                 style={{ fontSize: 26, fontWeight: "bold", color: "black" }}
//               >
//                 Home
//               </Text>
//             </View>

//             <View
//               style={{ width: "100%", alignItems: "center", marginTop: 20 }}
//             >
//               {this.state.data.map((item, i) => (
//                 <TouchableOpacity
//                   // onPress={() =>
//                   //   Print.printAsync({
//                   //     uri:
//                   //       "https://cdn.pixabay.com/photo/2020/04/04/17/06/street-5003132_960_720.jpg",
//                   //   })
//                   // }
//                   onPress={() =>
//                     this.props.navigation.navigate("Detail", { data: item })
//                   }
//                   key={i}
//                   style={{ width: "100%", marginTop: 20 }}
//                 >
//                   <View style={{ width: "100%", flexDirection: "row" }}>
//                     <View style={{ paddingHorizontal: 10 }}>
//                       <Image
//                         source={{ uri: item.image }}
//                         style={{ width: 50, height: 50, borderRadius: 10 }}
//                       />
//                     </View>
//                     <View style={{ flex: 1, justifyContent: "space-between" }}>
//                       <Text
//                         style={{
//                           fontSize: 15,
//                           fontWeight: "bold",
//                           color: "black",
//                           marginTop: 2,
//                         }}
//                       >
//                         {item.name}
//                       </Text>
//                       <Text
//                         style={{
//                           fontSize: 12,
//                           fontWeight: "300",
//                           color: "gray",
//                           marginBottom: 5,
//                         }}
//                       >
//                         {item.singer?.name}
//                       </Text>
//                     </View>
//                   </View>
//                 </TouchableOpacity>
//               ))}
//             </View>
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     );
//   }
// }

// import React, { Component } from "react";
// import { Button, Image, Text, View } from "react-native";
// import * as Print from "expo-print";

// export default class Home extends Component {
//   render() {
//     return (
//       <View
//         style={{
//           width: "100%",
//           flex: 1,
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <Image
//           style={{ width: 250, height: 400 }}
//           source={{
//             uri:
//               "https://cdn.pixabay.com/photo/2020/11/09/22/27/garlic-5728008_960_720.jpg",
//           }}
//         />
//         <View style={{ marginTop: 30 }} />
//         <Button
//           onPress={() =>
//             Print.printAsync({
//               // uri:
//               //   "http://www.unesco.org/new/fileadmin/MULTIMEDIA/HQ/CI/CI/pdf/programme_doc_documentary_script.pdf",
//               html: `<html>
//               <body>
//               <img src="https://cdn.pixabay.com/photo/2020/11/09/22/27/garlic-5728008_960_720.jpg" style="width:612px;height:792px;" />
//               </body>
//               </html>`,
//             })
//           }
//           title="Print"
//           style={{ marginTop: 20 }}
//         />
//       </View>
//     );
//   }
// }

import React, { Component } from "react";
import {
  Dimensions,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from "react-native";

export default class Home extends Component {
  state = {
    index: 0,
  };

  value = new Animated.Value(0);

  onclickView = (index) => {
    Animated.spring(this.value, {
      // toValue: index * 3,
      toValue: index * (Dimensions.get("window").width / 6),
      // tension: 1,
      bounciness: 10,
    }).start(() => {
      console.log(this.value);
    });

    // Animated.timing(this.value, {
    //   duration: 100,
    //   toValue: index * (Dimensions.get("window").width / 6),
    //   eas
    // }).start(() => {
    //   console.log(this.value);
    // });
  };

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
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            height: 50,
            // bottom: 100,
          }}
        >
          <Animated.View
            style={{
              height: 50,
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",

              width: Dimensions.get("window").width / 6,
              transform: [{ translateX: this.value }],
            }}
          >
            <View
              style={{
                backgroundColor: "red",
                height: 40,
                width: 40,
                borderRadius: 100,
              }}
            ></View>
            {/* <Text style={{ color: "red" }}>ali</Text> */}
          </Animated.View>
          <TouchableOpacity
            onPress={() => this.onclickView(0)}
            style={{
              height: 50,
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              // backgroundColor: "green",
            }}
          >
            <Text>ali</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onclickView(1)}
            style={{
              height: 50,
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>ali</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onclickView(2)}
            style={{
              height: 50,
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>ali</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onclickView(3)}
            style={{
              height: 50,
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>ali</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onclickView(4)}
            style={{
              height: 50,
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>ali</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onclickView(5)}
            style={{
              height: 50,
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>ali</Text>
          </TouchableOpacity>
        </View>
        {/* <Text> textInComponent </Text> */}
      </View>
    );
  }
}
