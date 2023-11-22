import { roleType } from "./user.interface";

export interface Auth {
  email: string;
  password: string;
}

export interface AuthResponse {
  message: string;
  token: string;
  userId: string;
  role: roleType;
}


