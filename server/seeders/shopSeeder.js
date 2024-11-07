import { Shop } from "../models/shop.js";
import { User } from "../models/user.js";
import userSeeder from "./userSeeder.js";

const shopsData = (users) => [
    {
        name: 'Demo Shop',
        description: 'A demo shop made just for demos!',
        address: '123 Fifth St',
        location: {
            city: 'Oakland',
            state: 'CA',
            zip: '94606'
        },
        owner: users[0]._id,
        isOpen: true,
        openYear: 2024,
        categories: ["Milk Teas", "Fruit Teas", "Lactose-Free"],
        verified: true
    }
]

const shopSeeder = async () => {
    try {
        const users = await userSeeder();

        if (!users || users.length === 0) {
            throw new Error('No users found; cannot seed shops');
        }

        await Shop.deleteMany({});
        const shops = await Shop.insertMany(shopsData(users));
        console.log('Shop data seeded successfully');

        await User.updateOne(
            { _id: users[0]._id },
            { $push: { shops: shops[0]._id } }
        )
    } catch (error) {
        console.error('Error seeding shop data:', error)
    }
}

export default shopSeeder;
