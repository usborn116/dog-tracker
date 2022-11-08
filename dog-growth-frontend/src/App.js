import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import { NotFoundPage } from './components/NotFound';
import { Container, Navbar } from 'react-bootstrap';
function App() {
  return (
    <>
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Link className="nav-link" to="/">Home</Link>
          </Container>
        </Navbar><br />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </>
  );
}
export default App;