import { NextFunction, Request, Response, Router } from "express";
import { addQuestion, responses } from "../services/question.service";
import { checkToken } from "../middleware/checkToken";
import { RequestJWT } from "../types/request";

const router = Router();

router.post(
  "/question/add",
  checkToken,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const question = await addQuestion(req.body);
      res.json({ question });
    } catch (error) {
      next(error);
    }
  }
),
  router.post(
    "/response/:quizzId/:questionId",
    checkToken,
    async (req: RequestJWT, res: Response, next: NextFunction) => {
      try {
        const { quizzId, questionId } = req.params;
        const { value } = req.body;
        const decoded = req.decoded;
        const isCorrectResponse = await responses({
          userId: parseInt(decoded.id),
          quizzId: parseInt(quizzId),
          questionId: parseInt(questionId),
          value,
        }); // Pass all parameters to responses
        res.json({ success: isCorrectResponse });
      } catch (error) {
        next(error);
      }
    }
  );

export default router;
