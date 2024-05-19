import tw from "twrnc";
import {FlatList, Pressable, Text, View} from "react-native";
import {useAtomValue} from "jotai";
import {useOnDelete} from "@/components/main/hooks";
import {goalListAtom} from "@/components/main/store";

const OutputSection = () => {
    const goals = useAtomValue(goalListAtom);
    const onDelete = useOnDelete();

    return (
        <View style={tw`flex-4 justify-center items-center`}>
            <FlatList style={tw`w-[100%]`} alwaysBounceVertical data={goals} renderItem={(item) => {
                return (
                    <Pressable onPress={() => onDelete(item.item.key)}>
                        <View
                            style={tw`border rounded-lg bg-[#800080] m-[0.5rem] p-[0.5rem]`}>
                            <Text
                                style={tw`text-white`}
                            >{item.item.value}</Text>
                        </View>
                    </Pressable>)
            }}/>
        </View>
    )
}

export default OutputSection
