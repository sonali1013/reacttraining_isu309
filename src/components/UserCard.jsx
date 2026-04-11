import './UserCard.css';

function UserCard({ user }) {
  return (
    <div className="user-card">
      <div className="user-avatar">
        <div className="avatar-circle">
          <svg className="avatar-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="8" r="4" fill="currentColor"/>
            <path d="M4 20c0-4.418 3.582-8 8-8s8 3.582 8 8" fill="currentColor"/>
          </svg>
        </div>
      </div>
      
      <div className="user-info">
        <h2 className="user-name">{user.name}</h2>
        
        <div className="info-item">
          <span className="label">Username:</span>
          <span className="value">{user.username}</span>
        </div>
        
        <div className="info-item">
          <span className="label">Company:</span>
          <span className="value">{user.company.name}</span>
        </div>
        
        <div className="info-item">
          <span className="label">Phone:</span>
          <span className="value">{user.phone}</span>
        </div>
        
        <div className="info-item">
          <span className="label">Email:</span>
          <span className="value">{user.email}</span>
        </div>
        
        <div className="info-item">
          <span className="label">Website:</span>
          <span className="value">{user.website}</span>
        </div>
        
        <div className="info-item">
          <span className="label">City:</span>
          <span className="value">{user.address.city}</span>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
