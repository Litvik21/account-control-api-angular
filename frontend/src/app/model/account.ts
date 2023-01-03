import {Status} from "./stasus";

export interface Account {
  id?: number;
  username: string;
  password: string;
  repeatPassword?: string;
  firstName?: string;
  lastName?: string;
  status?: Status;
}
