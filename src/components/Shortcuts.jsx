import React, { useState } from 'react';

const INITIAL_SHORTCUTS = [
  { name: 'YouTube', url: 'https://www.youtube.com', color: '#FF0000', letter: 'Y' },
  { name: 'GitHub', url: 'https://www.github.com', color: '#333', letter: 'G' },
  { name: 'LeetCode', url: 'https://www.leetcode.com', color: '#FFA116', letter: 'L' },
  { name: 'Reddit', url: 'https://www.reddit.com', color: '#FF4500', letter: 'R' },
  { name: 'Stack Overflow', url: 'https://www.stackoverflow.com', color: '#F48024', letter: 'S' },
  { name: 'Twitter', url: 'https://www.twitter.com', color: '#1DA1F2', letter: 'T' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com', color: '#0A66C2', letter: 'L' },
  { name: 'Wikipedia', url: 'https://www.wikipedia.org', color: '#636466', letter: 'W' },
];

const COLORS = [
  '#e74c3c', '#e67e22', '#f1c40f', '#2ecc71', '#1abc9c',
  '#3498db', '#9b59b6', '#e84393', '#00b894', '#6c5ce7',
  '#fd79a8', '#0984e3', '#d63031', '#00cec9', '#a29bfe',
];

function getRandomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

function ensureUrl(url) {
  if (!url) return '';
  if (!/^https?:\/\//i.test(url)) {
    return 'https://' + url;
  }
  return url;
}

const Shortcuts = () => {
  const [shortcuts, setShortcuts] = useState(INITIAL_SHORTCUTS);
  const [showModal, setShowModal] = useState(false);
  const [formName, setFormName] = useState('');
  const [formUrl, setFormUrl] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (!formName.trim() || !formUrl.trim()) return;

    const url = ensureUrl(formUrl.trim());
    const newShortcut = {
      name: formName.trim(),
      url,
      color: getRandomColor(),
      letter: formName.trim()[0].toUpperCase(),
    };

    setShortcuts([...shortcuts, newShortcut]);
    setFormName('');
    setFormUrl('');
    setShowModal(false);
  };

  const handleRemove = (index) => {
    setShortcuts(shortcuts.filter((_, i) => i !== index));
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormName('');
    setFormUrl('');
  };

  return (
    <>
      <div className="shortcuts-grid">
        {shortcuts.map((shortcut, index) => (
          <div key={index} className="shortcut-wrapper">
            <a
              href={shortcut.url}
              className="shortcut-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="shortcut-icon" style={{ backgroundColor: shortcut.color }}>
                <span className="shortcut-letter">{shortcut.letter}</span>
              </div>
              <span className="shortcut-label">{shortcut.name}</span>
            </a>
            <button
              className="shortcut-remove"
              onClick={(e) => {
                e.stopPropagation();
                handleRemove(index);
              }}
              aria-label={`Remove ${shortcut.name}`}
            >
              ×
            </button>
          </div>
        ))}

        {/* Add Shortcut Button */}
        <div className="shortcut-wrapper">
          <button
            className="shortcut-item add-shortcut"
            aria-label="Add shortcut"
            onClick={() => setShowModal(true)}
          >
            <div className="shortcut-icon add-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </div>
            <span className="shortcut-label">Add shortcut</span>
          </button>
        </div>
      </div>

      {/* Add Shortcut Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Add shortcut</h2>
              <button className="modal-close" onClick={handleCloseModal} aria-label="Close">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <form className="modal-form" onSubmit={handleAdd}>
              <div className="form-group">
                <label className="form-label" htmlFor="shortcut-name">Name</label>
                <input
                  id="shortcut-name"
                  type="text"
                  className="form-input"
                  placeholder="e.g. Netflix"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  autoFocus
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="shortcut-url">URL</label>
                <input
                  id="shortcut-url"
                  type="text"
                  className="form-input"
                  placeholder="e.g. www.netflix.com"
                  value={formUrl}
                  onChange={(e) => setFormUrl(e.target.value)}
                  required
                />
              </div>

              <div className="modal-actions">
                <button type="button" className="btn btn-cancel" onClick={handleCloseModal}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-done" disabled={!formName.trim() || !formUrl.trim()}>
                  Done
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Shortcuts;
