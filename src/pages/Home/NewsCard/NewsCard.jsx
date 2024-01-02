import moment from "moment";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { IoEye } from "react-icons/io5";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import Rating from "react-rating";


const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, rating, total_view } = news;
    return (
        <Card className="mb-4">
            <Card.Header className="d-flex align-items-center">
                <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
                <div className="ps-2 pt-3 flex-grow-1">
                    <p className="mb-0 fw-bold">{author?.name}</p>
                    <p><small>{moment(author?.published_date).format('Do MMMM YYYY')} { }</small></p>
                </div>
                <div>
                    <CiBookmark className="me-2 fs-4" />
                    <CiShare2 className="fs-4" />
                </div>
            </Card.Header>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link></>}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className="flex-grow-1">
                    <Rating
                        className="text-warning"
                        placeholderRating={rating.number}
                        readonly
                        emptySymbol={<IoIosStarOutline />}
                        placeholderSymbol={<IoIosStar />}
                        fullSymbol={<img src="assets/images/star-yellow.png" className="icon" />}
                    />
                    <span className="ms-2">{rating?.number}</span>
                </div>
                <div>
                    <IoEye /> {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;