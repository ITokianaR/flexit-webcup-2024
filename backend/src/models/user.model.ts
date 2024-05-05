import { Base } from "./base.model";

export interface User extends Base {
  id: number;
  email: string;
  username: string;
  password: string;
  score: number;
  deathDate: any;
}
