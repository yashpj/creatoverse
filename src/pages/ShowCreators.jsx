import React from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const ShowCreators = ({ creators }) => {
  return (
    <div className="show-creators">
      <header className="page-header" style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '4rem' }}>CREATORVERSE</h1>
        <p style={{ textAlign: 'center', color: '#ccc' }}>Explore your favorite content creators from across the web.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
           <Link to="/new"><button className="contrast">ADD A CREATOR</button></Link>
        </div>
      </header>

      <section className="creators-grid">
        {creators && creators.length > 0 ? (
          creators.map((creator) => (
            <Card 
              key={creator.id} // Always add a unique key for list mapping
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
            <p>Use the "Add a Creator" button above to get started.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default ShowCreators;

