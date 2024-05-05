import { Base } from "./base.model";
import { Question } from "./question.model";

export interface Quizz extends Base {
  id: number;
  title: string;
  description: string;
  level: number;
  scoreMax: number;
  questions: Question[];
}
