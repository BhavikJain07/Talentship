import { PrismaClient } from "@prisma/client";
import type { UsersResponse } from "./prisma.types"
const prisma: PrismaClient = new PrismaClient();

export const handleGetAllUsers = async (): Promise<UsersResponse> => {
    try{
        const users = await prisma.users.findMany();
        return {
            status: 1,
            message: "Users fetched successfully",
            data: users,
        }
    } catch (error) {
        return {
            status: 0,
            message: "Error while fetching users",
            error: error,
        };
    }
};

export const handleGetSingleUser = async (id: string): Promise<UsersResponse> => {
    try{
        const user = await prisma.users.findUnique({
            where: {
                id: id,
            }
        });
        return {
            status: 1,
            message: "User fetched successfully",
            data: user ? [user] : [],
        }
    } catch (error) {
        return {
            status: 0,
            message: "Error while fetching user",
            error: error,
        };
    }
};

export const handleCreateNewUser = async (name: string) : Promise<UsersResponse> => {
    try{
        const user = await prisma.users.create({
            data: {
                name: name,
            }
        });
        return {
            status: 1,
            message: "User created successfully",
            data: [user],
        }
    } catch (error) {
        return {
            status: 0,
            message: "Error while creating user",
            error: error,
        };
    }
}

export const handleUpdateUser = async (id: string, name: string) : Promise<UsersResponse> => {
    try{
        const user = await prisma.users.update({
            where: {
                id: id,
            },
            data: {
                name: name,
            }
        });
        return {
            status: 1,
            message: "User updated successfully",
            data: [user],
        }
    } catch (error) {
        return {
            status: 0,
            message: "Error while updating user",
            error: error,
        };
    }
};

export const handleDeleteUser = async (id: string) : Promise<UsersResponse> => {
    try{
        const user = await prisma.users.delete({
            where: {
                id: id,
            }
        });
        return {
            status: 1,
            message: "User deleted successfully",
            data: [user],
        }
    } catch (error) {
        return {
            status: 0,
            message: "Error while deleting user",
            error: error,
        };
    }
}