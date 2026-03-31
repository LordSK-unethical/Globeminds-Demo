# GlobeMinds Technologies Website

A full-stack web application replicating GlobeMinds Technologies website with enhancements.

## Tech Stack

- **Frontend**: React.js, TailwindCSS, Framer Motion
- **Backend**: Node.js, Express
- **Database**: MongoDB

## Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB (local or cloud instance)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
- Copy `.env.example` to `.env`
- Update MongoDB URI and email credentials

### Running the Application

**Development mode (frontend only):**
```bash
npm run dev
```

**Backend only:**
```bash
npm run server
```

**Full stack (concurrent):**
```bash
npm start
```

### Project Structure
```
/client      -> React frontend
/server      -> Node.js backend
/public      -> Static assets
```

## Features

- **Home Page**: Animated hero section, company introduction, services highlights
- **About Us**: Vision, Mission, Plan sections with animated skill progress bars
- **Services**: Card layout with hover animations for all services
- **Products**: Interactive product cards
- **Career**: Job listings with application form (MongoDB storage)
- **Contact**: Form with math captcha verification (Nodemailer integration)
