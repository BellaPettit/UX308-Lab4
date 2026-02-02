import { View } from "react-native";
import { Hello } from "./Hello.jsx";
import SqftToAcresView from "./SqftToAcresView";

export default function App() {
  return (
    <View>
      <Hello name="Rich" />
      <Hello />
      <Hello name="Biff" />

      <SqftToAcresView />
    </View>
  );
}


