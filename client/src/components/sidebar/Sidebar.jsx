import { useEffect, useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

import axios from "axios";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

 useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://media.istockphoto.com/id/1284041267/photo/planet-earth-viewed-from-space-with-city-lights-in-europe-world-with-sunrise-conceptual-image.jpg?s=2048x2048&w=is&k=20&c=ua6vzOHmfQVVg1iftZmWBPYJlNy6xBCeUCKFjVGzZjk="
          alt=" "
        />
        <p>Our Planet</p>
      </div>
  <div className="sidebarItem">
    <span className="sidebarTitle">CATEGORIES</span>
    <ui className="sidebarList">
        
        {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}

    </ui>
  </div>
  <div className="sidebarItem">
    <span className="sidebarTitle">FOLLOW US</span>
    <div className="sidebarTileSocial">
      
    <i className="sidebarIcon fa-brands fa-facebook-f"></i>
    <i className="sidebarIcon fa-brands fa-instagram"></i>
    <i className="sidebarIcon fa-brands fa-twitter"></i>
    <i className="sidebarIcon fa-brands fa-pinterest"></i>

    </div>
   
  </div>

    </div>
  );
}
