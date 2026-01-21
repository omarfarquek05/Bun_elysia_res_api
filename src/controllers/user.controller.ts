import { UserModel } from "../models/user.model";

export const UserController = {
    create: async (body: {
        name: string;
        email: string;
        age: number
    }) => {
        const [user] = await UserModel.create(body);
        return user;
    },

    getAll: async () => {
        return UserModel.findAll();
    },

    getOne: async (id: number) => {
        return UserModel.findById(id);
    },

    update: async (id: number, body: Partial<{ name: string; email: string; age: number }>) => {
        return UserModel.update(id, body);
    },

    delete: async (id: number) => {
        return UserModel.delete(id);
    },
};
