import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';

const EditCreator = () => {
    const { id } = useParams();
    const [creator, setCreator] = useState({ name: "", url: "", description: "", imageURL: "" });

    // 1. Fetch current data so the form isn't empty
    useEffect(() => {
        const fetchCreator = async () => {
            const { data, error } = await supabase
                .from('creators')
                .select('*')
                .eq('id', id)
                .single();

            if (data) setCreator(data);
        };
        fetchCreator();
    }, [id]);

    // 2. Handle changes as the user types
    const handleChange = (event) => {
        const { name, value } = event.target;
        setCreator((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // 3. The Update function
    const updateCreator = async (event) => {
        event.preventDefault();

        const { error } = await supabase
            .from('creators')
            .update({ 
                name: creator.name, 
                url: creator.url, 
                description: creator.description, 
                imageURL: creator.imageURL 
            })
            .eq('id', id);

        if (error) {
            console.error('Error updating creator:', error);
        } else {
            window.location = "/"; // Redirect home
        }
    };

    const deleteCreator = async (event) => {
        event.preventDefault();

        // A simple confirmation dialog so people don't delete by accident!
        const confirmed = window.confirm("Are you sure you want to delete this creator?");
        
        if (confirmed) {
            const { error } = await supabase
                .from('creators')
                .delete()
                .eq('id', id); // Make sure we delete the specific ID from the URL

            if (error) {
                console.error('Error deleting creator:', error);
            } else {
                // Send the user back to the home page after deletion
                window.location = "/";
            }
        }
    };

    return (
        <div className="edit-creator-page">
            <form onSubmit={updateCreator}>
                <label>Name</label>
                <input type="text" name="name" value={creator.name} onChange={handleChange} required />

                <label>URL</label>
                <input type="text" name="url" value={creator.url} onChange={handleChange} required />

                <label>Description</label>
                <textarea name="description" rows="5" value={creator.description} onChange={handleChange} required></textarea>

                <label>Image URL</label>
                <input type="text" name="imageURL" value={creator.imageURL} onChange={handleChange} />

                <button type="submit">Update Creator</button>
                <button 
                    type="button" 
                    className="delete-button" 
                    onClick={deleteCreator}
                    style={{ backgroundColor: 'red', marginLeft: '10px' }}
                >
                    Delete Creator
                </button>
            </form>
        </div>
    );
};

export default EditCreator;