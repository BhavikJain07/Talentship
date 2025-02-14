import type { User } from '../routes/users/users.types';
export type UsersResponse = {
    status: number;
    message: string;
    data?: User[];
    error?: any;
};