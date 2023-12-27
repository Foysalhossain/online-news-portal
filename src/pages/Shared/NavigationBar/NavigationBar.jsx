import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";


const NavigationBar = () => {
    const {user} = useContext(AuthContext); 
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary mb-4">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto fw-bold">
                            <Nav.Link href="#features">
                                <Link to='/'>Home</Link>
                            </Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav className='d-flex align-items-center'>
                            {user &&
                                <Nav.Link href="#deets"><FaUserCircle className='fs-2' /></Nav.Link>
                            }
                            <Nav.Link eventKey={2} href="#memes">
                                {user ?
                                    <Link><Button variant="warning rounded-0">Logout</Button></Link> :
                                    <Link><Button variant="warning rounded-0">Login</Button></Link>
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;