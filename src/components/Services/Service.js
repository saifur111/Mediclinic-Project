import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';

const Service = ({service}) => {
    const { name, date,header, discription, img } = service;
    return (
        <div className="service m-lg-2 p-lg-2">
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Header>{header}</Card.Header>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{discription}</Card.Text>
                    <Card.Footer className="">
                        <Card.Text>{date}</Card.Text>
                        <Button className="btn btn-outline-info">Learn More <span className="btn-outline-dark"><i className="fas fa-chevron-right"></i></span></Button>
                    </Card.Footer>
                    
                </Card.Body>
            </Card>
        </div>
        
    );
};

export default Service;