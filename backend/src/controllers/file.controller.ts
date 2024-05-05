import { NextFunction, Response, Router } from "express";
import { checkToken } from "../middleware/checkToken";
import multerConfig from "../middleware/multerConfig";
import { RequestJWT } from "../types/request";

const router = Router();

router.post(
  "/course/file",
  checkToken,
  multerConfig.single("file"),
  async (req: RequestJWT, res: Response, next: NextFunction) => {
    res.json({ imageUrl: `/storages/${req.file?.filename}` });
  }
);

router.post(
  "/user/changeProfile",
  checkToken,
  multerConfig.single("file"),
  async (req: RequestJWT, res: Response, next: NextFunction) => {
    res.json({ profile: `/storages/${req.file?.filename}` });
  }
);

router.post(
  "/course/upload",
  checkToken,
  multerConfig.array("files"),
  async (req: RequestJWT, res: Response, next: NextFunction) => {
    res.json({ file: req.files ?? [] });
  }
);

export default router;
