import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../services/auth';

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            console.log('user logged in...');
            navigate('/dashboard');
        }
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();

        const user = {
            email,
            password
        }

        // call the login API
        authService.login(user);

        // clear the form
        setEmail('');
        setPassword('');

        // navigate to the dashboard
        navigate('/dashboard');
    }

  return (
      <div>
          <h3>Login</h3>
          <form onSubmit={handleLogin}>
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
                    <button type='submit'>Login</button>
              </div>
          </form>

          <p>Don't have an account? <Link to="/signup">Register</Link></p>
    </div>
  )
}

export default Login;