# CodeDose - Daily DSA Practice

A production-ready personal productivity web app that provides **2 daily DSA questions with AI-generated solutions**.

![CodeDose](https://img.shields.io/badge/CodeDose-v1.0.0-6366f1?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2-61dafb?style=flat-square&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?style=flat-square&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-8.x-47a248?style=flat-square&logo=mongodb)
![Gemini](https://img.shields.io/badge/Gemini-AI-4285f4?style=flat-square&logo=google)

## ✨ Features

- **Daily Questions**: Get 2 fresh DSA questions every day
- **AI Solutions**: Generate optimized solutions using Gemini AI
- **Multiple Languages**: Support for JavaScript, Python, C++, and Java
- **Reset System**: Get new questions instantly with one click
- **PWA Support**: Install as a native app on any device
- **Offline Support**: Basic offline functionality
- **Daily Notifications**: Reminder notifications to practice
- **Copy & Use**: Easy copy code for manual submission

## 🛠️ Tech Stack

### Frontend
- React 18 (Vite)
- Tailwind CSS
- Axios
- PWA (vite-plugin-pwa)

### Backend
- Node.js (Vercel Serverless Functions)
- MongoDB (Mongoose)
- Google Gemini AI

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- MongoDB Atlas account
- Google Gemini API key

### Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env with your credentials:
# MONGO_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/codedose
# GEMINI_API_KEY=your-gemini-api-key

# Seed the database
npm run seed

# Start development server
npm run dev
```

### Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📁 Project Structure

```
CodeDose/
├── backend/
│   ├── api/
│   │   ├── questions/
│   │   │   ├── today.js       # GET /api/questions/today
│   │   │   ├── reset.js       # POST /api/questions/reset
│   │   │   ├── questionModel.js
│   │   │   ├── dailyModel.js
│   │   │   ├── cacheModel.js
│   │   │   └── questionService.js
│   │   └── solution.js        # POST /api/solution
│   ├── lib/
│   │   ├── db.js              # MongoDB connection
│   │   ├── gemini.js          # Gemini AI integration
│   │   ├── utils.js           # Utility functions
│   │   └── questionsSeed.js   # Database seeder
│   ├── .env                   # Environment variables
│   ├── vercel.json           # Vercel configuration
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── QuestionCard.jsx
│   │   │   ├── SolutionModal.jsx
│   │   │   └── LoadingScreen.jsx
│   │   ├── utils/
│   │   │   ├── api.js
│   │   │   └── toast.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   │   ├── sw.js              # Service Worker
│   │   └── offline.html
│   ├── .env
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

## 🌐 API Endpoints

### GET `/api/questions/today`
Returns today's 2 questions.

**Response:**
```json
{
  "success": true,
  "questions": [
    {
      "id": "...",
      "title": "Two Sum",
      "link": "https://leetcode.com/problems/two-sum/",
      "platform": "LeetCode",
      "difficulty": "Easy"
    }
  ],
  "date": "2024-01-15"
}
```

### POST `/api/questions/reset`
Resets and returns 2 new questions.

**Response:** Same as above with `message: "Questions reset successfully"`

### POST `/api/solution`
Generates AI solution for a question.

**Request:**
```json
{
  "questionId": "...",
  "language": "javascript"
}
```

**Response:**
```json
{
  "success": true,
  "solution": "// Time: O(n), Space: O(n)\nfunction twoSum...",
  "cached": false
}
```

## 🔧 Environment Variables

### Backend (.env)
```
MONGO_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/codedose
GEMINI_API_KEY=your-gemini-api-key
```

### Frontend (.env)
```
VITE_API_URL=/api

# For production (separate Vercel deployments):
# VITE_API_URL=https://your-backend-url.vercel.app/api
```

## 🚢 Deployment

### Vercel Deployment

1. **Backend Deployment:**
```bash
cd backend
vercel deploy
```

2. **Frontend Deployment:**
```bash
cd frontend
vercel deploy
```

3. **Set Environment Variables in Vercel Dashboard:**

   **Backend:**
   - `MONGO_URI` - MongoDB Atlas connection string
   - `GEMINI_API_KEY` - Google Gemini API key

   **Frontend (CRITICAL for CORS):**
   - `VITE_API_URL` = `https://your-backend-vercel-url.vercel.app/api`
   
   Replace `your-backend-vercel-url` with your actual backend deployment URL.

### Important: CORS Setup

If frontend and backend are on different domains, you MUST set `VITE_API_URL` in the frontend Vercel deployment to point to your backend URL. The backend already has CORS headers set to `*` to allow all origins.

### MongoDB Atlas Setup

1. Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a database user
3. Whitelist IP `0.0.0.0/0` for development
4. Get connection string and add to `.env`

### Gemini API Setup

1. Get API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Add to `.env` as `GEMINI_API_KEY`

## 📱 PWA Installation

1. Open the app in a modern browser
2. Click "Install" or use browser menu
3. App will be available offline with cached assets

## 🔔 Notifications

The app requests notification permission on first visit. If granted, it sends daily reminders at 9:00 AM.

To enable/disable notifications:
- Desktop: Browser notification settings
- Mobile: App settings

## 🎯 Usage

1. **View Daily Questions**: Open the app to see today's 2 questions
2. **Select Language**: Choose your preferred programming language
3. **Open Problem**: Click to practice on the coding platform
4. **View Solution**: Get AI-generated optimized solution
5. **Copy Code**: Copy solution for manual submission
6. **Reset**: Get new questions if needed

## 🔒 Security Notes

- Never commit `.env` files with real credentials
- Use Vercel environment variables for production
- Keep MongoDB credentials secure
- Gemini API has rate limits - solution caching helps

## 📄 License

MIT License - feel free to use and modify.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For issues or feature requests, please open an issue on GitHub.

---

Built with ❤️ for the DSA community
