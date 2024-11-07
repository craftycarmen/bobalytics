import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { ADMIN } from "../config/keys.js";

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
        shops: []
    },
    {
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@email.com',
        password: bcrypt.hashSync(ADMIN, 10),
        phoneNumber: '5109876543',
        location: {
            city: 'Oakland',
            state: 'CA',
        },
        role: "Admin"
    },
]

const userSeeder = async () => {
    try {
        await User.deleteMany({});
        const users = await User.insertMany(usersData);
        console.log('User data seeded successfully');
        return users;
    } catch (error) {
        console.error('Error seeding user data:', error)
    }
}

export default userSeeder;
