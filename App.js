import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

import { Rating, AirbnbRating } from "react-native-ratings";
import Card from "./components/Card";
import MovieDetails from "./screens/MovieDetails";

export default function App() {
  return (
    <>
      {/* <Card /> */}
      <MovieDetails />
    </>
  );
}
