import express from "express";
import { VerifyToken } from "../../middleware/verifyToken.js"; 
import { db } from "../../configs/firebase.js";
import { FieldValue } from 'firebase-admin/firestore';

const router = express.Router();

router.post("/register", VerifyToken, async (req, res) => {
    const { uid, email } = req.user;
    const { fname, lname } = req.body;

    const profileData = {
        userId: uid,
        created: new Date(),
        role: 1,
        // 
        email: email,
        firstName: fname,
        lastName: lname,
        gender: 'Pending',
        age: 0,
        interests: [],
        onboardingStatus: false,
        phoneMake: 'Pending',
        bookmarks: [],
    };

    try {
        const profileRef = db.collection('users').doc(uid);
        await profileRef.set(profileData, { merge: false });
        res.status(200).end();
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

router.post("/profile", VerifyToken, async (req, res) => {
    const { uid } = req.user;
    const { email, fname, lname, gender, age, interests, onboardingStatus, phoneMake, bookmarks } = req.body;

    const newProfileData = {
        email: email || null,
        firstName: fname || null,
        lastName: lname || null,
        gender: gender || null,
        age: age || null,
        interests: interests || null,
        onboardingStatus: onboardingStatus || null,
        phoneMake: phoneMake || null,
        bookmarks: bookmarks || null
    };

    const updates = Object.entries(newProfileData).reduce((acc, [key, value]) => {
        if (value !== null) {
            acc[key] = value;
        }
        return acc;
    }, {});

    try {
        const profileRef = db.collection('users').doc(uid);
        await profileRef.set(updates, { merge: true });
        res.status(200).end();
    } catch (error) {
        console.error("Error updating user profile:", error);
        res.status(500).send({ error: 'Failed to update user profile' });
    }
});

router.post("/bookmark", VerifyToken, async (req, res) => {
    const { uid } = req.user;
    const { articleId } = req.body;

    try {
        const profileRef = db.collection('users').doc(uid);
        await profileRef.update({
            bookmarks: FieldValue.arrayUnion(articleId)
        });

        res.status(200).send({ message: 'Article bookmarked successfully' });
    } catch (error) {
        console.error("Error adding bookmark:", error);
        res.status(500).send({ error: 'Failed to add bookmark' });
    }
});

router.delete("/bookmark", VerifyToken, async (req, res) => {
    const { uid } = req.user;
    const { articleId } = req.body;

    try {
        const profileRef = db.collection('users').doc(uid);
        await profileRef.update({
            bookmarks: FieldValue.arrayRemove(articleId)
        });

        res.status(200).send({ message: 'Article unbookmarked successfully' });
    } catch (error) {
        console.error("Error removing bookmark:", error);
        res.status(500).send({ error: 'Failed to remove bookmark' });
    }
});

export default router;