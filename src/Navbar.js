import { Navbar,Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import "./Navbar.css";

const header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
         <Link to="/" className="hero">React Navigation</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav  className="mr-auto links">
          <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default header;
