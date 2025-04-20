import React, { useState } from 'react';
import '../styles/TopicSection.css'; // We'll use this for styling

function TopicSection({ title, description }) {
  const [showBlogs, setShowBlogs] = useState(false);
  const [expandBlog, setExpandBlog] = useState(false);

  return (
    <div className="topic-container">
      <div 
        className="topic-header" 
        onClick={() => setShowBlogs(!showBlogs)}
      >
        {title} - <span className="topic-desc">{description}</span>
      </div>

      <div className={`blog-list-wrapper ${showBlogs ? 'expand' : ''}`}>
        <div 
          className="blog-title" 
          onClick={() => setExpandBlog(!expandBlog)}
        >
          Sample Blog Title
        </div>
        {expandBlog && (
          <div className="blog-content">
            This is dummy content for the blog. Replace this with actual blog data later.
          </div>
        )}
      </div>
    </div>
  );
}

export default TopicSection;
