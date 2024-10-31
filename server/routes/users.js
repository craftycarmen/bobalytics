import express from "express";
import { User } from "../models/user";

const router = express.Router();

router.get('/', (_, res) => {
    User.find().then(users => res.json(users))
        .catch(err => res.status(404));
});

export const users = router;
