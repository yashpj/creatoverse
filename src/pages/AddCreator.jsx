import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Standard for React Router 7
import { supabase } from '../client';

const AddCreator = () => {
    const navigate = useNavigate();
    const [creator, setCreator] = useState({
        name: "",
        url: "",
        description: "",
        imageURL: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCreator((prev) => ({ ...prev, [name]: value }));
    };

    const createCreator = async (event) => {
        event.preventDefault();

        const { data, error } = await supabase
            .from('creators')
            .insert({
                name: creator.name, 
                url: creator.url, 
                description: creator.description, 
                imageURL: creator.imageURL
            });

        if (error) {
            console.error('Error adding creator:', error);
            alert("Failed to add creator. Check console for details.");
        } else {
            // Use navigate to go back to the home page
            navigate('/');
        }
    };

    return (
        <div className="add-creator-page">
            <form onSubmit={createCreator}>
                <label>Name</label>
                <input type="text" name="name" onChange={handleChange} required />

                <label>URL</label>
                <input type="text" name="url" onChange={handleChange} required />

                <label>Description</label>
                <textarea name="description" rows="5" onChange={handleChange} required></textarea>

                <label>Image URL (Optional)</label>
                <input type="text" name="imageURL" onChange={handleChange} />

                <button type="submit">Submit Creator</button>
            </form>
        </div>
    );
};

export default AddCreator;

