import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import ItemCount from './ItemCount';

function ItemListContainer() {

    const onAdd = (quantity) => {
        console.log (`Compraste ${quantity} unidades`)
    }
    
    return (
        <div>
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
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </div>
    );
}

export default ItemListContainer;