import { View, Text, StyleSheet } from "react-native";
import ToggleSwitch from "./ToggleSwitch";

export interface ToggleBarProps {
  text: string;
  onChange: (value: boolean) => any;
}

export default function ToggleBar(props: ToggleBarProps) {
  const { text, onChange } = props;
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{text}</Text>
      <ToggleSwitch onChange={onChange}></ToggleSwitch>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    borderTopColor: "#CAC4D3",
    borderTopWidth: 1,
    minHeight: 58,
  },
  text: { flex: 1 },
});
