import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/2.png'
const Header = () => {
  const [user]=useAuthState(auth);
  const handleSignOut=()=>{
      signOut(auth);
  }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to='/'><img style={{height:'40px', width:'80px'}} src={logo} alt="" />The sutterman</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to='/'>Home</Nav.Link>
      { user?
             <button onClick={handleSignOut} className='btn-danger'>Signout</button>
             :
      <Nav.Link as={Link} to='/login'>Login</Nav.Link>}
     
    </Nav>
    <Nav>
      <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
      <Nav.Link as={Link} to='/about'>
       About me
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;