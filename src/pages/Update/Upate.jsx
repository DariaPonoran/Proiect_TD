import React, { useState } from 'react';
import './Update.css'

function Update() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };


    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform user details update logic here (e.g., make API call to update details)
        // Reset form fields
        setEmail('');
        setUsername('');
    };

    return (
        <div class='container-update'>
            <div class='form-update'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            placeholder='Email'
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            placeholder='Username'
                            onChange={handleUsernameChange}
                        />
                    </div>
                    <button className='btn' type="submit">Update Account</button>
                </form>
            </div>
        </div>
    )
}

export default Update