import { View } from "react-native";
import { Hello } from "./Hello.jsx";
import SqftToAcresView from "./SqftToAcresView";
import MowingTimeView from "./MowingTimeView";
import AirQualityView from "./AirQualityView";
import YeeHaView from "./YeeHaView";
import SlopeView from "./SlopeView";

export default function App() {
  return (
    <View>
      <Hello name="Rich" />
      <Hello />
      <Hello name="Biff" />

      <SqftToAcresView />
      <MowingTimeView />
      <AirQualityView />
      <YeeHaView />
      <SlopeView />
    </View>
  );
}


