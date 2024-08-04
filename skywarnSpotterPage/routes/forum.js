// routes/forum.js

const express = require('express');
const ForumThread = require('../models/ForumThread');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Create a new forum thread
router.post('/threads', authMiddleware, async (req, res) => {
    const { title, content } = req.body;
    const userId = req.user.userId;

    try {
        const thread = new ForumThread({ title, content, author: userId });
        await thread.save();
        res.json(thread);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all forum threads
router.get('/threads', async (req, res) => {
    try {
        const threads = await ForumThread.find().populate('author', 'username');
        res.json(threads);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
