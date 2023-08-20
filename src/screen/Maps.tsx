import { StyleSheet, View } from "react-native";
import InterativeMap from "../component/InteractiveMap";

export default function Maps() {
  return (
    <View style={styles.wrapper}>
      <InterativeMap />
    </View>
  );
}
const styles = StyleSheet.create({ wrapper: { flex: 1 } });
