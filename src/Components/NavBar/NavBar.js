import { Outlet } from 'react-router-dom';
import "./NavBar.css"
import logo from "./Assets/TempLogo.png"

function NavBar() {

    return (
        <>
            <header id='Header-Scrolled'>
                <div className='Header-Container'>
                    <div id="Logo-Section">
                        <img src={logo} alt="Logo" />
                    </div>
                    <nav>
                        <ul id='Navigation-Bar-Scrolled'>
                            <li>Find Student</li>
                            <li>Find Tutor</li>
                            <li>About Us</li>
                        </ul>
                    </nav>
                </div>
            </header >
            <Outlet />
        </>
    )
};
export default NavBar;