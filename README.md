# Slamma

Slamma is a full-stack MERN application that tracks Grand Slam tennis tournaments, players, rankings, match statistics, and live matches in real time.

The goal of this project is to simulate a scalable sports tracking platform while applying strong system design principles, clean architecture, and modern frontend patterns.

Slamma is built not just as a tracker — but as an engineering exercise in real-time systems, data modeling, and frontend state management.

---

## Overview

Slamma focuses on the four Grand Slam tournaments:

- Australian Open  
- Roland Garros  
- Wimbledon  
- US Open  

The application supports historical data (last 10 years), live match updates via WebSockets, and dynamic tournament bracket visualization.

The initial release supports ATP, with WTA planned for future expansion.

---

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- Socket.io
- MVC architecture

### Frontend
- React (Vite)
- TailwindCSS
- React Router
- Axios
- Socket.io Client

---

## Core Features (MVP)

- View Grand Slam tournament history (last 10 years)
- Browse tournament editions by year
- View player profiles with rankings
- Track match results and statistics
- Manual bracket seeding (v1)
- Real-time match updates using WebSockets
- Admin layer for managing and seeding data

---

## Architecture

This project uses a monolithic repository structure:

```
slamma/
  server/   -> Express API + Socket.io
  client/   -> React frontend
```

### Backend Design

- MVC structure (Models, Controllers, Routes)
- Centralized error handling
- Role-based authorization (planned)
- Real-time event broadcasting with Socket.io rooms

### Real-Time System Design

- Clients subscribe to tournament rooms and live match rooms.
- Admin match updates trigger WebSocket events.
- UI updates occur without page refresh.
- Match statistics are embedded within match documents for atomic updates.

---

## Data Model

Core collections:

- Player
- Tournament
- TournamentEdition
- Match (with embedded stats)
- User
- RankingHistory (planned)

The data model is designed to scale from a tournament tracker to a more analytics-driven system over time.

---

## Learning Objectives

Slamma is intentionally built to deepen understanding of:

- React state ownership and data flow
- WebSocket architecture and room management
- MongoDB schema design and indexing
- Real-time UI synchronization
- Clean backend separation of concerns
- Scalable application structuring

---

## Roadmap

- Backend API foundation
- MongoDB schema implementation
- WebSocket integration
- Tournament edition page
- Bracket visualization
- Admin dashboard
- Ranking history tracking
- ATP to WTA expansion

---

## Future Improvements

- Automated ranking ingestion
- Auto-generated bracket logic
- Advanced match analytics
- Search and filtering
- Dark mode
- Deployment with CI/CD pipeline
