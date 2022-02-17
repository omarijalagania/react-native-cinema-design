import { LinearGradient } from "expo-linear-gradient";
import { Text, View, ImageBackground, Image, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import { AirbnbRating } from "react-native-ratings";

export default function Card() {
  const renderItem = ({ item, index }) => {
    return <CardContent windowHeight={windowHeight} />;
  };
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <ImageBackground
      source={{
        uri: "https://www.ubuy.com/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvOTEyb1NIRjRsT0wuX0FDX1NMMTUwMF8uanBn.jpg",
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
            data={[1, 2, 3, 4, 5]}
            renderItem={renderItem}
            sliderWidth={windowWidth}
            itemWidth={250}
            firstItem={1}
          />
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

const CardContent = ({ windowHeight }) => {
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
      <CardImage />
      <View style={{ padding: -70 }}>
        <CardTitle />
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

const CardImage = () => {
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
        uri: "https://cdn.shopify.com/s/files/1/0747/3829/products/mL4228_1024x1024.jpg?v=1583187141",
      }}
    />
  );
};

const CardTitle = () => {
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
      Godzilla vs Kong
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
