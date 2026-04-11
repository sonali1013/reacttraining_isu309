import { Suspense, use } from 'react';
import UserCard from './components/UserCard';
import { fetchUsers } from './fetchUsers';
import ErrorBoundary from './error';
import './App.css';

// Create the promise outside the component to avoid re-fetching
const usersPromise = fetchUsers();


function UserGallery() {
  // The use() hook reads the promise and suspends while it's pending
  const users = use(usersPromise);

  return (
    <div className="user-gallery">
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>User Card Gallery</h1>
      </header>
      
      <ErrorBoundary>
        <Suspense fallback={<p style={{ textAlign: "center" }}> Loading users...</p>}>
          <UserGallery />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}


export default App;
