import React from "react";

import { Row, Col, Card as RBCard, Button as RBButton } from "react-bootstrap";
import Card from "../src/components/Card";
const Task05 = () => {
  return (
    <Row>
      <Col>
        <RBCard style={{ width: "18rem" }}>
          <RBCard.Img variant="top" src="https://picsum.photos/100/80" />
          <RBCard.Body>
            <RBCard.Title>Card Title</RBCard.Title>
            <RBCard.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </RBCard.Text>
            <RBButton variant="primary">Go somewhere</RBButton>
          </RBCard.Body>
        </RBCard>
      </Col>
      <Col>
        <Card
          title="Card Title"
          text="Some quick example text to build on the card title and make up the bulk of the card's content."
          imgSrc="https://picsum.photos/100/80"
          buttonText="Go somewhere"
        />
      </Col>
    </Row>
  );
};

export default Task05;
