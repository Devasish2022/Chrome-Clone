import React, { useState } from 'react';

const MainSearch = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
    }
  };

  return (
    <div className="main-search">
      {/* Google Logo */}
      <div className="google-logo">
        <span className="logo-g">G</span>
        <span className="logo-o1">o</span>
        <span className="logo-o2">o</span>
        <span className="logo-g2">g</span>
        <span className="logo-l">l</span>
        <span className="logo-e">e</span>
      </div>

      {/* Search Bar */}
      <form className="search-bar" onSubmit={handleSearch}>
        {/* Magnifying Glass Icon */}
        <div className="search-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9aa0a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>

        <input
          type="text"
          className="search-input"
          placeholder="Search Google or type a URL"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />

        {/* <div className="search-actions">
          <button type="button" className="action-icon" aria-label="Voice Search">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" fill="#4285f4" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" stroke="#4285f4" strokeWidth="2" strokeLinecap="round" />
              <line x1="12" y1="19" x2="12" y2="23" stroke="#4285f4" strokeWidth="2" strokeLinecap="round" />
              <line x1="8" y1="23" x2="16" y2="23" stroke="#4285f4" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <button type="button" className="action-icon" aria-label="Google Lens">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="4" width="20" height="16" rx="3" stroke="#f28b82" strokeWidth="2" fill="none" />
              <circle cx="12" cy="12" r="4" stroke="#4285f4" strokeWidth="2" fill="none" />
              <circle cx="12" cy="12" r="1.5" fill="#4285f4" />
            </svg>
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default MainSearch;
