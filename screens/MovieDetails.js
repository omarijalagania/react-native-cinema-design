import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { AirbnbRating } from "react-native-ratings";
import { RatingBtn } from "../components/Card";
const movie = [
  {
    id: 0,
    title: "Godzilla vs Kong",
    bg: "https://www.ubuy.com/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvOTEyb1NIRjRsT0wuX0FDX1NMMTUwMF8uanBn.jpg",
    image:
      "https://cdn.shopify.com/s/files/1/0747/3829/products/mL4228_1024x1024.jpg?v=1583187141",
  },
];

const MovieDetails = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <MainImage />
      <MovieTitle />
      <View style={{ marginTop: 5 }}>
        <AirbnbRating reviews={false} size={20} />
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <RatingBtn genre="Fantasy" />
        <RatingBtn genre="Documentary" />
      </View>
      <Cast />
      <MovieInfo />
      <StoryLine />
    </ScrollView>
  );
};

export default MovieDetails;

//image component
const MainImage = () => {
  return (
    <Image
      style={{ width: "100%", height: 500 }}
      source={{
        uri: movie[0].image,
      }}
    />
  );
};

//title
const MovieTitle = () => {
  return (
    <Text
      style={{
        marginTop: 20,
        marginBottom: -25,
        alignSelf: "center",
        fontSize: 26,
        fontWeight: "normal",
      }}
    >
      {movie[0].title}
    </Text>
  );
};

//Cart

const Cast = () => {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20, marginLeft: 20 }}>
        Cast
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 10 }}>
          <Image
            style={{
              width: 130,
              height: 130,
              marginBottom: 10,
              borderRadius: 10,
            }}
            source={{
              uri: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQhVfKxsjWZM-30ElFKcETvE1VUZyZ9OV3UcxZ_5O6hQMmawqCV",
            }}
          />
          <View style={{ width: 130 }}>
            <Text style={{ fontSize: 16, justifyContent: "flex-start" }}>
              Millie Bobby Brown
            </Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <Image
            style={{
              width: 130,
              height: 130,
              marginBottom: 10,
              borderRadius: 10,
            }}
            source={{
              uri: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQhVfKxsjWZM-30ElFKcETvE1VUZyZ9OV3UcxZ_5O6hQMmawqCV",
            }}
          />
          <View style={{ width: 130 }}>
            <Text style={{ fontSize: 16, justifyContent: "flex-start" }}>
              Millie Bobby Brown
            </Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <Image
            style={{
              width: 130,
              height: 130,
              marginBottom: 10,
              borderRadius: 10,
            }}
            source={{
              uri: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQhVfKxsjWZM-30ElFKcETvE1VUZyZ9OV3UcxZ_5O6hQMmawqCV",
            }}
          />
          <View style={{ width: 130 }}>
            <Text style={{ fontSize: 16, justifyContent: "flex-start" }}>
              Millie Bobby Brown
            </Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <Image
            style={{
              width: 130,
              height: 130,
              marginBottom: 10,
              borderRadius: 10,
            }}
            source={{
              uri: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQhVfKxsjWZM-30ElFKcETvE1VUZyZ9OV3UcxZ_5O6hQMmawqCV",
            }}
          />
          <View style={{ width: 130 }}>
            <Text style={{ fontSize: 16, justifyContent: "flex-start" }}>
              Millie Bobby Brown
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

//Movie Info

const MovieInfo = () => {
  return (
    <View
      style={{
        width: "90%",
        padding: 30,
        backgroundColor: "#f5f5f5",
        alignSelf: "center",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "gray",
        marginTop: 30,
      }}
    >
      <View style={{ flexDirection: "row", marginBottom: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: "500" }}>Directed By:</Text>
        <Text style={{ fontSize: 15 }}> Adam Wingard</Text>
      </View>
      <View style={{ flexDirection: "row", marginBottom: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: "500" }}> Year: </Text>
        <Text style={{ fontSize: 15 }}> 2021</Text>
      </View>
      <View style={{ flexDirection: "row", marginBottom: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: "500" }}> Duration: </Text>
        <Text style={{ fontSize: 15 }}> 15 5min</Text>
      </View>
      <View style={{ flexDirection: "row", marginBottom: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: "500" }}> Distribtion: </Text>
        <Text style={{ fontSize: 15 }}> Warner Bros.</Text>
      </View>
    </View>
  );
};

//StoryLine

const StoryLine = () => {
  return (
    <View style={{ marginTop: 20, width: "90%" }}>
      <Text style={{ fontSize: 24, marginBottom: 20, marginLeft: 20 }}>
        Storyline
      </Text>
      <Text style={{ paddingHorizontal: 20, fontSize: 15 }}>
        The epic next chapter in the cinematic Monsterverse pits two of the
        greatest icons in motion picture history against one another - the
        fearsome Godzilla and the mighty Kong - with humanity caught in the
        balance.
      </Text>
    </View>
  );
};
