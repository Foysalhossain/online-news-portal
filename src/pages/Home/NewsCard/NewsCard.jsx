import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {
    const { _id, title, details, image_url } = news;
    return (
        <Card className="mb-4">
            <Card.Header>Featured</Card.Header>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {/* {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link></>} */}
                    {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}</>}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
};

export default NewsCard;