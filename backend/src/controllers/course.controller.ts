import { NextFunction, Request, Response, Router } from "express";
import {
  createNewCourse,
  finishCourse,
  getCourseById,
  getCourseByLevel,
  getCourseFinished,
  joinCourse,
} from "../services/course.service";
import { RequestJWT } from "../types/request";
import { checkToken } from "../middleware/checkToken";
import multerConfig from "../middleware/multerConfig";

const router = Router();

router.post(
  "/course/add",
  checkToken,
  async (req: RequestJWT, res: Response, next: NextFunction) => {
    const course = await createNewCourse(req.body);
    res.json({ course });
  }
);

router.get(
  "/course/getCourses",
  checkToken,
  async (req: RequestJWT, res: Response, next: NextFunction) => {
    const decoded = req.decoded;
    const courses = await getCourseByLevel(parseFloat(decoded.id));
    res.json({ courses });
  }
);

router.get(
  "/course/getCourses/:id",
  checkToken,
  async (req: RequestJWT, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const course = await getCourseById(parseFloat(id));
    res.json({ course });
  }
);

router.get(
  "/course/finish/:id",
  checkToken,
  async (req: RequestJWT, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const decoded = req.decoded;
    const course = await finishCourse(decoded.id, parseFloat(id));
    res.json({ course });
  }
);

router.get(
  "/course/join/:id",
  checkToken,
  async (req: RequestJWT, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const decoded = req.decoded;

    const join = await joinCourse(decoded.id, parseFloat(id));
    res.json({ join });
  }
);

router.get(
  "/course/finish",
  checkToken,
  async (req: RequestJWT, res: Response, next: NextFunction) => {
    const decoded = req.decoded;

    const courses = await getCourseFinished(decoded.id);
    res.json({ courses });
  }
);

export default router;
