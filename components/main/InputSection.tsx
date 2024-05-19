import tw from "twrnc";
import {Button, Modal, TextInput, View} from "react-native";
import {useAtom, useSetAtom} from "jotai";
import {goalListAtom, modalAtom, textAtom} from "@/components/main/store";

const InputSection = () => {
    const [value, setValue] = useAtom(textAtom);
    const setGoals = useSetAtom(goalListAtom);
    const [visible, setVisible] = useAtom(modalAtom)
    const onPress = () => {
        setGoals(prev => {
            return [...prev, {
                key: `${new Date().getTime()}`,
                value
            }]
        })
        setValue('');
        setVisible(false);
    };

    return (
        <Modal visible={visible} animationType="slide" style={tw`w-[100%]`}>
            <View
                style={tw`flex-1 justify-center gap-[8px] border-b border-gray-500 m-4`}>
                <TextInput
                    style={tw`border border-gray-300 p-[8px]`}
                    placeholder="당신의 목표!" onChangeText={setValue}/>
                <View style={tw`flex-row justify-center items-center gap-[0.5rem]`}>
                    <View style={tw`w-[40%]`}><Button title="목표 추가하기" onPress={onPress}/></View>
                    <View style={tw`w-[40%]`}><Button title="닫기" onPress={() => setVisible(false)}/></View>
                </View>
            </View>
        </Modal>
    )
}

export default InputSection
