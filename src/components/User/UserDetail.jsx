import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function UserDetail() {
    const navigate = useNavigate();

    const { userid } = useParams(); // Getting the username from the URL
    const details = [
        { id: 1, name: 'Vaibhav', description: 'This is info for Vaibhav.' },
        { id: 2, name: 'John', description: 'This is info for John.' },
        { id: 3, name: 'Mark', description: 'This is info for Mark.' },
    ];

    const userDetail = details.find(detail => detail.name === userid);

    const gobackbutton = (()=>{
        navigate(`/user`);
    })

    return (
        <div className="bg-gray-600 text-white text-3xl p-4">
            {userDetail ? (
                <>
                    <h1>{`User ID: ${userDetail.id}`}</h1>
                    <h2>{`Username: ${userDetail.name}`}</h2>
                    <p>{`Description: ${userDetail.description}`}</p>
                </>
            ) : (
                <p>User not found.</p>
            )}
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-5" onClick={() => gobackbutton()}>Go Back</button>
        </div>
    );
}

export default UserDetail;
