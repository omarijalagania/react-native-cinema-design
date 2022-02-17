import { View, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
const Icons = ({ name }) => (
  <TouchableOpacity>
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        borderRadius: 200,
        width: 35,
        height: 35,
      }}
    >
      <FontAwesome5
        name={name}
        color="white"
        size={21}
        style={{ alignSelf: "center" }}
      />
    </View>
  </TouchableOpacity>
);

export default Icons;
