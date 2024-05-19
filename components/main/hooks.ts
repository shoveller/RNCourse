import {useAtom, useSetAtom} from "jotai/index";
import {goalListAtom, textAtom} from "@/components/main/store";
import {useCallback} from "react";

export const useOnChangeText = () => {
    const setText = useSetAtom(textAtom);

    return useCallback((text: string) => {
        setText(text)
    }, [])
}

export const useOnPress = () => {
    const [text, setText] = useAtom(textAtom);
    const setList = useSetAtom(goalListAtom)

    return useCallback(() => {
        setList(prev => {
            return [...prev, {key: text, value: text}]
        });
        setText('');
    }, [])
}

export const useOnDelete = () => {
    const setGoals = useSetAtom(goalListAtom);

    return useCallback((key: string) => {
        setGoals(prev => {
            return prev.filter(item => {
                return item.key !== key;
            })
        })
    },[])
}
