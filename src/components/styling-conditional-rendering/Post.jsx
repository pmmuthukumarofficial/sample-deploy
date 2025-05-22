import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Post(props) {
    return <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.imgPath} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                   {props.text}
                </Card.Text>
                <Button variant="warning">{props.buttonName}</Button>
            </Card.Body>
        </Card>
    </>
}

export default Post