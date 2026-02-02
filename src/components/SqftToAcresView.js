
import { View, Text } from "react-native";
import { sqftToAcres } from "../sqftToAcres";

// export to use from outside this file
export default function SqftToAcresView() {

    // processing
    let nTest1 = sqftToAcres(43560);
    let nTest2 = sqftToAcres(87120);
    let nTest3 = sqftToAcres(21780);

    // output
    return (
        <View>
            <Text>43560 sq ft = {nTest1} acres</Text>
            <Text>87120 sq ft = {nTest2} acres</Text>
            <Text>21780 sq ft = {nTest3} acres</Text>
        </View>
    );
}

