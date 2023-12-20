import React, { useState, useEffect } from 'react';
import ContactRow from './ContactRow';

function ContactList({ setSelectedContactId }) {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users");
                const data = await response.json();
                setContacts(data);
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
        };

        fetchContacts();
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(contact => (
                        <ContactRow
                            key={contact.id}
                            id={contact.id}
                            name={contact.name}
                            email={contact.email}
                            phone={contact.phone}
                            setSelectedContactId={setSelectedContactId}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ContactList;
