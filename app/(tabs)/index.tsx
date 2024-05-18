import {Button, FlatList, Text, TextInput, View} from 'react-native';
import tw from 'twrnc';
import {atom, useAtom, useAtomValue, useSetAtom} from "jotai";
import {faker} from '@faker-js/faker';

const names = Array.from({length: 30}).map(() => {
    return {
        key: faker.person.fullName(),
        value: faker.person.fullName()
    }
})
const textAtom = atom('');
const goalListAtom = atom<{ key: string, value: string }[]>(names)

const useOnChangeText = () => {
    const setText = useSetAtom(textAtom);

    return (text: string) => {
        setText(text)
    }
}

const useOnPress = () => {
    const [text, setText] = useAtom(textAtom);
    const setList = useSetAtom(goalListAtom)

    return () => {
        setList(prev => {
            return [...prev, {key: text, value: text}]
        });
        setText('');
    }
}

export default function HomeScreen() {
    const value = useAtomValue(textAtom);
    const goals = useAtomValue(goalListAtom);
    const onChangeText = useOnChangeText();
    const onPress = useOnPress();

    return (
        <View style={tw`flex-1 p-[1rem] gap-[24px]`}>
            <View
                style={tw`flex-1 flex-row justify-between items-center gap-[8px] border-b border-gray-500`}>
                <TextInput onChangeText={onChangeText} onSubmitEditing={onPress}
                           style={tw`flex-1 border border-gray-300 p-[8px]`}
                           placeholder="당신의 목표!" value={value}/>
                <Button title="목표 추가하기" onPress={onPress}/>
            </View>
            <View style={tw`flex-4 justify-center items-center`}>
                <FlatList style={tw`w-[100%]`} alwaysBounceVertical data={goals} renderItem={(item) => {
                    return (
                        <View
                              style={tw`border rounded-lg bg-[#800080] m-[0.5rem] p-[0.5rem]`}>
                            <Text
                                style={tw`text-white`}
                            >{item.item.value}</Text>
                        </View>)
                }}/>
            </View>
        </View>
    );
}
