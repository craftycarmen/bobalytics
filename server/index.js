import express from "express";
import mongoose from "mongoose";
import { MONGO_URI } from "./config/keys.js";
import { users } from "./routes/users.js";
import { shops } from "./routes/shops.js";

const app = express();

app.use(express.json());

mongoose
    .connect(MONGO_URI)
    .then(() => console.log('MongoDB is successfully connected'))
    .catch(err => console.log(err))

app.get('/test', (_, res) => res.send("This works"));

app.use('/api/users', users)
app.use('/api/shops', shops)

const port = 8080;
const callback = () => console.log(`Server is running on port: ${port}`);

app.listen(port, callback);
