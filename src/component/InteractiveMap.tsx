import { View, StyleSheet } from "react-native";
import ToggleBar from "./atomic/ToggleBar";
import { useState } from "react";
import Map from "./Map";

export default function InterativeMap() {
  const [visibleFriends, setVisibleFriends] = useState(false);
  const [visibleAttractions, setVisibleAttractoins] = useState(false);

  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <Map></Map>
      </View>
      <View>
        <ToggleBar
          text="Show my friends"
          onChange={setVisibleFriends}
        ></ToggleBar>
        <ToggleBar
          text="Show attractions"
          onChange={setVisibleAttractoins}
        ></ToggleBar>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});
