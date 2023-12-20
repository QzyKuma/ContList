import React, { useState, useEffect } from 'react';

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState(null);

    useEffect(() => {
        async function fetchContact() {
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users${selectedContactId}`);
                const data = await response.json();
                setContact(data);
            } catch (error) {
                console.error('Error fetching contact:', error);
            }
        }

        if (selectedContactId) {
            fetchContact();
        }
    }, [selectedContactId]);

    if (!contact) {
        return <div>Loading contact...</div>;
    }

    return (
        <div>
            <h2>Contact Details</h2>
            <h3>{contact.name}</h3>
            <ul>
                <li>ID: {contact.id}</li>
                <li>Name: {contact.name}</li>
                <li>Username: {contact.username}</li>
                <li>Email: {contact.email}</li>
                <li>City: {contact.address.city}</li>
                <li>Company: {contact.company.name}</li>
            </ul>
            <button onClick={() => setSelectedContactId(null)}>Go Back</button>
        </div>
    );
}


