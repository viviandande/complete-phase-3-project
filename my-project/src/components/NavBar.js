import { NavLink } from "react-router-dom";
import Header from "./Header"
function Navbar() {
    return(
        <div className="nav-links">
             <Header/>
             <NavLink to="/">Guests</NavLink>
             <NavLink to="/events">Events</NavLink>
             <NavLink to="/aboutus">About Us</NavLink>
        </div>
    )
}
export default Navbar;