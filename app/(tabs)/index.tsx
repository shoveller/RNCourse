import {Button, Text, TextInput, View} from 'react-native';
import tw from 'twrnc'

export default function HomeScreen() {
    return (
        <View style={tw`flex-1 p-[50px]`}>
            <View style={tw`bg-pink-200`}>
                <TextInput placeholder="당신의 목표!"/>
                <Button title="목표 추가하기"/>
            </View>
            <View style={tw`bg-green-100`}>
                <Text>목표가 들어갈 곳</Text>
            </View>
        </View>
    );
}
