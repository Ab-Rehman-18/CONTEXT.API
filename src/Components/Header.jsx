import React from 'react';
import { userContext } from '../main.jsx';
import { useContext } from 'react';

const Header = () => {
  const data = useContext(userContext);
  return (
    <div>
      <h2>Welcome, {data.name}</h2>
      </div>
  );
}
export default Header;