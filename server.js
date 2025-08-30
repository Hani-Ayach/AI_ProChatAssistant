const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serve your HTML file from 'public' folder

// Chat endpoint
app.post('/api/chat', async (req, res) => {
    try {
        const { message } = req.body;
        
        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
            },
            body: JSON.stringify({ 
                model: process.env.GROQ_MODEL || 'llama3-8b-8192',
                messages: [
                    {
                        role: 'user',
                        content: message
                    }
                ],
                temperature: 0.7,
                max_tokens: 1000
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Groq API Error: ${errorData.error?.message || 'Unknown error'}`);
        }

        const data = await response.json();
        res.json({ 
            response: data.choices[0].message.content,
            model: process.env.GROQ_MODEL || 'llama3-8b-8192'
        });

    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ 
            error: 'Failed to get AI response',
            details: error.message 
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        model: process.env.GROQ_MODEL || 'llama3-8b-8192'
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📱 Chat UI available at http://localhost:${PORT}`);
    console.log(`🔑 Using model: ${process.env.GROQ_MODEL || 'llama3-8b-8192'}`);
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
    console.log('👋 Server shutting down...');
    process.exit(0);
});