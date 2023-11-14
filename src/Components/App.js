import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import NavBar from './NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/turoturo' element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path='*' element={<h1 id='NotFound'>404 Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
