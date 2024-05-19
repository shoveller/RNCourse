import {View} from 'react-native';
import tw from 'twrnc';
import InputSection from "@/app/(tabs)/InputSection";
import OutputSection from "@/app/(tabs)/OutputSection";

export default function HomeScreen() {
    return (
        <View style={tw`flex-1 p-[1rem] gap-[24px]`}>
            <InputSection/>
            <OutputSection/>
        </View>
    );
}
