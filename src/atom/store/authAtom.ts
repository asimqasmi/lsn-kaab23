import { atom } from "recoil";
import { GET_ME_ATOM_KEY } from "@src/server/types/constants";
import { ICurrentUser } from "@src/server/types/interfaces";

export const getMeAtom = atom<ICurrentUser | null>({
  key: GET_ME_ATOM_KEY,
  default: null,
});
