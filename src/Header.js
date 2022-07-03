import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

// import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
// import { getAuth, signOut } from "firebase/auth";

// import {signOut} from 'firebase/auth';

export default function Header() {
  const [{basket,user }] = useStateValue();

  const handleAuthentication=()=>{
    if(user) {
      auth.signOut();
  } 
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://o.remove.bg/downloads/ffc8bb3b-2fbc-4cea-9430-23ce4f8eeaeb/shopIt__1_-removebg-preview.png"
          alt="hello"
        />
      </Link>
     
      <div className="header_search">
        <input className="header_searchInput" type="text" placeholder="Seacrh for your product"/>
        <SearchIcon className="header_searchIcon" />
      </div>


      <div className="header_nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="line1">Hello {!user? 'Guest':user.email}</span>
            <span className="line2"> {user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>

        <div className="header_option">
          <span className="line1">Returns</span>
          <span className="line2">& Orders</span>
        </div>


        <Link to="/checkout">
          <div className="basket">
            <ShoppingBasketIcon />
            <span className="line2_basket">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
