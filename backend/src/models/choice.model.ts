import { Base } from "./base.model";

export interface Choice extends Base {
  id: number;
  value: string;
  questionId?: number;
}
