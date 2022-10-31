import React from "react";
import { View } from "react-native";
import StyledText from "./StyledText";

const parseThousands = value => {
    return value >= 1000 ? `${Math.round(value / 100) / 10}k`: String(value);
}

const RepositoryStats = (props) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <View>
        <StyledText align = 'center' fontWeight = 'bold'>Stars</StyledText>
        <StyledText>Stars: {parseThousands(props.stargazersCount)}</StyledText>
      </View>

      <View>
        <StyledText align = 'center' fontWeight = 'bold'>forks</StyledText>
        <StyledText>forks: {parseThousands(props.forksCount)}</StyledText>
      </View>

      <View>
        <StyledText align = 'center' fontWeight = 'bold'>review</StyledText>
        <StyledText>review: {parseThousands(props.reviewCount)}</StyledText>
      </View>

      <View>
        <StyledText align = 'center' fontWeight = 'bold'>rating</StyledText>
        <StyledText>rating: {parseThousands(props.ratingAverage)}</StyledText>
      </View>
    </View>
  );
};

export default RepositoryStats