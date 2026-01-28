import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../client';

const ViewCreator = () => {
    const { id } = useParams(); // Grabs the ':id' from the URL
    const [creator, setCreator] = useState(null);

    useEffect(() => {
        const fetchSingleCreator = async () => {
            const { data, error } = await supabase
                .from('creators')
                .select('*')
                .eq('id', id) // "eq" means "equal to"
                .single();    // Tells Supabase we only expect 1 result

            if (error) {
                console.error("Error fetching creator:", error);
            } else {
                setCreator(data);
            }
        };

        fetchSingleCreator();
    }, [id]); // Re-run if the ID in the URL changes

    // 3. Displaying the information
    if (!creator) return <p>Loading creator details...</p>;

    return (
        <div className="view-creator-container">
            <section className="creator-profile">
                {creator.imageURL && (
                    <img src={creator.imageURL} alt={creator.name} />
                )}
                <h1>{creator.name}</h1>
                <p>{creator.description}</p>
                <a href={creator.url} target="_blank" rel="noreferrer">
                    Visit Official Channel
                </a>
            </section>

            <div className="actions">
                <Link to={`/edit/${creator.id}`}>
                    <button>Edit Info</button>
                </Link>
                <Link to="/">
                    <button>Back to All Creators</button>
                </Link>
            </div>
        </div>
    );
};

export default ViewCreator;