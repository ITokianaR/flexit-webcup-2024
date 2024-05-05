import { PrismaClient, Quizz } from "@prisma/client";

const prisma = new PrismaClient();

export const createQuizz = async (quizz: Quizz) => {
  const quizRes = await prisma.quizz.create({
    data: quizz,
  });
  return quizRes;
};

export const getQuizByLevel = async (userId: number) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  const course = await prisma.userCourse.findMany({ where: { userId } });
  return course.every((a) => a.finished === true)
    ? await prisma.quizz.findFirst({
        where: { level: user?.level },
        include: { questions: true },
      })
    : null;
};

export const evaluateResult = async (userId: number, quizzId: number) => {
  const result = await prisma.userQuizz.findUnique({
    where: { userId_quizzId: { quizzId, userId } },
    include: { quizz: true },
  });

  if (result) {
    const val = (result.score * 100) / result.quizz.scoreMax;
    if (val >= 50) {
      const user = await prisma.user.update({
        where: { id: userId },
        data: { level: { increment: 1 } },
      });
      await prisma.userCourse.updateMany({
        where: { userId, course: { level: user.level } },
        data: { locked: false },
      });
      return "";
    }
  }
  return null;
};
