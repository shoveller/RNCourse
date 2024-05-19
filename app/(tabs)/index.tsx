import {View} from 'react-native';
import tw from 'twrnc';
import InputSection from "@/components/main/InputSection";
import OutputSection from "@/components/main/OutputSection";

export default function HomeScreen() {
    return (
        <View style={tw`flex-1 p-[1rem] gap-[24px]`}>
            <InputSection/>
            <OutputSection/>
        </View>
    );
}
