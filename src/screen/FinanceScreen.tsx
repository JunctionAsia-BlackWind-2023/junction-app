import { View, Text, StyleSheet, Animated } from "react-native";
import Money from "../component/atomic/Money";
import RoundButton from "../component/atomic/RoundButton";
import PayLog from "../component/atomic/PayLog";

export default function FinanceScreen() {
  return (
    <View style={styles.wrapper}>
      <View>
        <Money money={30000}></Money>
      </View>
      <View>
        <View style={styles.buttonWrapper}>
          <RoundButton color="#fff" style={styles.button}>
            <Text style={styles.settingText}>Payment settings</Text>
          </RoundButton>
          <View style={styles.emptySpace}></View>
          <RoundButton color="#06FF96" style={styles.button}>
            <Text>Pay</Text>
          </RoundButton>
        </View>
      </View>
      <Animated.View style={styles.logPaper}>
        <PayLog />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { paddingHorizontal: 28 },
  button: {
    flex: 0,
    paddingVertical: 10,
    paddingHorizontal: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  emptySpace: { flex: 1 },
  settingText: {
    width: 120,
  },
  buttonWrapper: {
    paddingVertical: 20,
    flexDirection: "row",
  },
  logPaper: {
    paddingTop: 10,
    height: 1000,
    
  },
});
