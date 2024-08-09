// STEP 4:
// React Router provides two components that allow users to navigate through our page using client-side routing: Link and NavLink.
// They both have the same base level functionality:

//   1. They render an <a> tag to the DOM.
//   2. When the <a> tag is clicked, they change the URL and tell React Router to re-render the page, displaying the component
//      that matches the new URL.
//   3. Instead of taking an href attribute like normal <a> tags, Link and NavLink take a to prop that points to the endpoint the
//      link should take the user to.

// NavLink acts as a superset of Link, adding a default active class when it matches the current URL.
// NavLink works well for creating a navigation bar, since it allows us to add styling to indicate which link is currently selected.
// Link is a good option for creating standard hyperlinks. 

import { NavLink } from "react-router-dom";
import './NavBar.css';

function NavBar() {
    return(
        <nav>
            <NavLink to='/' className='nav-link'>Home</NavLink>
            <NavLink to='/about' className='nav-link'>About</NavLink>
            <NavLink to='/login' className='nav-link'>Login</NavLink>
        </nav>
    );
};

// You can then place your NavBar component in each of your page components to enable easy navigation
// between different pages in your application!

export default NavBar;