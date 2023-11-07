import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import JokesList from "./components/JokesList";
import Joke from "./components/Joke";
import Punchline from "./components/Punchline";
import { styles } from "./styles";

export default function App() {
  return (
    <View style={styles.container}>
      <JokesList/>
      <Joke/>
      <Punchline/>
      <StatusBar style="auto" />
    </View>
  );
}
