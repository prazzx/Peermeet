# PeerMeet

[![Version](https://img.shields.io/badge/version-1.0.0-blue)]()
[![License](https://img.shields.io/badge/license-MIT-green)]()
[![Issues](https://img.shields.io/github/issues/prazzx/peermeet)]()
[![Contributors](https://img.shields.io/github/contributors/prazzx/peermeet)]()

## Table of Contents

* [Description](#description)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Architecture](#architecture)
* [Getting Started](#getting-started)

  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Running Locally](#running-locally)
* [Usage](#usage)
* [API Endpoints](#api-endpoints)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)

## Description

PeerMeet is a web-based peer-to-peer learning platform designed for university students to teach and learn skills from one another. Students can sign up as **Instructors** or **Learners**, set their hourly rates, schedule sessions, and handle payments directly on the platform. Built with the MERN stack, PeerMeet aims to foster a collaborative learning community and streamline knowledge exchange.

## Features

* **User Roles**:

  * **Instructor**: Create courses, set availability, earn by teaching.
  * **Learner**: Browse skills, book sessions, make secure payments.
* **Skill Matching**: Intelligent recommendations based on interest and availability.
* **Real-time Chat**: In-app messaging to discuss course details.
* **Video/Audio Calls**: Seamless integration for live teaching (optional).
* **Payment Gateway**: Secure payment processing with Stripe.
* **Ratings & Reviews**: Feedback system to ensure quality.
* **Dashboard**: Personalized dashboards for tracking sessions, earnings, and learning history.

## Tech Stack

* **Frontend**: React.js, Tailwind CSS
* **Backend**: Node.js, Express.js
* **Database**: MongoDB Atlas
* **Authentication**: JSON Web Tokens (JWT)
* **Deployment**: Vercel (frontend), Heroku (backend)

## Architecture

```
[ React Frontend ] ←→ [ Express API ] ←→ [ MongoDB Atlas ]
                   ↕
               [ Stripe ]
```

## Getting Started

### Prerequisites

* Node.js v14+
* npm
* MongoDB Atlas account


### Installation

1. **Clone repository**

   ```bash
   git clone https://github.com/yourusername/peermeet.git
   cd peermeet
   ```

2. **Install dependencies**

   ```bash
   # Frontend
   cd client
   npm install

   # Backend
   cd ../server
   npm install
   ```

### Running Locally

1. **Configure environment variables**

   * Create a `.env` file in `/server` with:

     ```
     PORT=5000
     MONGODB_URI=your_mongo_connection_string
     JWT_SECRET=your_jwt_secret
     STRIPE_SECRET_KEY=your_stripe_secret_key
     ```
2. **Start backend**

   ```bash
   cd server
   npm run dev
   ```
3. **Start frontend**

   ```bash
   cd ../client
   npm start
   ```
4. **Open in browser**
   Visit `http://localhost:3000` to explore PeerMeet.

## Usage

1. **Sign Up** as an Instructor or Learner.
2. **Complete Profile** with bio, skills, and hourly rate (for instructors).
3. **Browse Skills** or **Create Course**.
4. **Book a Session**: Select date/time, confirm, and pay.
5. **Join Session** via in-app video/audio link.
6. **Rate & Review** your experience.

## API Endpoints

> Base URL: `https://api.peermeet.app` (or `http://localhost:5000` in dev)

| Method | Endpoint               | Description                            |
| ------ | ---------------------- | -------------------------------------- |
| POST   | `/api/auth/register`   | Register new user                      |
| POST   | `/api/auth/login`      | Authenticate and get JWT               |
| GET    | `/api/users/me`        | Get current user profile               |
| PUT    | `/api/users/me`        | Update profile                         |
| GET    | `/api/courses`         | List all courses                       |
| POST   | `/api/courses`         | Create a new course (Instructors only) |
| GET    | `/api/courses/:id`     | Get course details                     |
| POST   | `/api/bookings`        | Book a course session                  |
| GET    | `/api/bookings/me`     | Get my bookings                        |
| POST   | `/api/payments/create` | Create Stripe payment intent           |

## Contributing

We welcome contributions! Please:

1. Fork the repo.
2. Create a feature branch: `git checkout -b feature/YourFeature`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to branch: `git push origin feature/YourFeature`.
5. Open a Pull Request.

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

## Contact
- [@AmanKarn-00](https://github.com/AmanKarn-00)
- [@prazzx](https://github.com/prazzx)
- [@coderag10](https://github.com/coderag10)
- [@Bibesx](https://github.com/Bibesx)
- [@Solta420](https://github.com/Solta420)
