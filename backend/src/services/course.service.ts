import { Course, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createNewCourse = async (
  courseInput: Course & { file: any[] }
) => {
  const course = await prisma.course.create({
    data: {
      ...courseInput,
      file: { createMany: { data: courseInput.file ?? [] } },
    },
  });
  return course;
};

export const getCourseByLevel = async (userId: number) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  const courses = await prisma.course.findMany({
    where: {
      level: { lte: user?.level },
      UserCourse: { every: { locked: false } },
    },
  });
  return courses;
};

export const getCourseById = async (courseId: number) => {
  const course = await prisma.course.findUnique({ where: { id: courseId } });
  return course;
};

export const updateCourse = async (courseInput: Course) => {
  const course = await prisma.course.update({
    where: { id: courseInput.id },
    data: courseInput,
  });
  return course;
};

export const finishCourse = async (userId: number, courseId: number) => {
  const finish = await prisma.userCourse.update({
    where: { userId_courseId: { userId, courseId } },
    data: {
      finished: true,
    },
  });
  return finish;
};

export const joinCourse = async (userId: number, courseId: number) => {
  const join = await prisma.user.update({
    where: { id: userId },
    data: {
      UserCourse: {
        create: [courseId].map((a) => ({
          course: { connect: { id: a } },
          join: true,
          locked: false,
          finished: false,
        })),
      },
    },
  });
  return join;
};

export const getCourseFinished = async (userId: number) => {
  const courses = await prisma.userCourse.findMany({
    where: { finished: true, userId },
    include: {
      course: true,
    },
  });
  return courses.map((a) => a.course);
};
