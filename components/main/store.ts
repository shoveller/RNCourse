import {faker} from "@faker-js/faker";
import {atom} from "jotai";
import {atomWithReset} from "jotai/utils";

const names = Array.from({length: 30}).map(() => {
    return {
        key: faker.person.fullName(),
        value: faker.person.fullName()
    }
})
export const textAtom = atomWithReset('');
export const goalListAtom = atom<{ key: string, value: string }[]>(names)
