import React from 'react';
import NavBar from '../Components/NavBar';

function Home() {
  return (
    <div>
          <NavBar />
          <h2>Welcome to the Home Page of the Places App</h2>      
          <p>This application allows users to register, login, and view the list of all the users registered in the application along with the places each user has created and shared.</p>

          <p>Moreover, the authenticated users can then: </p>
          <ul>
              <li>Create a new place</li>
              <li>Update the place (authorized users only) </li>
              <li>Delete the place (authorized users only) </li>
          </ul>
    </div>
  )
}

export default Home;