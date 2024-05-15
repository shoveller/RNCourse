import {Text, View, StatusBar} from 'react-native';
import tw from 'twrnc'

export default function HomeScreen() {
    return (
        <View style={tw`flex-1 bg-white items-center justify-center`}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar barStyle="dark-content" />
        </View>
    );
}
