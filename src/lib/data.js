import { User } from './models';
import { connectToDb } from './utils';
import { unstable_noStore as noStore } from 'next/cache';

export const getUser = async (id) => {
    noStore();

    try {
        connectToDb();
        const user = await User.findById(id);

        return user;
    } catch (err) {
        console.log(err);
        throw new Error('Failed to fetch user!');
    }
};