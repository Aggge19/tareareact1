import React from 'react';

const formatName = user => `${user.firstName} ${user.lastName}`;

const user = {
  firstName: 'Angel',
  lastName: 'Agullo'
};

const Home = () => (
  <div>
    <h1>Hola, {formatName(user)}!</h1>
  </div>
)


export default Home;
