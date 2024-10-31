import express from "express";
import { users } from "./routes/users.js";

const app = express();

app.use(express.json());

app.get('/test', (_, res) => res.send("This works"));

app.use('/api/users', users)

const port = 3000;
const callback = () => console.log(`Server is running on port: ${port}`);

app.listen(port, callback);
