import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {

    const navigate = useNavigate();

    const [token, setToken] = useState('');
    const [user, setUser] = useState({});

    useEffect(() => {
        const token = localStorage.getItem('token');
        const userObject = JSON.parse(localStorage.getItem('user'));

        if (!token) {
            console.log('user not logged in...');
            navigate('/login');
        }
        setToken(token);
        setUser(userObject);
    }, []);

    const handleLogout = () => {

        // remove the token from local storage
        localStorage.removeItem('token');

        // remove the user from local storage
        localStorage.removeItem('user');

        // reset the state
        setToken('');

        // navigate to the login page
        navigate('/login');
    }

  return (
    <div>
        <p>{ user.email } has signed in!<button onClick={handleLogout}>logout</button></p>     
    </div>
  )
}

export default Dashboard;