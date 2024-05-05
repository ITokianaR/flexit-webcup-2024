import { NextFunction, Response, Router } from "express";
import { RequestJWT } from "../types/request";
import {
  createQuizz,
  evaluateResult,
  getQuizByLevel,
} from "../services/quizz.service";
import { checkToken } from "../middleware/checkToken";

const router = Router();

router.post(
  "/quizz/create",
  checkToken,
  async (req: RequestJWT, res: Response, next: NextFunction) => {
    const result = await createQuizz(req.body);
    res.json({ result });
  }
);

router.get(
  "/quizz/get",
  checkToken,
  async (req: RequestJWT, res: Response, next: NextFunction) => {
    const decoded = req.decoded;
    const quizz = await getQuizByLevel(decoded.id);
    res.json({ quizz });
  }
);

router.get(
  "/quizz/evaluate/:id",
  checkToken,
  async (req: RequestJWT, res: Response, next: NextFunction) => {
    const decoded = req.decoded;
    const { id } = req.params;
    const val = await evaluateResult(decoded.id, parseFloat(id));
    res.json({ val });
  }
);

export default router;
