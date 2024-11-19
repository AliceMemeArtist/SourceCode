const mongoose = require('mongoose');

async function connectToDB() {
    const DB_URI = 'mongodb://localhost:27017/alice-ai-bot';
    try {
        await mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Database connected successfully!');
    } catch (error) {
        throw new Error('Database connection failed: ' + error.message);
    }
}

module.exports = { connectToDB };
