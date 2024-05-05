import { Request, Response } from "express";
import { User } from "../models/user.model";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createUser = async (input: User): Promise<User> => {
  if (!input || !input.email || !input.username || !input.password) {
    throw new Error("Invalid input data");
  }

  const email = input.email.trim();
  const username = input.username.trim();
  const password = input.password.trim();
  const deathDate = input.deathDate;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
      deathDate,
    },
  });

  return user;
};

export const login = async (userPayload: any) => {
  const email = userPayload.email?.trim();
  const password = userPayload.password?.trim();

  if (!email) {
    throw new Error("email can't be blank");
  }

  if (!password) {
    throw new Error("password can't be blank");
  }

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
      email: true,
      username: true,
      password: true,
    },
  });

  if (user) {
    const match = await bcrypt.compare(password, user.password);
    const token = JWT.sign(user, process.env.JWT_SECRET || "superSecret", {
      expiresIn: "60d",
    });

    if (match) {
      return {
        email: user.email,
        username: user.username,
        token: token,
      };
    }
  }

  throw new Error("email or password is invalid");
};

export const updateUser = async (userId: number, payload: User) => {
  const user = await prisma.user.update({
    where: { id: userId },
    data: payload,
  });
  return user;
};

export const getUserById = async (userId: number, decoded: any) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    return user;
  } catch (error) {
    console.error('Error in getUserById:', error);
    throw error;
  }
};