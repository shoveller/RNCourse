import {Button, Text, TextInput, View} from 'react-native';
import tw from 'twrnc'
//
export default function HomeScreen() {
    return (
        <View style={tw`flex-1 p-[50px] gap-[24px]`}>
            <View
                style={tw`bg-pink-300 flex-1 flex-row justify-between items-center gap-[8px] border-b border-gray-500`}>
                <TextInput style={tw`flex-1 border border-gray-300 p-[8px]`} placeholder="당신의 목표!"/>
                <Button title="목표 추가하기"/>
            </View>
            <View style={tw`flex-4 bg-green-100 justify-center items-center`}>
                <Text>목표가 들어갈 곳</Text>
            </View>
        </View>
    );
}
