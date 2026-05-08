# Aforro Dashboard - Sales Analytics Application

A modern React-based sales dashboard with API integration and data management capabilities. Features a clean, intuitive UI with real-time data visualization and user management.

## Project Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Aforro-Assignment.git
   cd Aforro-Assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5174`

4. **Build for production**
   ```bash
   npm run build
   ```

## Features Implemented

### Part 1: UI Implementation
- **Dashboard Layout**: Professional sales dashboard with sidebar navigation
- **Header Section**: Search functionality and user profile display
- **Metrics Cards**: Display key metrics (Total Sales, Total Orders, Product Sold, New Customers)
- **Charts Section**: 
  - Bar chart for Total Revenue by day
  - Line chart for Customer Satisfaction trends
  - Grouped bar chart for Target vs Reality comparison
  - Map visualization for Sales by Country
- **Responsive Design**: Mobile-first approach with breakpoints for tablets and desktops
- **Modern Styling**: Clean, professional look with purple gradient theme

### Part 2: API Integration & Data Table
- **User Data Fetching**: Fetch from JSONPlaceholder API (`https://jsonplaceholder.typicode.com/users`)
- **Data Table**: Display users with columns:
  - Name
  - Email
  - Company Name
  - City
- **Search Functionality**: 
  - Search by name or email in real-time
- **Sorting**:
  - Click on "Name" column header to toggle A-Z and Z-A sorting
  - Visual indicator (↑/↓) shows current sort order
- **Filtering**:
  - Filter users by city using dropdown selector
  - "All Cities" option to view all users
- **State Management**:
  - Loading state display while fetching data
  - Error handling for failed API requests
  - "No results" message when filters return empty

## Project Structure

```
src/
├── components/
│   ├── Sidebar.jsx          # Navigation sidebar
│   ├── Header.jsx           # Top header with search and profile
│   ├── MetricsCard.jsx      # Reusable metric card component
│   ├── Charts.jsx           # Dashboard charts visualization
│   └── UsersTable.jsx       # User data table with features
├── App.jsx                  # Main app component
├── App.css                  # Global and component styles
├── main.jsx                 # React entry point
└── index.css                # Base styles
```

## Technology Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Fetch API** - Data fetching
- **CSS3** - Styling with flexbox and grid
- **ES6+** - Modern JavaScript

## Assumptions

1. **Mock Data**: Metrics data (Total Sales, Orders, etc.) are hardcoded for demonstration
2. **API**: Assumes JSONPlaceholder API is publicly accessible and stable
3. **Styling**: Uses vanilla CSS instead of frameworks (Tailwind/Bootstrap) for minimal dependencies
4. **Chart Visualization**: Charts are simplified representations using CSS and basic HTML elements
5. **Responsive Design**: Tested on modern browsers; IE not supported
6. **User Information**: Displays all 10 users from the API without pagination

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
