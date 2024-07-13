import * as React from "react";
import { useState, useRef } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Swiper from "react-native-swiper";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  ScrollView,
  Pressable,
  TextInput,
  Image,
  Dimensions,
  Math,
} from "react-native";
// import { SliderBox } from 'react-native-image-slider-box';

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const { width: viewportWidth } = Dimensions.get("window");

export default function Home({ navigation }) {
  const [imgActive, setImgActive] = useState(0);

  const list = [
    {
      id: "1",
      image: require("../assets/otcha.jpg"),
      name: "Chickeni",
    },
    {
      id: "2",
      image: require("../assets/parts.jpg"),
      name: "inic",
    },

    {
      id: "1",
      image: require("../assets/otcha.jpg"),
      name: "Chickeni",
    },
    {
      id: "2",
      image: require("../assets/parts.jpg"),
      name: "inic",
    },
    {
      id: "1",
      image: require("../assets/otcha.jpg"),
      name: "Chickeni",
    },
    {
      id: "2",
      image: require("../assets/parts.jpg"),
      name: "inic",
    },
    {
      id: "1",
      image: require("../assets/otcha.jpg"),
      name: "Chickeni",
    },
    {
      id: "2",
      image: require("../assets/parts.jpg"),
      name: "inic",
    },
    {
      id: "1",
      image: require("../assets/otcha.jpg"),
      name: "Chickeni",
    },
    {
      id: "2",
      image: require("../assets/parts.jpg"),
      name: "inic",
    },
    {
      id: "1",
      image: require("../assets/otcha.jpg"),
      name: "Chickeni",
    },
    {
      id: "2",
      image: require("../assets/parts.jpg"),
      name: "inic",
    },
  ];
  const image1 = require("../assets/tm.jpg");
  const image2 = require("../assets/grn.jpg");
  const image3 = require("../assets/eg.jpg");
  const slideImages = [image1, image2, image3];

  onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != imgActive) {
        setImgActive(slide);
      }
    }
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.X;
    const index = Math.round(contentOffsetX / viewportWidth);
    setActiveIndex(index);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <View
          style={{
            backgroundColor: "rgba(236, 165, 9, 0.3)",
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
          }}>
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 7,
              gap: 10,
              backgroundColor: "white",
              borderRadius: 3,
              height: 38,
              flex: 1,
              borderRadius: 20,
            }}>
            <Ionicons
              style={{ marginStart: 10 }}
              name={"search-outline"}
              size={20}
              color={"orange"}
            />
            <TextInput placeholder="Search products" />
          </Pressable>
          <Ionicons
            style={{ display: "none" }}
            name={"mic-outline"}
            size={25}
            color={"orange"}
          />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {list.map((item, index) => (
            <Pressable
              key={index}
              style={{
                margin: 10,
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Image
                style={{
                  width: 90,
                  height: 90,
                  resizeMode: "contain",
                  borderRadius: 100,
                }}
                source={item.image}
              />
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 12,
                  fontWeight: "500",
                  marginTop: 5,
                }}>
                {item?.name}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
        {/* coursel starts here */}
        <SafeAreaView style={styles.container}>
          <View style={styles.wrap}>
            <Swiper
              showsButtons={false}
              autoplay={true}
              autoplayTimeout={4} // Slide interval of 1 second
              loop={true}
              paginationStyle={{ bottom: 10 }}
              dotColor="#FFF"
              activeDotColor="#FFA500">
              {slideImages.map((image, index) => (
                <Image
                  key={image}
                  resizeMode="strech"
                  style={styles.wrap}
                  source={image}
                />
              ))}
            </Swiper>
          </View>
        </SafeAreaView>
        {/* coursel ends here */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.4,
  },
  wrapDot: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignSelf: "center",
  },
  dotActive: {
    margin: 3,
    color: "white",
  },
  dot: {
    margin: 3,
    color: "white",
  },

  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
