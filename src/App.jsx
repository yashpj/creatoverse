// src/App.jsx
import React, { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { supabase } from './client'; // Import the supabase client
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreators';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
// ... other imports

const App = () => {
  const [creators, setCreators] = useState([]); // State to hold creators

  useEffect(() => {
    // Define the async function to fetch data
    const fetchCreators = async () => {
      const { data, error } = await supabase
        .from('creators') // Ensure this matches your table name in Supabase
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching creators:', error);
      } else {
        console.log(JSON.stringify(data))
        setCreators(data);
      }
    };

    fetchCreators();
  }, []);

  let element = useRoutes([
    {
      path: "/",
      element: <ShowCreators creators={creators} /> // Pass data as props
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
    // ... update other routes to receive creators if needed
  ]);

  return (
    <div className="App">
      {element}
    </div>
  );
};

export default App;