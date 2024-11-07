import React from 'react';
import { useNavigate } from 'react-router-dom';

function User() {
  const navigate = useNavigate();

  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Mark" },
  ];

  const handlerUserClick = (name) => {
    navigate(`/user/${name}`);
  };

  
  return (
    <>
      <div>
        <h1>Users List</h1>
        {users.map((user) => (
          // Use parentheses to return the button
          <button
            key={user.id} // Add a unique key for each element in the list
            onClick={() => handlerUserClick(user.name)} // Use a function to avoid immediate execution
            className="bg-blue-500 text-white py-2 px-4 rounded m-2"
          >
            {user.name}
          </button>
        ))}
       
      </div>
    </>
  );
}

export default User;
