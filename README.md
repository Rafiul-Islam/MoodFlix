# 🎬 MoodFlix

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Appwrite](https://img.shields.io/badge/Appwrite-1.x-FF2E63?logo=appwrite&logoColor=white)](https://appwrite.io/)

A modern movie discovery platform that helps you find the perfect film based on your mood. Explore trending movies, search for your favorites, and build your personal searchlist.

## ✨ Features

- **Mood-Based Recommendations** - Get personalized movie suggestions based on how you're feeling
- **Trending Movies** - Discover what's popular right now
- **Smart Search** - Find movies by title, genre, or mood
- **Searchlist** - Save and organize your movie searches
- **Responsive Design** - Works seamlessly on all devices

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ & npm/yarn
- Appwrite server (for backend functionality)
- TMDB API key

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/moodflix.git
cd moodflix
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Create and configure environment file:
```bash
# Copy the example environment file
cp .env.example .env

# Edit the .env file with your configuration
# Windows:
notepad .env
# Or use any text editor of your choice
#
# Update these variables in your .env file:
# VITE_TMDB_API_KEY=your_tmdb_api_key_here
# VITE_APPWRITE_ENDPOINT=your_appwrite_endpoint_here
# VITE_APPWRITE_PROJECT_ID=your_project_id_here
```

4. Start the development server
```bash
npm run dev
# or
yarn dev
```

## 🛠 Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS
- **Backend**: Appwrite
- **State Management**: React Hooks
- **API**: TMDB API

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🙏 Acknowledgments

- [TMDB API](https://www.themoviedb.org/documentation/api) for the movie data
- [Appwrite](https://appwrite.io/) for the backend services
- [Vite](https://vitejs.dev/) for the amazing build tooling

---

Made with ❤️ by Rafiul Islam
