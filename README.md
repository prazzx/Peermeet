![Version](https://img.shields.io/badge/version-1.0.0-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![Contributors](https://img.shields.io/github/contributors/prazzx/peermeet)

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

PeerMeet is a web-based social platform for university students to discover and connect with peers who share similar interests. Instead of predefined Instructor/Learner roles, any student can create a profile highlighting their skills and interests. The system intelligently suggests connections based on interest similarity, fostering a collaborative community for peer-to-peer learning and networking.

## Features

* **Profile Creation**: Users build profiles with bios, skills, and interests.
* **Interest Matching**: Uses NLP-based embeddings to calculate similarity scores between profiles and recommend relevant connections.
* **Similar Profiles Dashboard**: Browse a personalized list of peers sorted by similarity percentage.
* **Search & Filter**: Filter users by interest tags or keywords.
* **Authentication**: Secure sign-up and login with Firebase.
* **Responsive UI**: Clean, mobile-friendly interface built with React and Tailwind.

## Tech Stack

* **Frontend**: React.js, Tailwind CSS
* **Backend**:

  * Node.js & Express.js (user profile API)
  * Flask & SentenceTransformers (similarity engine)
* **Database & Auth**: Firebase (Firestore for profiles, Firebase Auth)
* **Deployment**: Vercel (frontend), Heroku (backend)

## Architecture

```text
[ React Frontend ] ↔ [ Express.js API ] ↕ [ Flask Similarity Service ]
                         → [ Firebase (Auth & Firestore) ]
```

## Getting Started

### Prerequisites

* Node.js v14+
* npm or yarn
* Firebase account
* Heroku account (for deployment)

### Installation

1. **Clone repository**

   ```bash
   git clone https://github.com/prazzx/peermeet.git
   cd peermeet
   ```

2. **Install dependencies**

   ```bash
   # Frontend
   cd client
   npm install

   # Express API
   cd ../server
   npm install

   # Similarity service
   cd ../similarity-service
   pip install -r requirements.txt
   ```

### Running Locally

1. **Configure environment variables**

   * Frontend (`client/.env`): API base URL, Firebase config.
   * Server (`server/.env`): FIREBASE\_SERVICE\_ACCOUNT, PORT.
   * Similarity Service (`similarity-service/.env`): MODEL\_NAME (e.g., `all-MiniLM-L6-v2`).

2. **Start services**

   ```bash
   # Start similarity engine
   cd similarity-service
   flask run --port=5001

   # Start API server
   cd ../server
   npm run dev

   # Start frontend
   cd ../client
   npm start
   ```

3. **Open in browser**
   Visit `http://localhost:3000` to explore PeerMeet.

## Usage

1. **Sign Up / Login**: Create an account via Firebase Auth.
2. **Complete Profile**: Add bio, select interests, and upload an avatar.
3. **View Suggestions**: Go to "Similar Profiles" to see recommended peers with similarity scores.
4. **Connect**: Reach out via contact info or integrated messaging (if enabled).

## API Endpoints

> Base URL: `http://localhost:5000`

| Method | Endpoint             | Description                    |
| ------ | -------------------- | ------------------------------ |
| POST   | `/api/auth/register` | Register new user              |
| POST   | `/api/auth/login`    | Login and receive JWT          |
| GET    | `/api/users/me`      | Get current user profile       |
| PUT    | `/api/users/me`      | Update profile                 |
| GET    | `/api/users`         | List all user profiles         |
| GET    | `/api/similar/:id`   | Get similarity scores for user |

## Contributing

We welcome contributions! Please:

1. Fork the repo.
2. Create a feature branch: `git checkout -b feature/YourFeature`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to branch: `git push origin feature/YourFeature`.
5. Open a Pull Request.

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.

## Contact

* [@prazzx](https://github.com/prazzx)
* [@AmanKarn-00](https://github.com/AmanKarn-00)
* [@coderag10](https://github.com/coderag10)
* [@Bibesx](https://github.com/Bibesx)
* [@Solta420](https://github.com/Solta420)
