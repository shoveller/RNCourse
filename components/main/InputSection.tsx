import tw from "twrnc";
import {Button, TextInput, View} from "react-native";
import {useAtom, useSetAtom} from "jotai";
import {goalListAtom, textAtom} from "@/components/main/store";
import {useCallback} from "react";

const InputSection = () => {
    const [value, setValue] = useAtom(textAtom);
    const setGoals = useSetAtom(goalListAtom);
    const onPress = () => {
        setGoals(prev => {
            return [{
                key: `${new Date().getTime()}`,
                value
            }]
        })
        setValue('');
    };

    return (
        <View
            style={tw`flex-1 flex-row justify-between items-center gap-[8px] border-b border-gray-500`}>
            <TextInput
                       style={tw`flex-1 border border-gray-300 p-[8px]`}
                       placeholder="당신의 목표!"/>
            <Button title="목표 추가하기" onPress={onPress}/>
        </View>
    )
}

export default InputSection
