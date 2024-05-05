import { Router } from "express";
import AuthController from "../controllers/auth.controller";
import QuestionController from "../controllers/question.controller";
import ChoiceController from "../controllers/choice.controller";
import CourseController from "../controllers/course.controller";
import QuizzController from "../controllers/quizz.controller";
import FileController from "../controllers/file.controller";

const api = Router()
  .use(AuthController)
  .use(QuestionController)
  .use(ChoiceController)
  .use(CourseController)
  .use(QuizzController)
  .use(FileController);

export default Router().use("/", api);
