# Aforro Assignment - Dashboard

A modern, responsive dashboard application built with React, Vite, and TailwindCSS. This project displays sales metrics, analytics, and key performance indicators with an intuitive user interface.

---

# Features

- Dashboard Overview with KPIs
  - Total Sales tracking
  - Total Orders count
  - Product Sales analytics
  - User statistics

- Users Management Page
  - Fetch users from public API
  - Search users by name, email, or company
  - Filter users by city
  - Sort users by columns
  - Responsive data table
  - Modern UI with Lucide React icons

- Interactive Charts using Recharts
- Fully Responsive Layout
- Fixed Sidebar and Navbar
- Modern TailwindCSS UI Design
- Fast Development with Vite

---

# Tech Stack

- Frontend Framework: React 19.2
- Build Tool: Vite 8.0
- Styling: TailwindCSS 4.2
- Routing: React Router DOM 7.15
- Charts: Recharts 3.8
- Icons: Lucide React 1.3
- Linting: ESLint 10.2

---

# Project Structure

```bash
src/
├── App.jsx
├── main.jsx
├── index.css
├── components/
│   ├── Layout.jsx
│   ├── Navbar.jsx
│   └── Sidebar.jsx
│
├── pages/
│   ├── dashboard.jsx
│   └── users-table.jsx
│
└── assets/
```

---

# Installation

## 1. Clone Repository

```bash
git clone https://github.com/BUSPV9836L/aforro-assignment.git
cd Aforro-Assignment
```

## 2. Install Dependencies

```bash
npm install
```

---

# Usage

## Start Development Server

```bash
npm run dev
```

Application runs on:

```bash
http://localhost:5173
```

---

## Production Build

```bash
npm run build
```

---

## Preview Production Build

```bash
npm run preview
```

---

## Run ESLint

```bash
npm run lint
```

---

# Dashboard Page

The dashboard includes:

- Revenue Metrics
- Sales Statistics
- Orders Analytics
- Product Performance
- Interactive Graphs
- Responsive KPI Cards

---

# Users Page

The Users Management page fetches data from:

```bash
https://jsonplaceholder.typicode.com/users
```

## Features

### Search Functionality
Users can search by:

- Name
- Email
- Company Name

### Filtering
Filter users based on:

- City

### Sorting
Sortable columns:

- Name
- Email
- Company Name
- City

### Responsive Design
- Mobile optimized
- Horizontal scrolling table
- Modern card-based styling
- Interactive hover effects

### UI Features
- Lucide React Icons
- Gradient backgrounds
- Responsive layout
- Smooth transitions
- Clean table design

---

# Components

## Layout.jsx

Main application wrapper containing:

- Sidebar
- Navbar
- Main content outlet

---

## Sidebar.jsx

Features:

- Navigation menu
- Active route highlighting
- Responsive sidebar behavior
- Lucide icons

---

## Navbar.jsx

Features:

- Page title
- Search area
- Notifications
- User profile section

---

## Dashboard.jsx

Contains:

- KPI cards
- Charts
- Analytics sections
- Sales overview
- Statistics widgets

---

## UsersTable.jsx

Contains:

- API integration
- Search functionality
- Filters
- Sorting
- Responsive table UI

---

# Configuration Files

## vite.config.js

Vite configuration with React plugin support.

## tailwind.config.js

TailwindCSS customization and theme configuration.

## eslint.config.js

Linting rules and code quality setup.

## package.json

Dependencies and project scripts.

---

# Available Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

---

# Browser Support

- Chrome
- Edge
- Firefox
- Safari

Latest versions supported.

---

# Potential Enhancements

- API integration with backend
- Authentication system
- Dark mode support
- Export table data to CSV/PDF
- Pagination
- User profile details page
- Real-time analytics
- Theme customization
- Advanced chart filtering
- State management integration

---

# License

MIT

---

# Author

Created as part of the Aforro Assignment — Dashboard UI & API Integration Challenge.