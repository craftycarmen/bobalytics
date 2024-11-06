import { User } from "../models/user.js";
import bcrypt from "bcrypt";

const usersData = [
    {
        firstName: 'Demo',
        lastName: 'User',
        email: 'demo@email.com',
        password: bcrypt.hashSync("password", 10),
        phoneNumber: '5101234567',
        location: {
            city: 'Oakland',
            state: 'CA',
        },
        shopId: 1
    }
]

const userSeeder = async () => {
    try {
        await User.deleteMany({});
        await User.insertMany(usersData);
        console.log('User data seeded successfully');
    } catch (error) {
        console.error('Error seeding user data:', error)
    }
}

export default userSeeder;
