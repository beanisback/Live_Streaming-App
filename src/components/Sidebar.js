import React from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-48">
       
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Demo</Link></li>
            <li>Films</li>
            <li>Trending</li>
            <li>Movies</li>
      
        <h1 className="font-bold pt-5">Shorts</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        <h1 className="font-bold pt-5">Subscriptions</h1>
        <ul>
            <li>Live</li>
            <li>Shopping</li>
            <li>Learning</li>
            <li>Fashion & Beauty</li>
        </ul>
      </div>
  );
  };
export default Sidebar;
