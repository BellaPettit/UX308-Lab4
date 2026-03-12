// YeeHaView.js

import { View, Text } from "react-native";
import { yee_ha } from "../yeeHa";

// export to use from outside this file
export default function YeeHaView() {

    let test1 = yee_ha(3);
    let test2 = yee_ha(7);
    let test3 = yee_ha(21);
    let test4 = yee_ha(2);

    return (
        <View>
            <Text>3 → {test1}</Text>
            <Text>7 → {test2}</Text>
            <Text>21 → {test3}</Text>
            <Text>2 → {test4}</Text>
        </View>
    );
}
