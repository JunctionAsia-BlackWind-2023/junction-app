import { FlatList, View, StyleSheet, Text } from "react-native";
import AquaDropJpg from "../../assets/card/aqua_drop.jpg";
import JetSlideJpg from "../../assets/card/jet_slide.jpg";
import RacingSlideJpg from "../../assets/card/racing_slide.jpg";
import RaftingSlideJpg from "../../assets/card/rafting_slide.jpg";
import TornadoSlideJpg from "../../assets/card/tornado_slide.jpg";
import WildSurfindJpg from "../../assets/card/wild_surfing.jpg";

const imgs = [
  AquaDropJpg,
  JetSlideJpg,
  RacingSlideJpg,
  RaftingSlideJpg,
  TornadoSlideJpg,
  WildSurfindJpg,
];

export default function AmusementScreen() {
  return (
    <View style={{}}>
      <FlatList
        data={[null]}
        renderItem={() => (
          <View style={styles.paper}>
            <Text>asdf</Text>
          </View>
        )}
      ></FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  paper: {
    borderColor: "#D9D0E3",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
});
