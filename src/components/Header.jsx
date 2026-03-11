import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-right">
        <a href="https://mail.google.com" className="header-link" target="_blank" rel="noopener noreferrer">
          Gmail
        </a>
        <a href="https://images.google.com" className="header-link" target="_blank" rel="noopener noreferrer">
          Images
        </a>

        {/* User Profile Avatar */}
        <button className="avatar-btn" aria-label="User Profile">
          <div className="avatar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
