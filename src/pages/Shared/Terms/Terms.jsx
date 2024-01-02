import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";


const Terms = () => {
    return (
        <Container>
            <h2>Terms & Conditions</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum aliquam iure tempora dolore labore? Iste rem omnis dolorum tempore est, numquam architecto nisi at error, nobis dignissimos magnam doloremque sunt!</p>
            <p>Back to <Link to="/register" className="text-primary text-decoration-none">Register</Link></p>
        </Container>
    );
};

export default Terms;