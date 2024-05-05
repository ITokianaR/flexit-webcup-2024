import { NextFunction, Request, Response, Router } from 'express';
import { addResponseChoice } from '../services/choice.service';
import { getChoiceAndQuestion } from '../services/choice.service';

const router = Router();

router.post('/choice/add', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const questionId = parseInt(req.body.questionId);
        const question = await addResponseChoice({ ...req.body, questionId });

        res.json({ question });
    } catch (error) {
        next(error)
    }
});

router.get('/question/:questionId', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const questionId = parseInt(req.params.questionId);
        const choiceAndQuestions = await getChoiceAndQuestion({ ...req.body, questionId });

        res.json({ choiceAndQuestions });
    } catch (error) {
        next(error)
    }
});

export default router;