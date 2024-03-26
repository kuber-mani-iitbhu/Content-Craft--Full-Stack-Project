
import { useContext } from "react"
import "./topbar.css"
import {Link} from "react-router-dom"
import { Context } from "../../context/Context"



export default function Topbar() {
  const PF = "http://localhost:3000/images/"

const {user,dispatch}=useContext(Context);
const handleLogout = () => {
  dispatch({ type: "LOGOUT" });
};
  return (
    <div className="top">
    <div className="topLeft">
    <i className="topIcon fa-brands fa-facebook-f"></i>
    <i className=" topIcon fa-brands fa-instagram"></i>
    <i className="topIcon fa-brands fa-twitter"></i>
    <i className="topIcon fa-brands fa-pinterest"></i>
    </div>
    <div className="topCenter">
    <ul className="topList">
    <li className="topListItem">
      <Link className="link"to="/">HOME</Link>
    </li>
    <li className="topListItem">
    <Link className="link"to="/">ABOUT</Link>
    </li>
    <li className="topListItem">
    <Link className="link"to="/write">WRITE</Link>
    </li>
    <li className="topListItem">
    <Link className="link"to="/">CONTACT</Link>
    </li>
    <li className="topListItem" onClick={handleLogout}>
      {user&&"LOGOUT"}
    </li>

   </ul>
    
    </div>
    <div className="topRight">{
      user ?
      (
        <Link to= "/settings" >  
        <img 
  className="topImg"
  src={PF+user.profilePic}
  alt="  "/>
  </Link>
  

      ):(
        <ui className="topList">
        <li className="topListItem">
        <Link className="link"to="/login">LOGIN</Link>
        </li>
        <li className="topListItem">
        <Link className="link"to="/register">REGISTER</Link>
        </li>
    

        </ui>
      )
    }

  
  <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
    </div>
   
    </div>
  )
}
