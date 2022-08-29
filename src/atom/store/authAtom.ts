import { atom } from "recoil";
import { GET_ME_ATOM_KEY } from "@src/types/constants";
import { ICurrentUser } from "@src/types/interfaces";

export const getMeAtom = atom<ICurrentUser | null>({
  key: GET_ME_ATOM_KEY,
  default: null,
});
