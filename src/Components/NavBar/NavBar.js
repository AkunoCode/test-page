import { Outlet, Link } from 'react-router-dom';
import "./NavBar.css"
import logoImg from './Assets/Logo.png'
import Search from './Assets/Search.png'


function NavBar() {

    return (
        <>
            <header id='Header-Scrolled'>
                <div className='Header-Container'>
                    <div id="Logo-Section">
                        <Link to="/turoturo">
                            <img src={logoImg} alt='Turo-Turo Logo' />
                        </Link>
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
                        <Link to="Login"><button id='loginButton'>Login</button></Link>
                        <Link to="Sign-Up"><button id='signupButton'>Sign Up</button></Link>
                    </div>
                </div>
            </header >
            <Outlet />
        </>
    )
};
export default NavBar;