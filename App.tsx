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
import { LinearGradient } from 'expo-linear-gradient';
export default function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <LinearGradient colors={['rgba(87, 255, 255, 0) 0%', '#2562FF']}style={styles.container}>
        <ContentScreen title="Finance">
          <FinanceScreen></FinanceScreen>
        </ContentScreen>
      </LinearGradient>
      <View style={styles.tabbar}>
        <TabBar />
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
    backgroundColor: "linear-gradient(180deg, rgba(87, 255, 255, 0) 0%, #2562FF 93.23%)",
  },
  tabbar: {
    minHeight: 80,
  },
});
