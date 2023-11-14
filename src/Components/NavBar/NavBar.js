import { Outlet, Link } from 'react-router-dom';
import "./NavBar.css"
import logoImg from './images/Logo.png'
import Search from './images/Search.png'


function NavBar() {

    return (
        <>
            <header id='Header-Scrolled'>
                <div className='Header-Container'>
                    <div id="Logo-Section">
                        <img src={logoImg} alt='Turo-Turo Logo' />
                        <nav>
                            <ul id='Navigation-Bar-Scrolled'>
                                <li><Link to="student">Find Student</Link></li>
                                <li><Link to="tutor">Find Tutor</Link></li>
                                <li><Link to="About">About Us</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div id='loginSection'>
                        <div id='input-with-logo'>
                            <img src={Search} alt='Turo-Turo Logo' />
                            <input type="text" placeholder="Search" />
                        </div>
                        <button id='loginButton'>Login</button>
                        <button id='signupButton'>Signup</button>
                    </div>
                </div>
            </header >
            <Outlet />
        </>
    )
};
export default NavBar;