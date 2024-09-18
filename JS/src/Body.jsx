import React from 'react';
import Profile from './Profile';

const Body = ({ userProfile }) => {
  return (
    <main className="body">
      <Profile {...userProfile} />
    </main>
  );
};

export default Body;