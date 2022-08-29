import {
  LOGIN_MODAL_STATE,
  LOGIN_MODAL_TYPE,
  USER_PROFILE_MODAL_STATE,
  USER_PROFILE_MODAL_TYPE,
} from "@src/types/constants";
import { atom } from "recoil";

export const userProfileModalState = atom({
  key: USER_PROFILE_MODAL_STATE,
  default: false,
});

export const userProfileModalTypeState = atom({
  key: USER_PROFILE_MODAL_TYPE,
  default: "dropIn",
});

export const LoginModalState = atom({
  key: LOGIN_MODAL_STATE,
  default: false,
});

export const LoginModalType = atom({
  key: LOGIN_MODAL_TYPE,
  default: "dropIn",
});
