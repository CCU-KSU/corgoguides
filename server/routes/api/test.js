import express from "express"

import { VerifyToken } from "../../middleware/verifyToken.js"; 

const router = express.Router();

router.use('/public', (req, res) => {
    res.send("Hey There!");
});

router.use("/protected", VerifyToken, (req, res) => {
    res.send("Hey There! (Protected)");
});

export default router;