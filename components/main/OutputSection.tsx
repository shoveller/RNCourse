import tw from "twrnc";
import {FlatList, Pressable, Text, View} from "react-native";
import {useAtom} from "jotai";
import {goalListAtom} from "@/components/main/store";

const OutputSection = () => {
    const [goals, setGoals] = useAtom(goalListAtom);
    const onDelete = (key: string) => {
        setGoals(goals.filter(item => {
            return item.key !== key;
        }))
    }

    return (
        <View style={tw`flex-4 justify-center items-center`}>
            <FlatList style={tw`w-[100%]`} alwaysBounceVertical data={goals} renderItem={(item) => {
                return (
                    <View>
                        <Pressable android_ripple={{color: '#800080'}} onPress={() => onDelete(item.item.key)}>
                            <View
                                style={tw`border rounded-lg bg-[#800080] m-[0.5rem]`}>
                                <Text
                                    style={tw`text-white p-[0.5rem]`}
                                >{item.item.value}</Text>
                            </View>
                        </Pressable>
                    </View>
                )
            }}/>
        </View>
    )
}

export default OutputSection
