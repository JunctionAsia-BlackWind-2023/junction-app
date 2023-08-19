import { View, Text, StyleSheet } from "react-native";
import { fonts } from "../font";

interface ContentScreenProps {
  title: string;
  children: React.ReactNode | undefined;
}

export default function ContentScreen(props: ContentScreenProps) {
  const { title, children } = props;
  return (
    <View>
      <View style={styles.empty}></View>
      <Text style={styles.title}>{title}</Text>
      <View>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    ...fonts.screenTitle,
    color: "#272165",
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  empty: { height: 30 },
});
