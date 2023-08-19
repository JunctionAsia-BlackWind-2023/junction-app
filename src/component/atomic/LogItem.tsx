import { View, Text, StyleSheet } from "react-native";
import { WithLocalSvg } from "react-native-svg";
import MealSvg from "../../../assets/meal.svg";
import { fonts } from "../../font";

export default function LogItem() {
  return (
    <View style={styles.wrapper}>
      <WithLocalSvg width={41} height={41} asset={MealSvg}></WithLocalSvg>
      <Text style={styles.name}>Mc Donald's</Text>
      <Text style={styles.amount}>6000</Text>
      <Text style={styles.currency}>KRW</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 18,
    alignItems: "center",
    gap: 4,
  },
  name: { ...fonts.middleTitle, flex: 1 },
  amount: { ...fonts.middleTitle },
  currency: { ...fonts.smallDescr },
});
