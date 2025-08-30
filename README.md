# 🚀 Hani's AI Assistant - Groq Chatbot

A modern, responsive AI chatbot powered by Groq's lightning-fast Llama3 model. Built with Node.js backend and vanilla JavaScript frontend, featuring real-time chat, offline detection, and mobile-optimized UI.

![Chatbot Preview](https://img.shields.io/badge/Status-Active-brightgreen) ![Node.js](https://img.shields.io/badge/Node.js-18+-blue) ![License](https://img.shields.io/badge/License-MIT-yellow)

## ✨ Features

- **⚡ Lightning Fast**: Powered by Groq's Llama3-8B-8192 model
- **🔒 Secure**: API keys stored safely in environment variables
- **📱 Mobile First**: Responsive design optimized for all devices
- **🌐 Offline Detection**: Smart network status monitoring
- **💬 Real-time Chat**: Instant messaging with typing indicators
- **🎨 Modern UI**: Dark theme with glassmorphism effects
- **🛡️ Error Handling**: Comprehensive error management and user feedback

## 🏗️ Architecture

```
groq-chatbot/
├── server.js              # Node.js Express server
├── package.json           # Dependencies and scripts
├── .env                   # Environment variables (create this)
├── .gitignore            # Git ignore file
├── public/
│   └── index.html        # Frontend chat interface
└── README.md             # This file
```

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ installed
- Groq API account and key
- Modern web browser

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/groq-chatbot.git
cd groq-chatbot
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Get Your Groq API Key

#### Step-by-step Guide:

1. **Visit Groq Console**: Go to [https://console.groq.com/](https://console.groq.com/)

2. **Sign Up/Login**: 
   - Create a new account or login with existing credentials
   - You can sign up with Google, GitHub, or email

3. **Navigate to API Keys**:
   - Once logged in, look for "API Keys" in the sidebar
   - Or go directly to: [https://console.groq.com/keys](https://console.groq.com/keys)

4. **Create New API Key**:
   - Click "Create API Key" button
   - Give it a descriptive name (e.g., "Chatbot Project")
   - Copy the generated key immediately (you won't see it again!)

5. **Save Your Key**: 
   - The key starts with `gsk_` 
   - Keep it secure and never commit to git

### 4. Configure Environment Variables

Create a `.env` file in the project root:

```bash
# Create .env file
touch .env
```

Add your configuration:

```env
# Groq API Configuration
GROQ_API_KEY=gsk_your_actual_groq_api_key_here
GROQ_MODEL=llama3-8b-8192

# Server Configuration  
PORT=3000

# Optional: Other available models
# GROQ_MODEL=llama3-70b-8192
# GROQ_MODEL=mixtral-8x7b-32768
# GROQ_MODEL=gemma-7b-it
```

### 5. Start the Application

```bash
# Development mode (with auto-reload)
npm run dev

# Or production mode
npm start
```

### 6. Access Your Chatbot

Open your browser and navigate to:
```
http://localhost:3000
```

## 📋 Available Scripts

```bash
# Start the server
npm start

# Development mode with auto-reload
npm run dev

# Install dependencies
npm install
```

## 🔧 Configuration Options

### Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `GROQ_API_KEY` | Required | Your Groq API key from console.groq.com |
| `GROQ_MODEL` | `llama3-8b-8192` | AI model to use |
| `PORT` | `3000` | Server port |

### Available Models

- **llama3-8b-8192** (Default) - Fast and efficient
- **llama3-70b-8192** - More powerful, slower
- **mixtral-8x7b-32768** - Good balance of speed/quality
- **gemma-7b-it** - Google's Gemma model

## 🔌 API Endpoints

### `POST /api/chat`
Send a message to the AI assistant.

**Request:**
```json
{
  "message": "Hello, how are you?"
}
```

**Response:**
```json
{
  "response": "Hello! I'm doing great, thank you for asking. How can I help you today?",
  "model": "llama3-8b-8192"
}
```

### `GET /api/health`
Check server and model status.

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "model": "llama3-8b-8192"
}
```

## 📱 Mobile Support

The chatbot is fully responsive and optimized for mobile devices:

- **Touch-friendly**: Large tap targets and smooth scrolling
- **Viewport optimized**: Proper scaling on all screen sizes
- **Offline support**: Works gracefully without internet connection
- **PWA ready**: Can be installed as a mobile app

## 🛡️ Security Features

- **Environment variables**: API keys never exposed to frontend
- **CORS enabled**: Secure cross-origin requests
- **Input validation**: Message length limits and sanitization
- **Error handling**: No sensitive information in error messages
- **Timeout protection**: Prevents hanging requests

## 🔍 Troubleshooting

### Common Issues

**❌ "Invalid API key" error**
- Double-check your API key in `.env`
- Ensure no extra spaces or characters
- Verify key is active in Groq console

**❌ "Cannot connect to server"**
- Make sure server is running (`npm start`)
- Check if port 3000 is available
- Verify `.env` file exists and is properly formatted

**❌ "Module not found" error**
- Run `npm install` to install dependencies
- Check Node.js version (requires 16+)

**❌ Mobile display issues**
- Clear browser cache
- Check responsive design toggle in dev tools
- Ensure viewport meta tag is present

### Debug Mode

Enable debug logging:

```bash
DEBUG=* npm start
```

## 🚀 Deployment Options

### 1. **Heroku**
```bash
# Install Heroku CLI, then:
heroku create your-chatbot-name
heroku config:set GROQ_API_KEY=your_key_here
git push heroku main
```

### 2. **Vercel**
```bash
# Install Vercel CLI, then:
vercel
# Follow prompts and add environment variables
```

### 3. **Railway**
```bash
# Install Railway CLI, then:
railway login
railway init
railway add
railway deploy
```

### 4. **DigitalOcean App Platform**
- Connect your GitHub repo
- Add environment variables in the dashboard
- Deploy automatically

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Groq** for providing lightning-fast AI inference
- **Llama3** by Meta for the powerful language model
- **Express.js** for the robust web framework
- **Modern CSS** techniques for the beautiful UI

## 📞 Support

If you encounter any issues or have questions:

1. Check the [troubleshooting section](#-troubleshooting)
2. Review [Groq's documentation](https://console.groq.com/docs)
3. Create an issue on GitHub
4. Contact: [your-email@example.com](mailto:your-email@example.com)

---

**Built with ❤️ by Hani Ayach | Full Stack Developer**

*Happy Coding! 🚀*
