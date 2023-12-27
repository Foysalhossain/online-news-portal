import { Button, Container } from 'react-bootstrap';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import Marquee from "react-fast-marquee";


const Header = () => {


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

        </Container>
    );
};

export default Header;