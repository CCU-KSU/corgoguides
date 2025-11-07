import express from "express"
import { VerifyToken } from "../../middleware/verifyToken.js"; 
import { db } from "../../configs/firebase.js";

const router = express.Router();

router.get("/interests", VerifyToken, async (req, res) => {
    try {
        const interestList = await db.collection('metadata').doc('master_interests_list').get();
        res.status(200).json(interestList.data());
    } catch (error) {
        console.error("Error getting interests list:", error);
    }
});

router.get("/genders", VerifyToken, async (req, res) => {
    try {
        const genderList = await db.collection('metadata').doc('master_gender_list').get();
        res.status(200).json(genderList.data());
    } catch (error) {
        console.error("Error getting interests list:", error);
    }
});

router.get("/phoneMakes", VerifyToken, async (req, res) => {
    try {
        const phoneMakes = await db.collection('metadata').doc('master_phone_make_list').get();
        res.status(200).json(phoneMakes.data());
    } catch (error) {
        console.error("Error getting interests list:", error);
    }
});

export default router;