import { Base } from "./base.model";
import { Choice } from "./choice.model";

export interface Question extends Base {
  id: number;
  question: string;
  choices: Choice[];
  value: string;
  score: number;
  quizzId?: number;
}
