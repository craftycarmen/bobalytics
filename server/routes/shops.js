import express from "express";
import { Shop } from "../models/shop.js";

const router = express.Router();

router.get('/', (_, res) => {
    Shop.find().then(shops => res.json(shops))
        .catch(err => res.status(404));
});

export const shops = router;
