const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config()
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors())
app.use(bodyParser.json());

// Connect to MongoDB
try {
    mongoose.connect(process.env.MONGODB_CONNECTION).then(() => {
        console.log("Db Conneted!")
    })
} catch (error) {
    console.log(error)
}


// Create Feedback schema
const feedbackSchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    detail: { type: String, required: true },
    status: { type: String, require: false, default: "Suggetion" }

});

const Feedback = mongoose.model('Feedback', feedbackSchema);


// Routes
// Create feedback
app.post('/feedback', async (req, res) => {
    try {
        const feedback = new Feedback(req.body);
        await feedback.save();
        res.status(201).json(feedback);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read feedback
app.get('/feedback', async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        res.json(feedbacks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/feedback/:id', async (req, res) => {
    try {
        let id = req.params.id
        const feedbacks = await Feedback.findById({ _id: id });
        res.json(feedbacks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Update feedback
app.patch('/feedback/:id', async (req, res) => {
    try {
        const feedback = await Feedback.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(feedback);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete feedback
app.delete('/feedback/:id', async (req, res) => {
    try {
        const feedback = await Feedback.findByIdAndDelete(req.params.id);
        res.json(feedback);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
