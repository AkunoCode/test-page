import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoContent from './NoContent';
import NavBar from './NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<NoContent />} />
          <Route path='*' element={<h1 id='NotFound'>404 Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
