# NIT ke Chhore

NIT ke Chhore is a full-stack platform for NIT Agartala students. It brings together study notes, coding resources and roadmaps, an online compiler, student community features, and user/admin tools in one place.

## Features

- User registration, login, profile management, and role-based access control
- Engineering notes with PDF upload, browsing, and viewing
- In-browser code execution powered by Judge0
- Frontend and backend learning roadmaps
- Contact form and an admin view for submitted queries
- Light/dark theme support and responsive UI
- About page featuring the Lazy Society members and developers

## Tech Stack

| Area | Technologies |
| --- | --- |
| Frontend | React 19, Vite, React Router, Redux Toolkit |
| Styling | Tailwind CSS, daisyUI, Lucide React, React Icons |
| Backend | Node.js, Express 5 |
| Data and storage | MongoDB/Mongoose, Supabase, Cloudinary |
| Other services | Judge0, PDF.js, Monaco Editor |

## Project Structure

```text
.
├── src/                 # React frontend
│   ├── components/      # Reusable UI and auth components
│   ├── pages/           # Application pages and roadmaps
│   ├── constants/       # Static data, routes, and roadmap content
│   ├── applicationStates/ # Redux store and slices
│   └── context/         # Theme context
├── server/              # Express API
│   ├── routers/         # User, contact, compiler, and notes routes
│   ├── controllers/     # Request handlers
│   ├── models/          # Mongoose models
│   └── uploads/         # Local upload handling
└── vite.config.js       # Vite and development proxy configuration
```

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm
- MongoDB instance (local or hosted)
- Cloudinary account for file storage
- Supabase project for notes storage

### 1. Install dependencies

Install the frontend dependencies from the project root:

```bash
npm install
```

Then install the backend dependencies:

```bash
cd server
npm install
```

### 2. Configure the backend environment

Copy `server/.env.example` to `server/.env`, then provide the required values:

```env
PORT=3030
MONGODB_URI=<your_mongodb_connection_string>

JWT_SECRET_KEY=<your_secret>
JWT_EXPIRY=24h

CLOUDINARY_API=<your_cloudinary_api_key>
CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>

FRONTEND_URL=http://localhost:5173
JUDGE0_API_URL=https://ce.judge0.com

SUPABASE_URL=<your_supabase_url>
SUPABASE_SERVICE_ROLE_KEY=<your_supabase_service_role_key>
```

The Vite development proxy forwards `/api` requests to `http://localhost:3030`, so use `PORT=3030` above or update the proxy target in `vite.config.js` to match your backend port.

### 3. Run the application

Start the backend in one terminal:

```bash
cd server
npm start
```

Start the frontend in a second terminal from the project root:

```bash
npm run dev
```

Open the URL shown by Vite, normally `http://localhost:5173`.

## Available Scripts

### Frontend

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production frontend build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

### Backend

| Command | Description |
| --- | --- |
| `npm start` | Start the Express server with nodemon |

## Main Routes

| Route | Description |
| --- | --- |
| `/` | Home page |
| `/about` | About NIT ke Chhore and its members |
| `/contact` | Contact form |
| `/user/register` | User registration |
| `/user/login` | User login |
| `/profile` | Authenticated user profile |
| `/notes` | Authenticated notes section |
| `/compiler` | Authenticated online compiler |
| `/coding` | Authenticated coding resources |
| `/roadmap/frontend` | Frontend development roadmap |
| `/roadmap/backend` | Backend development roadmap |
| `/admin/queries` | Admin-only contact queries |
| `/admin/uploadnotes` | Admin-only note upload |

## API Endpoints

The Express server exposes endpoints under the following prefixes:

- `/api/user` — authentication and user actions
- `/api/contact` — contact form submissions
- `/api/compiler` — code execution requests
- `/api/notes` — notes upload and retrieval
- `/ping` — server health check

## Contributing

1. Create a branch for your change.
2. Keep changes focused and follow the existing code style.
3. Run `npm run build` before opening a pull request.
4. Describe the change and any environment requirements in the pull request.
