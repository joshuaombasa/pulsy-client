import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Notfound() {
  return (
    <>
      <div>Notfound</div>
      <NavLink to="/">Back to Home</NavLink>
    </>
  );
}
