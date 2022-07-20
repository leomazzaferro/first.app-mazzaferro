import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardProduct() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Remera Estampada</Card.Title>
                <Card.Text>
                    Remera estampada varios colores
                </Card.Text>
                <Button variant="primary">Agregar</Button>
            </Card.Body>
        </Card>
    );
}

export default CardProduct;