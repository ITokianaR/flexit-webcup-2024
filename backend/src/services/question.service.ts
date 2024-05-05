import { Choice, Question } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addQuestion = async (
  input: Question & { choices: any[] }
): Promise<Question> => {
  const question = input.question.trim();
  const value = input.value.trim();

  const quest = await prisma.question.create({
    data: {
      question,
      value,
      score: input.score,
      Quizz: {
        connect: {
          id: input.quizzId,
        },
      },
      choices: {
        create: input.choices,
      },
    },
  });

  return quest;
};

// mbola tsy mandeha
export const responses = async (input: {
  userId: number;
  quizzId: number;
  questionId: number;
  value: string;
}) => {
  try {
    const question = await prisma.question.findUnique({
      where: { id: input.questionId },
    });

    if (!question) {
      throw new Error("Question not found");
    }

    const quizzUser = await prisma.userQuizz.findUnique({
      where: {
        userId_quizzId: { quizzId: input.quizzId, userId: input.userId },
      },
    });
    const modify = quizzUser
      ? await prisma.userQuizz.update({
          where: {
            userId_quizzId: { quizzId: input.quizzId, userId: input.userId },
          },
          data: {
            score: {
              increment: question.value === input.value ? question.score : 0,
            },
          },
        })
      : await prisma.user.update({
          where: { id: input.userId },
          data: {
            UserQuizz: {
              create: {
                quizz: { connect: { id: input.quizzId } },
                score: input.value === question.value ? question.score : 0,
              },
            },
          },
        });
    return modify;
  } catch (error) {
    console.error("Error processing response:", error);
    throw error;
  }
};
