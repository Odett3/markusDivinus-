import React from 'react';
import { Link } from "react-router-dom";



export default function NavBar() {
  return (
    <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about"> About Us </Link>
      </li>

      <li>
        <Link to="/wines">Our Wines</Link>
      </li>

      <li>
        <Link to="/winery">Our Winery</Link>
      </li>
      <li>
        <Link to="/events">Events</Link>
      </li>
    </ul>
  </nav>
);
  
}