import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View, ImageBackground, Image, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import { AirbnbRating } from "react-native-ratings";

const movies = [
  {
    id: 0,
    title: "Godzilla vs Kong",
    bg: "https://www.ubuy.com/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvOTEyb1NIRjRsT0wuX0FDX1NMMTUwMF8uanBn.jpg",
    image:
      "https://cdn.shopify.com/s/files/1/0747/3829/products/mL4228_1024x1024.jpg?v=1583187141",
  },
  {
    id: 1,
    title: "Dune",
    bg: "https://external-preview.redd.it/DXHFjx_AqqNgg5EfU5_v19s8OAwC9HlIMwrHczw4bDM.jpg?auto=webp&s=b6f45af9229d5d10aa8f4c1af2d269dcafdaa1e4",
    image:
      "https://i.pinimg.com/736x/10/17/d6/1017d65e8ce5f87675b63e8667053e98.jpg",
  },
  {
    id: 2,
    title: "The Matrix",
    bg: "https://www.themoviedb.org/t/p/original/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
    image:
      "https://cdn.europosters.eu/image/1300/art-photo/matrix-neo-trinity-and-morpheus-i106922.jpg",
  },
  {
    id: 3,
    title: "insidious 2",
    bg: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a0c93260777239.5a58a635ccb2f.jpg",
    image: "https://picfiles.alphacoders.com/101/101501.jpg",
  },
];

export default function Card() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [bgChange, setBgChange] = useState({});

  useEffect(() => {
    setBgChange(movies.filter((movie) => movie.id === activeIndex));
  }, [activeIndex]);

  const renderItem = ({ item, index }) => {
    return <CardContent item={item} windowHeight={windowHeight} />;
  };
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <ImageBackground
      source={{
        uri: bgChange[0]?.bg,
      }}
      resizeMode="cover"
      style={{
        height: "100%",
        width: "100%",
        flex: 1,
        zIndex: -1,
      }}
    >
      <LinearGradient
        colors={["rgba(0,0,0,0.3)", "rgba(255,255,255,1)"]}
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        <View style={{ position: "absolute" }}>
          <Carousel
            data={movies}
            renderItem={renderItem}
            sliderWidth={windowWidth}
            itemWidth={windowWidth / 1.5}
            firstItem={1}
            onSnapToItem={(index) => setActiveIndex(index)}
          />
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

const CardContent = ({ windowHeight, item }) => {
  return (
    <View
      style={{
        width: 250,
        height: 550,
        backgroundColor: "#f5f5f5",
        borderRadius: 400,
        justifyContent: "space-between",
        overflow: "hidden",
        marginBottom: windowHeight / 20,
      }}
    >
      <CardImage item={item} />
      <View style={{ padding: -70 }}>
        <CardTitle item={item} />
        <AirbnbRating reviews={false} size={20} />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <RatingBtn genre="Action" />
        <RatingBtn genre="Fantasy" />
      </View>
      <BookNow />
    </View>
  );
};

const CardImage = ({ item }) => {
  return (
    <Image
      style={{
        width: 220,
        height: 280,
        alignSelf: "center",
        borderRadius: 150,
        marginTop: 15,
      }}
      source={{
        uri: item.image,
      }}
    />
  );
};

const CardTitle = ({ item }) => {
  return (
    <Text
      style={{
        marginTop: 0,
        marginBottom: -25,
        alignSelf: "center",
        fontSize: 21,
        fontWeight: "bold",
      }}
    >
      {item.title}
    </Text>
  );
};

const RatingBtn = ({ genre }) => {
  return (
    <View
      style={{
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 1,
        width: "30%",
        borderRadius: 100,

        marginTop: 20,
      }}
    >
      <Text style={{ alignSelf: "center" }}>{genre}</Text>
    </View>
  );
};

const BookNow = () => {
  return (
    <View
      style={{
        width: 200,
        height: 50,
        marginTop: 7,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        borderTopLeftRadius: 1000,
        borderTopRightRadius: 1000,
        alignSelf: "center",
      }}
    >
      <Text style={{ color: "white", fontSize: 14 }}>Book Now</Text>
    </View>
  );
};
