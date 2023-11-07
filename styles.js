import { StyleSheet, Dimensions } from "react-native";

const {width} = Dimensions.get('screen')

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fd0",
      alignItems: "space-around",
      justifyContent: "center",
    },
    bigText: {
      fontSize: 40,
      fontWeight: "700",
      color: 'red',
      textAlign: 'center'
    },
    punchlineBoxHidden: {
      backgroundColor: "#00d",
      width: width,
      height: 104,
      justifyContent: "center",
      alignItems: "center"
    },

    punchlineTextHidden: {
      color: "white",
      fontSize: 30,
    },
    punchlineBox: {
      width: width,
      height: 104,
      justifyContent: "center",
      alignItems: "center"
    },

    punchlineText: {
      color: "#00d",
      fontSize: 30,
    },

  });
  