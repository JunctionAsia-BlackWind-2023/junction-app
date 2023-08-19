import { View, StyleSheet, Text } from "react-native";
import { fonts } from "../../font";

export interface MoneyProps {
  money: number;
}

export default function Money(props: MoneyProps) {
  const { money } = props;
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Money spent</Text>
      <View style={styles.textWrapper}>
        <Text style={styles.money}>{money}</Text>
        <Text style={styles.krw}>KRW</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    minHeight: 74,
    paddingHorizontal: 18,
    borderRadius: 74,
    alignItems: "center",
    backgroundColor: "#0008C980",
    flexDirection: "row",
  },
  textWrapper: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  text: {
    flex: 1,
    color: "#fff",
  },
  money: {
    flex: 0,
    color: "#fff",
    ...fonts.bigTitle,
  },
  krw: {
    color: "#fff",
    flex: 0,
    ...fonts.smallDescr,
  },
});
