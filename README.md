# Aforro Assignment - Dashboard

A modern, responsive dashboard application built with React, Vite, and TailwindCSS. This project displays sales metrics, analytics, and key performance indicators with an intuitive user interface.

## Features

- **Dashboard Overview**: Real-time sales metrics and KPIs
  - Total Sales tracking
  - Total Orders count
  - Product Sales data
  - User analytics
- **Interactive Charts**: Data visualization using Recharts
- **Responsive Layout**: Mobile-friendly design with fixed sidebar and navbar
- **Modern UI**: Built with TailwindCSS and Lucide React icons
- **Fast Development**: Powered by Vite for instant HMR and optimized builds

## Tech Stack

- **Frontend Framework**: React 19.2
- **Build Tool**: Vite 8.0
- **Styling**: TailwindCSS 4.2 with Vite plugin
- **Routing**: React Router DOM 7.15
- **Data Visualization**: Recharts 3.8
- **Icons**: Lucide React 1.3
- **Code Quality**: ESLint 10.2

## Project Structure

```
src/
├── App.jsx              # Main application component with routing
├── main.jsx             # Entry point
├── index.css            # Global styles
├── components/
│   ├── Layout.jsx       # Main layout with sidebar and navbar
│   ├── Navbar.jsx       # Top navigation bar
│   └── Sidebar.jsx      # Side navigation menu
├── pages/
│   └── dashboard.jsx    # Dashboard page with metrics and charts
└── assets/              # Static assets
```

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Aforro-Assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## Usage

### Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another available port).

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code quality with ESLint:

```bash
npm run lint
```

## Configuration Files

- **vite.config.js**: Vite configuration with React plugin
- **tailwind.config.js**: TailwindCSS customization
- **eslint.config.js**: ESLint rules for code quality
- **package.json**: Project dependencies and scripts

## Components

### Layout
The main layout wrapper that includes:
- Fixed sidebar navigation
- Fixed top navbar
- Main content area with page outlet

### Dashboard
The main dashboard page featuring:
- Sales metrics cards
- Order statistics
- Product sales information
- User analytics
- Interactive charts for data visualization

## Getting Started

1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Open `http://localhost:5173` in your browser
4. Begin developing with hot module replacement enabled

## License

This project is part of the Aforro Assignment.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Potential Enhancements

- Add pagination for large datasets
- Implement real API endpoints for metrics
- Add chart library like Chart.js or Recharts
- Add user authentication
- Implement dark mode toggle
- Add export to PDF/CSV functionality
- Add more detailed user profile views
- Implement API caching
- Add user activity logging

## License

MIT

## Author

Created as part of the Aforro Assignment - Sales Dashboard UI & API Integration Challenge
