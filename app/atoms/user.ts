import { atom } from "jotai";

const profile = {
  uid: "acb74c05bec329e3a1e6a7a2",
  name: "Pam Weber",
  url: "https://avatars.githubusercontent.com/u/74282530",
};
const UserAtom = atom(profile);
export const ReadUserAtom = atom((get) => get(UserAtom));
