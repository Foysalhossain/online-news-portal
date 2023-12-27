import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {

    const { user } = useContext(AuthContext);

    return (
        <Container className='py-4'>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secondary py-2'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex p-3 bg-secondary my-4'>
                <Button variant="danger rounded-0">Latest</Button>
                <Marquee className='text-white m-2'>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>
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
                            <Nav.Link href="#deets">{user.displayName}</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant="warning rounded-0">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;