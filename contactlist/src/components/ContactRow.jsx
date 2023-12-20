import React from 'react';

function ContactRow({ id, name, email, phone, setSelectedContactId }) {
  const handleRowClick = () => {
    console.log("User clicked", id);
    setSelectedContactId(id);
  };

  return (
    <tr onClick={handleRowClick}>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  );
}

export default ContactRow;
