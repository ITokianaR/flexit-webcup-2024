import { Category } from "@prisma/client";
import { Base } from "./base.model";

export interface Course extends Base {
  id: number;
  category: Category;
  title: string;
  description: string;
  content?: string;
  level: number;
  urlVideo: string;
  fileId: number;
}
