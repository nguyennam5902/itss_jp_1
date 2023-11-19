const express = require('express');
const router = express.Router();
const Vocab = require('../models/vocab'); // Đường dẫn đến model từ vựng

// Endpoint để lấy thông tin chi tiết của một từ vựng dựa trên ID
router.get('/vocab/:id', async (req, res) => {
    try {
        const vocab = await Vocab.findById(req.params.id);
        if (!vocab) {
            return res.status(404).json({ message: 'Không tìm thấy từ vựng' });
        }
        res.json(vocab);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Endpoint để thêm comment cho một từ vựng
router.post('/vocab/:id/comments', async (req, res) => {
    try {
        const vocab = await Vocab.findById(req.params.id);
        if (!vocab) {
            return res.status(404).json({ message: 'Không tìm thấy từ vựng' });
        }
        const { user_id, comment_text } = req.body;
        vocab.comments.push({ user_id, comment_text });
        await vocab.save();
        res.status(201).json(vocab);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
