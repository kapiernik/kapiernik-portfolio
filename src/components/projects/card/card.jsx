import React from 'react';
import styled from 'styled-components';
import {
    Card as CardContainer,
    CardTitle,
    CardImg,
    CardBody,
    Button
  } from "shards-react";

const Container = styled(CardContainer)`
    margin: 30px;
`;

const Title = styled(CardTitle)`
    margin-bottom: 1.875rem;
`;

const Card = (props) => {
    return ( 
        <Container style={{ maxWidth: "200px" }}>
        <CardImg src="https://place-hold.it/200x150" />
        <CardBody>
            <Title>Lorem Ipsum</Title>
            <Button>Read more &rarr;</Button>
        </CardBody>
        </Container>
     );
}
 
export default Card;