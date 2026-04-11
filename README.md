# User Card Gallery

A React application that demonstrates the use of React 19's `use()` hook to fetch and display user data from an API.

## Features

- ✨ Uses React 19's `use()` hook for handling asynchronous data fetching
- 🎨 Beautiful card-based UI with responsive design
- 🔄 Suspense integration for loading states
- 📱 Mobile-friendly layout
- 🎯 Fetches data from JSONPlaceholder API

## Project Structure

```
react/
├── src/
│   ├── components/
│   │   ├── UserCard.jsx          # User card component
│   │   └── UserCard.css          # Card styling
│   ├── utils/
│   │   └── fetchUsers.js         # API fetch utility
│   ├── App.jsx                   # Main app with use() hook
│   ├── App.css                   # App styling
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## How It Works

### The `use()` Hook

The application demonstrates React 19's `use()` hook, which allows you to read the value of a Promise directly in your component:

```jsx
const users = use(usersPromise);
```

This hook works seamlessly with React Suspense to handle loading states:

- While the promise is pending, the component suspends
- React shows the Suspense fallback (loading state)
- When the promise resolves, the component renders with the data

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the Project

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Build for Production

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## API

The app fetches user data from:
- **Endpoint**: https://jsonplaceholder.typicode.com/users
- **Method**: GET
- **Response**: Array of user objects with name, email, phone, company, address, etc.

## Key Concepts Demonstrated

1. **React 19 `use()` Hook**: Reading promises directly in components
2. **Suspense**: Handling loading states declaratively
3. **Component Composition**: Separating concerns with reusable components
4. **Modern React**: Using Vite and React 19 features
5. **Responsive Design**: Mobile-first approach with CSS Grid

## Browser Requirements

- Modern browsers with React 19 support
- The `use()` hook is available in React 19+

## License

MIT
