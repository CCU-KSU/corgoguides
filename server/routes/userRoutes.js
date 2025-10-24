import express from "express"

import { VerifyToken } from "../middleware/verifyToken.js"
import { randomUUID } from "crypto"
import { db } from "../configs/firebase.js";

const router = express.Router();

router.post("/register", VerifyToken, async (req, res) => {
    console.log(req.body);
    const { uid, email } = req.user;
    const { fname, lname } = req.body;

    const profileData = {
        userId: uid,
        email: email,
        firstName: fname,
        lastName: lname,
        // username: username || `User_${randomUUID().slice(0, 8)}`,
        created: new Date(),
        role: 1,
    };

    try {
        const profileRef = db.collection('users').doc(uid);
        await profileRef.set(profileData, { merge: false });
        console.log(`User, ${uid}, has been created!`);
    } catch (error) {
        res.status(500).send({ error: 'Failed to create user profile' });
    }
});

router.get("/current", VerifyToken, async (req, res) => {
    try {
        const userSnapshot = await db.collection('users').doc(req.user.uid).get();
        res.status(200).json(userSnapshot.data());
    } catch (error) {
        console.error("Error getting user list:", error);
    }
});

export default router;