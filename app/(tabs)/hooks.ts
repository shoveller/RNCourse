import {useAtom, useSetAtom} from "jotai/index";
import {goalListAtom, textAtom} from "@/app/(tabs)/store";

export const useOnChangeText = () => {
    const setText = useSetAtom(textAtom);

    return (text: string) => {
        setText(text)
    }
}

export const useOnPress = () => {
    const [text, setText] = useAtom(textAtom);
    const setList = useSetAtom(goalListAtom)

    return () => {
        setList(prev => {
            return [...prev, {key: text, value: text}]
        });
        setText('');
    }
}

export const useOnDelete = () => {
    const setGoals = useSetAtom(goalListAtom);

    return (key: string) => {
        setGoals(prev => {
            return prev.filter(item => {
                return item.key !== key;
            })
        })
    }
}
