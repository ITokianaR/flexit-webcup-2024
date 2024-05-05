import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import { RequestJWT } from "../types/request";

export const checkToken = (
  req: RequestJWT,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers?.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "unauthorized" });
  jwt.verify(token, process.env.JWT_SECRET || "superSecret", (err, decoded) => {
    if (err) return res.status(401).json({ message: "Invalid token" });
    console.log(decoded);
    req.decoded = decoded;
    next();
  });
};
