import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';

const DocServices = ({service}) => {
    const { name, date,header, img } = service;
    return (
        <div className="service m-lg-2 p-lg-2">
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="text-center text-info">{name}</Card.Title>
                    <Card.Text><h5>Join Date : {date}</h5></Card.Text>
                    <Card.Footer className="">
                        <Button className="btn btn-outline-info">Learn More <span className="btn-outline-dark"><i className="fas fa-chevron-right"></i></span></Button>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </div>
        
    );
};

export default DocServices;