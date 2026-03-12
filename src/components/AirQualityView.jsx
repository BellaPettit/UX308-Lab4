

import { View, Text } from "react-native";
import { airQuality } from "../airQuality";

// export to use from outside this file
export default function AirQualityView() {

    let test1 = airQuality(30);
    let test2 = airQuality(75);
    let test3 = airQuality(125);
    let test4 = airQuality(175);
    let test5 = airQuality(250);
    let test6 = airQuality(350);

    return (
        <View>
            <Text>AQI 30 → {test1}</Text>
            <Text>AQI 75 → {test2}</Text>
            <Text>AQI 125 → {test3}</Text>
            <Text>AQI 175 → {test4}</Text>
            <Text>AQI 250 → {test5}</Text>
            <Text>AQI 350 → {test6}</Text>
        </View>
    );
}
