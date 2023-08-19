import { View, Text, StyleSheet } from "react-native";
import LogItem from "./LogItem";

export default function PayLod() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Payment log</Text>
      </View>
      <View>
        <LogItem></LogItem>
        <LogItem></LogItem>
        <LogItem></LogItem>
        <LogItem></LogItem>
        <LogItem></LogItem>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    borderRadius: 20,
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  titleWrapper: {
    borderBottomColor: "#B9B0C5",
    borderBottomWidth: 1,
    paddingVertical: 12,
    alignItems: "center",
  },
  title: {},
});
