
import '../styles/ExpandableTopic.css';
import React, { useState } from 'react';

const ExpandableTopic = ({ title, desc, blogs = [] }) => {
  const [expanded, setExpanded] = useState(false);
  const [openBlogIndex, setOpenBlogIndex] = useState(null);

  const toggleExpanded = () => {
    setExpanded(prev => !prev);
    setOpenBlogIndex(null); // close all blogs if you collapse the section
  };

  const toggleBlog = index => {
    setOpenBlogIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className={`expandable-topic`}>
      <div className="topic-header" onClick={toggleExpanded}>
        <div>
          <strong>{title}</strong> - {desc}
        </div>
        <span className="toggle-icon">{expanded ? '−' : '+'}</span>
      </div>

    {expanded && blogs && Array.isArray(blogs) && (
      <div className="blog-list">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-item-wrapper">
            <div className="blog-item" onClick={() => toggleBlog(index)}>
              <span className="blog-title">{blog.header}</span>
              <span className="blog-date">
                {new Date(blog.date * 1000).toDateString()}
              </span>
            </div>
            {openBlogIndex === index && (
              <div className="blog-content">{blog.content}</div>
            )}
          </div>
        ))}
      </div>
    )}

    </div>
  );
};

export default ExpandableTopic;
