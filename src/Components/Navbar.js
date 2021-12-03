import{Nav, Navbar, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css'
import login from '../Assets/login.png';
import cart from '../Assets/cart.png';
import notif from '../Assets/notif.png';

export default function Navi(){
    return(
        <Navbar collapseOnSelect expand="lg" variant="dark" className="Nav">
        <Container>        
        <Navbar.Brand><Link to="/home" style={{ textDecoration: 'none', color:'black' }}>PhoneShop.</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/home" style={{ textDecoration: 'none', color:'black' }}>Home</Link></Nav.Link>
            <Nav.Link><Link to="/products" style={{ textDecoration: 'none', color:'black' }}>Products</Link></Nav.Link>
            <Nav.Link><Link to="/articles" style={{ textDecoration: 'none', color:'black' }}>Articles</Link></Nav.Link>
            <Nav.Link><Link to="/about_us" style={{ textDecoration: 'none', color:'black' }}>About Us</Link></Nav.Link>      
          </Nav>
          <Nav>
            
            <Nav.Link><Link to="/login"> <img alt="" src={login} width="17px" /></Link></Nav.Link>
            <Nav.Link><Link to="/carts"> <img alt="" src={cart} width="17px" /></Link></Nav.Link>
            <Nav.Link><Link to="/notif"> <img alt="" src={notif} width="17px" /></Link></Nav.Link>
            {/* <Nav.Link eventKey={2}><Link to="/home">Notif</Link></Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
        )};