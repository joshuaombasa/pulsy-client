import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Error() {
  return (
    <>
      <div>Error</div>
      <NavLink to="/">Back to Home</NavLink>
    </>
  );
}
