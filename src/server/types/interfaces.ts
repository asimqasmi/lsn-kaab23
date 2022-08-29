import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ILogin {
  username: string;
  password: string;
}

export interface ICurrentUser {
  _id: number;
  name: string;
  username: string;
  email: string;
  image: string;
  role: string | undefined;
  is_selected: boolean;
  created_at: string;
}

export interface IRegister {
  name: string;
  email: string;
  username: string;
  password: string;
}

export interface IGetMeResponse {
  success: boolean;
  data: ICurrentUser;
}

export interface IAcknowledgementResponse {
  success: boolean;
  message: string;
  errors?: string[];
}

export interface INavLink {
  to: string;
  children: ReactNode;
}

export interface IMobileNav {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
