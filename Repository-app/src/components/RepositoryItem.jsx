import React from "react";
import { Text, View, StyleSheet, Image, Platform } from "react-native";
import theme from "../theme";
import RepositoryStats from "./RepositoryStats";
import StyledText from "./StyledText";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 5,
  },
  strong: {
    color: "#09f",
    fontWeight: "bold",
    marginBottom: 5,
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: Platform.select({
      android: theme.colors.primary,
      ios : 'orange',
      default: 'purple'
    }),
    alignSelf: "flex-start",
    borderRadius: 4,
    marginVertical: 4,
    overflow: "hidden",
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
});

const RepositoryItemHeader = (props) => (
  <View style={{ flexDirection: "row", paddingBottom: 2 }}>
    <View style={{ paddingRight: 10 }}>
      <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
    </View>
    <View style={{ flex: 1 }}>
      <StyledText fontWeight="bold"> {props.fullName}</StyledText>
      <StyledText color="secondary">{props.description}</StyledText>
      <StyledText style={styles.language}>{props.language}</StyledText>
    </View>
  </View>
);

const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <RepositoryItemHeader {...props} />
    <RepositoryStats {...props} />
  </View>
);

export default RepositoryItem;
