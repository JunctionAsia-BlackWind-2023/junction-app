import { useEffect, useRef, useState } from "react";
import { StyleSheet, Animated } from "react-native";

export interface ToggleSwtichProps {
  onChange: (value: boolean) => any;
}

export default function ToggleSwitch(props: ToggleSwtichProps) {
  const { onChange } = props;
  const [on, setOn] = useState(0);
  const [toggleWidth, setToggleWidth] = useState(0);
  const [buttonWidth, setButtonWidth] = useState(0);
  const toggleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (on) {
      Animated.timing(toggleAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(toggleAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
    onChange(on == 1); 
  }, [on]);

  return (
    <Animated.View
      style={{
        ...styles.wrapper,
        ...{
          backgroundColor: toggleAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ["#ccc", "#95eb6e"],
          }),
        },
      }}
      onLayout={(event) => {
        setToggleWidth(event.nativeEvent.layout.width);
      }}
      onTouchStart={() => {
        setOn(on ? 0 : 1);
      }}
    >
      <Animated.View
        style={{
          ...styles.button,
          ...{
            transform: [
              {
                translateX: toggleAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [4, toggleWidth - buttonWidth - 4],
                }),
              },
            ],
          },
        }}
        onLayout={(event) => {
          setButtonWidth(event.nativeEvent.layout.width);
        }}
      ></Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    minHeight: 32,
    minWidth: 71,
    borderRadius: 1000,
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#FFF",
    width: 24,
    height: 24,
    borderRadius: 24,
  },
});
