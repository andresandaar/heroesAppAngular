import { Auth } from "./auth.interface";
export interface User extends Auth {
    name: string;
    surname: string;
    role: roleType;
}

export enum roleType {
  Admin = 'Admin',
  Client = 'Client',
}
