import { Course } from "./course.model";
import { User } from "./user.model";

export interface File {
    id: number;
    filename: string;
    mimeType: string;
    url: string;
    Course?: Course;
    User?: User;
}