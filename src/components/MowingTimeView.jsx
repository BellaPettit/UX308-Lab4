
import { View, Text } from "react-native";
import { mowingTime } from "../mowingTime";

export default function MowingTimeView() {

    // processing
    let nTest1 = mowingTime(5, 10, 2);
    let nTest2 = mowingTime(8, 12, 3);
    let nTest3 = mowingTime(15, 20, 5);

    // output
    return (
        <View>
            <Text>5m x 10m lawn at 2 m²/min = {nTest1} minutes</Text>
            <Text>8m x 12m lawn at 3 m²/min = {nTest2} minutes</Text>
            <Text>15m x 20m lawn at 5 m²/min = {nTest3} minutes</Text>
        </View>
    );
}
