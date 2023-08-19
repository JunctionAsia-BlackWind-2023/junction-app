import { View, StyleSheet } from "react-native";
import { WithLocalSvg } from "react-native-svg";
import MapSvg from "../../assets/map.svg";
import CardSvg from "../../assets/card.svg";
import RiderSvg from "../../assets/rider.svg";
import EventSvg from "../../assets/event.svg";
import ProfileSvg from "../../assets/profile.svg";

export default function TabBar() {
  return (
    <View style={styles.container}>
      <WithLocalSvg width={28} height={28} asset={MapSvg} />
      <WithLocalSvg width={28} height={28} asset={CardSvg} />
      <WithLocalSvg width={28} height={28} asset={RiderSvg} />
      <WithLocalSvg width={28} height={28} asset={EventSvg} />
      <WithLocalSvg width={28} height={28} asset={ProfileSvg} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#CEEBFF",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
