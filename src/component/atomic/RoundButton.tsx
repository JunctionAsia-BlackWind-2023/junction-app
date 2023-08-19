import { useState } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

interface RoundButtonProps {
  color: string;
  children: React.ReactNode | undefined;
  style: ViewStyle;
}

export default function RoundButton(props: RoundButtonProps) {
  const { color, children, style } = props;

  const [width, setWidth] = useState(0);
  const styles = StyleSheet.create({
    wrapper: {
      borderRadius: width,
    },
  });
  return (
    <View
      onLayout={(event) => {
        setWidth(event.nativeEvent.layout.width);
      }}
      style={{
        minHeight: 40,
        minWidth: 100,
        backgroundColor: color,
        ...styles.wrapper,
        ...style,
      }}
    >
      {children}
    </View>
  );
}
