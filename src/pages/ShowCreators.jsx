// src/pages/ShowCreators.jsx
import React from 'react';
import Card from '../components/Card';
import {Link} from 'react-router-dom';

const ShowCreators = ({ creators }) => {
  return (
    <div className="show-creators">
      <h1>Content Creators</h1>
      
      <section className="creators-grid">
        {creators && creators.length > 0 ? (
          creators.map((creator) => (
            <Card 
              id={creator.id}
              name={creator.name}
              url={creator.url}
              description={creator.description}
              imageURL={creator.imageURL}
            />
          ))
        ) : (
          <div className="no-creators">
            <h2>No Content Creators found yet!</h2>
            <p>Time to add your first one to the list.</p>
          </div>
        )}
      </section>
      <header className="page-header">
        <h1>Creatorverse</h1>
        <Link to="/new"><button className="add-button">ADD A CREATOR</button></Link>
    </header>
    </div>
  );
};

export default ShowCreators;