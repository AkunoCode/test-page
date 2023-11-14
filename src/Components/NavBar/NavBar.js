import { Outlet, Link } from 'react-router-dom';
import "./NavBar.css"

function NavBar() {

    return (
        <>
            <header id='Header-Scrolled'>
                <div className='Header-Container'>
                    <div id="Logo-Section">
                        <h1>Turo-Turo</h1>
                    </div>
                    <nav>
                        <ul id='Navigation-Bar-Scrolled'>
                            <li><Link to="/student">Find Student</Link></li>
                            <li><Link to="/tutor">Find Tutor</Link></li>
                            <li><Link to="/About">About Us</Link></li>
                        </ul>
                    </nav>
                </div>
            </header >
            <Outlet />
        </>
    )
};
export default NavBar;