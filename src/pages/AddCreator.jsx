import React, { useState } from 'react';
import { supabase } from '../client';
// import './AddCreator.css'; // You'll want some styling for this!

const AddCreator = () => {
    // 1. Create a state object to hold all form data
    const [creator, setCreator] = useState({
        name: "",
        url: "",
        description: "",
        imageURL: ""
    });

    // 2. Handle input changes dynamically
    const handleChange = (event) => {
        const { name, value } = event.target;
        setCreator((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    // 3. The async function to send data to Supabase
    const createCreator = async (event) => {
        event.preventDefault(); // Prevents the page from refreshing

        const { error } = await supabase
            .from('creators')
            .insert({
                name: creator.name, 
                url: creator.url, 
                description: creator.description, 
                imageURL: creator.imageURL
            })
            .select();

        if (error) {
            console.error('Error adding creator:', error);
        } else {
            // Redirect to home page after success
            window.location = "/";
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
