import React from "react";
import { Card, ListGroup } from "react-bootstrap";
const Footer = () => {
  return (
    // <footer className="w-100 mt-auto bg-secondary p-4">

    //   <div className="container text-center mb-5">

    //     <h4>Brought to you by the Tech Team 5ive.</h4>

    //   </div>

    //   <div className="container flex-row justify-space-between-lg justify-center align-center">
    //     <h5 className='col-2'>Basu</h5>
    //     <h5 className='col-2'>Christian</h5>
    //     <h5 className='col-2'>Cooper</h5>
    //     <h5 className='col-2'>Greg</h5>
    //     <h5 className='col-2'>Kirk</h5>
    //   </div>

    // </footer>

    <Card style={{ width: "61.5rem" }}>
      <ListGroup variant="flush" style={{ alignItems: "center" }}>
        <ListGroup.Item>Brought to you by the Tech Team 5ive</ListGroup.Item>
        <ListGroup.Item>Basu</ListGroup.Item>
        <ListGroup.Item>Christian</ListGroup.Item>
        <ListGroup.Item>Cooper</ListGroup.Item>
        <ListGroup.Item>Greg</ListGroup.Item>
        <ListGroup.Item>Kirk</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default Footer;
