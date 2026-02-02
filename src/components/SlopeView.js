

import { View, Text } from "react-native";
import { slope } from "../slope";


export default function SlopeView() {

    let test1 = slope(0,0,1,1);
    let test2 = slope(0,0,2,4);
    let test3 = slope(1,2,3,6);
    let test4 = slope(1,1,1,5); 

    return (
        <View>
            <Text>(0,0)-(1,1) → {test1}</Text>
            <Text>(0,0)-(2,4) → {test2}</Text>
            <Text>(1,2)-(3,6) → {test3}</Text>
            <Text>(1,1)-(1,5) → {test4}</Text>
        </View>
    );
}
