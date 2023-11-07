import { View, Text, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { styles } from "../styles";

export default function Punchline({punchline}) {
  const [showPunchline, setShowPunchline] = useState(false);

  useEffect(() => {
    setShowPunchline(false)
  }, [punchline]);

  return (
    <>
      <TouchableOpacity onPress={() => setShowPunchline(!showPunchline)}>
        <View>
          <Text>{showPunchline ? punchline : "Show Punchline"}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}
