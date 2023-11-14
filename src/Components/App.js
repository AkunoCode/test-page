import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import NavBar from './NavBar/NavBar';
import './App.css'
import Logo from './NavBar/Assets/Logo.png'

function App() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1024;

  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResizeWindow);
    return () => window.removeEventListener('resize', handleResizeWindow);
  }, []);

  if (width > breakpoint) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/turoturo' element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path='*'
              element={<div id='NotYetAvailable'>
                <img src={Logo} alt='Logo'></img>
                <h1>Page Not Yet Available</h1>
                <p>We are working hard to make our webpage better for you. <br />Please bear with us as we optimize our site for different devices and screen sizes. <br />Thank you for your patience and understanding. </p>
                <strong>You can instead view our figma prototypes</strong>
                <p />
                <a id='WebPrototype' href='https://www.figma.com/proto/nKJMpbZzbLWT80Cy99oTH0/tur%C3%B2-tur%C3%B2?page-id=0%3A1&type=design&node-id=40-33&viewport=531%2C305%2C0.47&t=KSYxA46OBe4aNMLZ-1&scaling=min-zoom&starting-point-node-id=40%3A33&mode=design'>
                  Web Prototype
                </a>
                <a id='MobilePrototype' href='https://www.figma.com/proto/nKJMpbZzbLWT80Cy99oTH0/tur%C3%B2-tur%C3%B2?page-id=0%3A1&type=design&node-id=110-591&viewport=531%2C305%2C0.47&t=KSYxA46OBe4aNMLZ-1&scaling=min-zoom&starting-point-node-id=40%3A33&mode=design'>
                  Mobile Prototype
                </a>
              </div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  } else {
    return (

      <div id='MobileNotSupported'>
        <img src={Logo} alt='Logo'></img>
        <h1>Mobile View Not Yet Supported</h1>
        <p>We are working hard to make our webpage better for you. <br />Please bear with us as we optimize our site for different devices and screen sizes. <br />Thank you for your patience and understanding. </p>
        <strong>You can instead view our figma prototypes</strong>
        <a id='WebPrototype' href='https://www.figma.com/proto/nKJMpbZzbLWT80Cy99oTH0/tur%C3%B2-tur%C3%B2?page-id=0%3A1&type=design&node-id=40-33&viewport=531%2C305%2C0.47&t=KSYxA46OBe4aNMLZ-1&scaling=min-zoom&starting-point-node-id=40%3A33&mode=design'>
          Web Prototype
        </a>
        <a id='MobilePrototype' href='https://www.figma.com/proto/nKJMpbZzbLWT80Cy99oTH0/tur%C3%B2-tur%C3%B2?page-id=0%3A1&type=design&node-id=110-591&viewport=531%2C305%2C0.47&t=KSYxA46OBe4aNMLZ-1&scaling=min-zoom&starting-point-node-id=40%3A33&mode=design'>
          Mobile Prototype
        </a>
      </div>
    )
  }
}

export default App;
