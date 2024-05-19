import tw from "twrnc";
import {Button, TextInput, View} from "react-native";
import {useAtomValue} from "jotai";
import {useOnChangeText, useOnPress} from "@/components/main/hooks";
import {textAtom} from "@/components/main/store";

const InputSection = () => {
    const value = useAtomValue(textAtom);
    const onChangeText = useOnChangeText();
    const onPress = useOnPress();
    console.log('InputSection');

    return (
        <View
            style={tw`flex-1 flex-row justify-between items-center gap-[8px] border-b border-gray-500`}>
            <TextInput onChangeText={onChangeText} onSubmitEditing={onPress}
                       style={tw`flex-1 border border-gray-300 p-[8px]`}
                       placeholder="당신의 목표!" value={value}/>
            <Button title="목표 추가하기" onPress={onPress}/>
        </View>
    )
}

export default InputSection