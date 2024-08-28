import { View, Text } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";
import { StyleSheet } from "react-native-web";
import { StatusBar } from "expo-status-bar";
import { wp } from "../helpers/common";
const welcome = () => {
  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={StyleSheet.container}></View>
    </ScreenWrapper>
  );
};
export default welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp(4),
  },
});
