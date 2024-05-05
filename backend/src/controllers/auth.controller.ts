import { NextFunction, Request, Response, Router } from "express";
import { createUser, updateUser, getUserById } from "../services/auth.service";
import { login } from "../services/auth.service";
import { checkToken } from "../middleware/checkToken";
import { RequestJWT } from "../types/request";

const router = Router();

router.post(
  "/user/signup",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(req.body);
      const user = await createUser(req.body);
      res.json({ user });
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/user/login",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userLogged = await login(req.body);
      res.json({ userLogged });
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/user/update",
  checkToken,
  async (req: RequestJWT, res: Response, next: NextFunction) => {
    const decoded = req.decoded;
    const user = await updateUser(decoded.id, req.body);
    res.json({ user });
  }
);

router.get(
  "/user/:userId",
  checkToken,
  async (req: RequestJWT, res: Response, next: NextFunction) => {
    const decoded = req.decoded;
    const userId = parseInt(req.params.userId, 10); 
    if (isNaN(userId)) {
      return res.status(400).json({ error: 'Invalid user ID' });
    }
    const user = await getUserById(userId, decoded);
    res.json({ user });
  }
)

// router.get(
//   "/course/getCourses/:id",
//   checkToken,
//   async (req: RequestJWT, res: Response, next: NextFunction) => {
//     const { id } = req.params;
//     const course = await getCourseById(parseFloat(id));
//     res.json({ course });
//   }
// );

export default router;
