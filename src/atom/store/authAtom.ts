import { GET_ME_ATOM_KEY } from "@server/types/constants";
import { atom } from "recoil";
import { ICurrentUser } from "@atom/interfaces";

export const getMeAtom = atom<ICurrentUser | null>({
  key: GET_ME_ATOM_KEY,
  default: null,
});
