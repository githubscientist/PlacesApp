import React, { useEffect, useState } from 'react';
import authService from '../services/auth';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            console.log('user logged in...');
            navigate('/dashboard');
        }
    }, []);

  const handleSignup = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password
    }

    // call the signup API
    authService.signup(user);

    // clear the form
    setName('');
    setEmail('');
    setPassword('');
  }

  return (
    <div>
      <h3>Register</h3>
      <form onSubmit={handleSignup}>
        <div>
          <input
            type='name'
            id='name' 
            placeholder='name...'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <input
            type='email'
            id='email' 
            placeholder='email...'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <input
            type='password'
            id='password' 
            placeholder='password...'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <button type='submit'>Register</button>
        </div>
      </form>

      <p>Already Registered ? <Link to="/login">Login</Link></p>
    </div>
  )
}

export default SignUp;