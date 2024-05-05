import { Choice, Question } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addResponseChoice = async(input:Choice): Promise<Choice> => {
    const ResponseChoice = await prisma.choice.create({
        data:{
            value: input.value,
            questionId: input.questionId
        }
    });

    return ResponseChoice;
} 

export const getChoiceAndQuestion = async (input: Choice) => {
    try {
        const choiceQuestions = await prisma.choice.findMany({
            where: { questionId: input.questionId },
            include: {
                Question: true,
            },
        });

        const questionResponsesMap: { [question: string]: string[] } = {};

        choiceQuestions.forEach(choice => {
            const question = choice.Question?.question || "";
            const response = choice.value || "";

            if (!questionResponsesMap[question]) {
                questionResponsesMap[question] = [];
            }
            questionResponsesMap[question].push(response);
        });

        const Questions = Object.entries(questionResponsesMap).map(([question, responses]) => ({
            question,
            responses,
        }));

        return Questions;
    } catch (error) {
        console.error("Error retrieving choices and questions:", error);
        throw error;
    }
};

