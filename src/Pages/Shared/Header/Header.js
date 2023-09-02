import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Button, Image } from 'react-bootstrap';
import { FaUserAlt } from 'react-icons/fa';
import './Header.css';

const Header = () => {

    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err));
    }

    return (
        <Navbar collapseOnSelect className='mb-4 navv' expand="lg" >
            <Container>
            <Link to='/' className='text-dark '><Button variant='' className='fw-bold'><Navbar.Brand>News 71</Navbar.Brand></Button></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto fw-bold d-flex justify-content-center align-items-center">
                        <Nav.Link >Brands</Nav.Link>
                        <Nav.Link href="#pricing">Authors</Nav.Link>
                        <NavDropdown title="Publish" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav className='d-flex justify-content-center align-items-center'>
                            {
                                user?.email && user?.uid ?
                                    <>
                                        <span className='me-4 fw-bold'>{user?.displayName}</span>
                                        <Button className='fw-bold' onClick={handleLogout} variant='outline-'>LogOut</Button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login' ><Button className='fw-bold' variant='outline-'>Login</Button></Link>
                                        <Link to='/register' ><Button className='fw-bold' variant='outline-'>Register</Button></Link>
                                    </>
                            }
                        </Nav>
                        <Nav.Link eventKey={2} className='d-flex justify-content-center align-items-center ' >
                            {
                                user?.photoURL ?
                                    <Image
                                        style={{ height: '30px' }}
                                        roundedCircle
                                        src={user?.photoURL}
                                    >
                                    </Image>
                                    :
                                    <FaUserAlt></FaUserAlt>
                            }
                        </Nav.Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;