import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ id, name, url, description, imageURL }) => {
  return (
    <article className="creator-card">
      {/* 1. Displaying the Image (with a fallback) */}
      <Link to={`/view/${id}`}>
        <button>View Details</button>
      </Link>

      <div className="image-container">
        {imageURL ? (
          <img src={imageURL} alt={name} className="creator-image" />
        ) : (
          <div className="image-placeholder">No Image Available</div>
        )}
      </div>

      <div className="creator-content">
        {/* 2. Displaying the Name */}
        <h2 className="creator-name">{name}</h2>

        {/* 3. Displaying the URL (as a clickable button) */}
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="creator-url-link"
        >
          Visit Site 🔗
        </a>

        {/* 4. Displaying the Description */}
        <p className="creator-description">{description}</p>
      </div>
    </article>
  );
};

export default Card;