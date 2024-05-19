import {faker} from "@faker-js/faker";
import {atom} from "jotai";

const names = Array.from({length: 30}).map(() => {
    return {
        key: faker.person.fullName(),
        value: faker.person.fullName()
    }
})
export const textAtom = atom('');
export const goalListAtom = atom<{ key: string, value: string }[]>(names)
