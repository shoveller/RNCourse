import {View, Button} from 'react-native';
import tw from 'twrnc';
import InputSection from "@/components/main/InputSection";
import OutputSection from "@/components/main/OutputSection";
import {useSetAtom} from "jotai";
import {modalAtom} from "@/components/main/store";

export default function HomeScreen() {
    const open = useSetAtom(modalAtom);

    return (
        <View style={tw`flex-1 p-[1rem] gap-[24px]`}>
            <View style={tw`flex-1 justify-center items-center`}>
                <Button title="새로운 목표 추가하기" color="red" onPress={() => open(true)} />
            </View>
            <InputSection/>
            <OutputSection/>
        </View>
    );
}
