import React, { useState, useEffect } from 'react';
import { useRoutes, Link, useLocation } from 'react-router-dom';
import { supabase } from './client';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreators';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';

const App = () => {
  const [creators, setCreators] = useState([]);
  const location = useLocation(); // Tracks current URL to trigger refreshes

  // Function to fetch all creators from Supabase
  const fetchCreators = async () => {
    const { data, error } = await supabase
      .from('creators')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching creators:', error);
    } else {
      setCreators(data);
    }
  };

  // Re-fetch creators whenever the user navigates to a new page
  // This ensures the home page is always up-to-date after adding/editing
  useEffect(() => {
    fetchCreators();
  }, [location]);

  // Define the routes for the application
  let element = useRoutes([
    {
      path: "/",
      element: <ShowCreators creators={creators} />
    },
    {
      path: "/view/:id",
      element: <ViewCreator />
    },
    {
      path: "/new",
      element: <AddCreator />
    },
    {
      path: "/edit/:id",
      element: <EditCreator />
    }
  ]);

  return (
    <div className="App">
      {/* Global Navigation Bar */}
      <nav className="main-nav" style={{ 
        padding: '1rem 2rem', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        background: 'rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(10px)',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <Link to="/" style={{ 
          textDecoration: 'none', 
          color: 'white', 
          fontSize: '1.5rem', 
          fontWeight: 'bold',
          letterSpacing: '2px'
        }}>
          CREATORVERSE
        </Link>
        
        <div style={{ display: 'flex', gap: '15px' }}>
          <Link to="/">
            <button className="secondary" style={{ margin: 0 }}>View All</button>
          </Link>
          <Link to="/new">
            <button style={{ margin: 0 }}>Add a Creator</button>
          </Link>
        </div>
      </nav>

      {/* Main Content Area */}
      <main style={{ padding: '2rem' }}>
        {element}
      </main>
    </div>
  );
};

export default App;