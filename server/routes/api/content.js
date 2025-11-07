import express from "express";
import { VerifyToken } from "../../middleware/verifyToken.js"; 
import { db } from "../../configs/firebase.js";
import { FieldValue } from 'firebase-admin/firestore';

const router = express.Router();

router.get("/articles", async (req, res) => {
    try {
        const articlesRef = db.collection("articles");
        const snapshot = await articlesRef.select('title', 'description').get();

        const articles = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        res.status(200).json(articles);
    } catch (error) {
        console.error("Error fetching articles", error);
        res.status(500).json({ error: "Failed to fetch articles" });
    }
});

router.get("/articles/:id", async (req, res) => {
    try {
        const articleId = req.params.id;
        const articleRef = db.collection("articles").doc(articleId);
        const doc = await articleRef.get();

        if (!doc.exists) {
            return res.status(404).json({ error: "Article not found" });
        }

        const article = {
            id: doc.id,
            ...doc.data()
        };

        res.status(200).json(article);
    } catch (error) {
        console.error("Error fetching article by ID:", error);
        res.status(500).json({ error: "Failed to fetch article" });
    }
});

// TODO

router.patch("/articles/:id", VerifyToken, async (req, res) => {
    try {
        const articleId = req.params.id;
        const updates = req.body;
        const articleRef = db.collection("articles").doc(articleId);

        const updateData = {
            ...updates,
            edited: FieldValue.serverTimestamp()
        };

        await articleRef.update(updateData);

        res.status(200).json({ message: "Article updated successfully"});
    } catch (error) {
        console.error("Error updating article:", error);
        res.status(500).json({ error: "Failed to update article" });
    }
});

router.post("/articles", VerifyToken, async (req, res) => {
    try {
        const newArticleData = req.body;
        
        if (!newArticleData.title || !newArticleData.body) {
            return res.status(400).json({ error: "Missing required fields: title and body" });
        }

        const articleToCreate = {
            ...newArticleData,
            written: FieldValue.serverTimestamp(),
            edited: FieldValue.serverTimestamp(),
            tags: newArticleData.tags || [],
            devices: newArticleData.devices || [],
        };
        
        const docRef = await db.collection("articles").add(articleToCreate);
        
        res.status(201).json({ message: "Article created successfully" });
    } catch (error) {
        console.error("Error creating article:", error);
        res.status(500).json({ error: "Failed to create article" });
    }
});

router.delete("/articles/:id", VerifyToken, async (req, res) => {
    try {
        const articleId = req.params.id;
        const articleRef = db.collection("articles").doc(articleId);

        const doc = await articleRef.get();
        if (!doc.exists) {
            return res.status(404).json({ error: "Article not found" });
        }

        await articleRef.delete();

        res.status(200).json({ message: `Article with ID: ${articleId} deleted successfully` });
    } catch (error) {
        console.error("Error deleting article:", error);
        res.status(500).json({ error: "Failed to delete article" });
    }
});

export default router;