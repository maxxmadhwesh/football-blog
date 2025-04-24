import React, { useState } from 'react';
import '../styles/TopicSection.css'; 


const TopicSection = ({ title, description , data }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="topic-section" onClick={toggleExpanded}>
      <div className="topic-header">
        <strong>{title}</strong>
        <span className="toggle-icon">{expanded ? '−' : '+'}</span>
      </div>
      <div className="topic-description">{description}</div>
      {expanded && (
        <div className="blog-list">
          <div className="blog-title">📝 Sample Blog Title</div>
          <div className="blog-content">
            {data}
          </div>
        </div>
      )}
    </div>
  );
};

export default TopicSection;
