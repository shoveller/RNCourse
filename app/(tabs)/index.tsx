import {View, Text, Button} from 'react-native';
import tw from 'twrnc';
import {atom, useAtom} from "jotai";
import InputSection from "@/components/main/InputSection";
import OutputSection from "@/components/main/OutputSection";

// const countAtom = atom(0);

export default function HomeScreen() {
    // const [count, setCount] = useAtom(countAtom)

    return (
        <View style={tw`flex-1 p-[1rem] gap-[24px]`}>
            <InputSection/>
            {/*<OutputSection/>*/}
            {/*<View style={tw`flex-1 justify-center items-center flex-row`}>*/}
            {/*    <Button title="+" onPress={() => setCount(count + 1)} />*/}
            {/*    <Text>{count}</Text>*/}
            {/*    <Button title="-" onPress={() => setCount(count - 1)} />*/}
            {/*</View>*/}
        </View>
    );
}
