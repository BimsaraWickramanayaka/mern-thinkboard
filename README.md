# 📝 MERN Thinkboard

A modern, full-stack note-taking application built with the MERN stack (MongoDB, Express.js, React, Node.js). Create, organize, and manage your thoughts seamlessly with a beautiful, responsive interface.

![MERN Stack](https://img.shields.io/badge/Stack-MERN-green)
![Node.js](https://img.shields.io/badge/Node.js-v22.19.0-green)
![React](https://img.shields.io/badge/React-v19.1.1-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)

## 🌟 Features

- ✅ **Full CRUD Operations** - Create, Read, Update, Delete notes
- 🎨 **Modern UI/UX** - Built with TailwindCSS and DaisyUI
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile
- ⚡ **Real-time Updates** - Hot reload in development
- 🔒 **Rate Limiting** - API protection with Upstash Redis
- 🚀 **Production Ready** - Optimized build and deployment configuration
- 🌐 **Single Server Deployment** - Backend serves both API and frontend

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **DaisyUI** - Beautiful component library
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests
- **React Hot Toast** - Elegant notifications
- **Lucide React** - Modern icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **Upstash Redis** - Rate limiting and caching
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account or local MongoDB
- Upstash Redis account (for rate limiting)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/BimsaraWickramanayaka/mern-thinkboard.git
   cd mern-thinkboard
   ```

2. **Install dependencies and build**
   ```bash
   npm run build
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the `backend` directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=5001
   NODE_ENV=production
   UPSTASH_REDIS_REST_URL=your_upstash_redis_url
   UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
   ```

4. **Start the application**
   ```bash
   npm run start
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5001`

## 🔧 Development

For development with hot reload and auto-restart:

### Terminal 1 - Backend Development
```bash
cd backend
npm run dev
```

### Terminal 2 - Frontend Development
```bash
cd frontend
npm run dev
```

Then open:
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5001/api/notes`

## 📁 Project Structure

```
mern-thinkboard/
├── 📄 package.json          # Root deployment scripts
├── 📄 README.md             # Project documentation
├── 📁 backend/              # Node.js/Express server
│   ├── 📁 src/
│   │   ├── 📁 config/       # Database and external service configs
│   │   ├── 📁 controllers/  # Request handlers
│   │   ├── 📁 middleware/   # Custom middleware (rate limiting)
│   │   ├── 📁 models/       # MongoDB/Mongoose models
│   │   ├── 📁 routes/       # API route definitions
│   │   └── 📄 server.js     # Express server entry point
│   ├── 📄 package.json      # Backend dependencies
│   └── 📄 .env              # Environment variables
└── 📁 frontend/             # React application
    ├── 📁 src/
    │   ├── 📁 components/   # Reusable React components
    │   ├── 📁 pages/        # Page components
    │   ├── 📁 lib/          # Utility functions and configs
    │   └── 📄 App.jsx       # Main App component
    ├── 📁 dist/             # Production build files
    └── 📄 package.json      # Frontend dependencies
```

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Get all notes |
| GET | `/api/notes/:id` | Get note by ID |
| POST | `/api/notes` | Create new note |
| PUT | `/api/notes/:id` | Update existing note |
| DELETE | `/api/notes/:id` | Delete note |

## 🎯 Scripts

### Root Level
- `npm run build` - Install dependencies and build frontend
- `npm run start` - Start production server

### Backend
- `npm run dev` - Start development server with nodemon
- `npm run start` - Start production server

### Frontend
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🚀 Deployment

### Environment Setup

1. **MongoDB Atlas**
   - Create a cluster and get connection string
   - Add your IP to whitelist

2. **Upstash Redis**
   - Create Redis database
   - Get REST URL and token

3. **Deploy to Platform**
   
   For platforms like Heroku, Railway, or Render:
   ```bash
   # Build the application
   npm run build
   
   # Start the server
   npm run start
   ```

### Environment Variables for Production
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/thinkboard
PORT=5001
NODE_ENV=production
UPSTASH_REDIS_REST_URL=https://your-redis-url.upstash.io
UPSTASH_REDIS_REST_TOKEN=your-redis-token
```

## 🔒 Security Features

- **Rate Limiting** - Prevents API abuse using Redis
- **Input Validation** - Server-side request validation
- **Error Handling** - Graceful error responses
- **CORS Configuration** - Proper cross-origin setup
- **Environment Variables** - Sensitive data protection

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

**Bimsara Wickramanayaka**
- GitHub: [@BimsaraWickramanayaka](https://github.com/BimsaraWickramanayaka)

## 🙏 Acknowledgments

- Built following modern MERN stack best practices
- Inspired by note-taking applications like Notion and Obsidian
- UI components powered by DaisyUI and TailwindCSS

---

⭐ **Star this repository if you found it helpful!**