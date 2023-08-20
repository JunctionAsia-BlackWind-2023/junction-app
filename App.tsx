import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Platform,
} from "react-native";
import TabBar from "./src/component/TabBar";
import ContentScreen from "./src/component/ContentScreen";
import FinanceScreen from "./src/screen/FinanceScreen";
import { LinearGradient } from "expo-linear-gradient";
import Maps from "./src/screen/Maps";
import { useState } from "react";
import PersonalScreen from "./src/screen/PersonalScreen";
import EventScreen from "./src/screen/EventScreen";
import AmusementScreen from "./src/screen/AmusementScreen";

const Routes = [
  { name: "Maps", comp: Maps },
  { name: "Finace", comp: FinanceScreen },
  { name: "Amusement", comp: AmusementScreen },
  { name: "Events", comp: EventScreen },
  { name: "Personal", comp: PersonalScreen },
];

export default function App() {



  const [idx, setIdx] = useState(0);

  return (
    <SafeAreaView style={styles.wrapper}>
      <LinearGradient
        colors={["rgba(87, 255, 255, 0) 0%", "#2562FF"]}
        style={styles.container}
      >
        <ContentScreen title={Routes[idx].name}>{Routes[idx].comp()}</ContentScreen>
      </LinearGradient>
      <View style={styles.tabbar}>
        <TabBar setIdx={setIdx}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 1,
  },
  container: {
    flex: 1,
    backgroundColor:
      "linear-gradient(180deg, rgba(87, 255, 255, 0) 0%, #2562FF 93.23%)",
  },
  tabbar: {
    minHeight: 80,
  },
});
