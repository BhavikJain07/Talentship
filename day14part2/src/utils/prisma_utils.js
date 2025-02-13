import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllProjects = async () => {
  const data = await prisma.projects.findMany();
  return data;
};

export const getProject = async (id) => {
    const data = await prisma.projects.findUnique({
        where: {
        id: parseInt(id),
        },
    });
    return data;
};

export const createNewProject = async ({ name, description }) => {
  const data = await prisma.projects.create({
    data: {
      name,
      description,
    },
  });
  return data;
};

export const updateProject = async (id, {description}) => {
    const data = await prisma.projects.update({
        where: {
            id: parseInt(id),
        },
        data: {
            description,
        },
    });
    return data;
}

export const deleteProject = async (id) => {
    const data = await prisma.projects.delete({
        where: {
            id: parseInt(id),
        },
    });
    return data;
};