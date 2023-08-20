import { View, StyleSheet } from "react-native";
import { WithLocalSvg } from "react-native-svg";
import MapSvg from "../../assets/map.svg";
import CardSvg from "../../assets/card.svg";
import RiderSvg from "../../assets/rider.svg";
import EventSvg from "../../assets/event.svg";
import ProfileSvg from "../../assets/profile.svg";

const tabs = [MapSvg, CardSvg, RiderSvg, EventSvg, ProfileSvg];

interface TabBarProps {
  setIdx: (value: number) => void;
}

export default function TabBar(props: TabBarProps) {
  const { setIdx } = props;
  return (
    <View style={styles.container}>
      {tabs.map((v, i) => (
        <View
          onTouchEndCapture={() => {
            setIdx(i);
          }}
        >
          <WithLocalSvg width={28} height={28} asset={v} />
        </View>
      ))}
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
