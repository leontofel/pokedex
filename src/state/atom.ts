import { atom } from "recoil";

const currentSearch = atom({
    key: 'currentSearch',
    default: '',
});

export { currentSearch }