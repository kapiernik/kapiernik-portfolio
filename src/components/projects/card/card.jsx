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

const Body = styled(CardBody)`
    padding: 1.5rem;
    position: relative;
    bottom: 0;
`;

const Title = styled(CardTitle)`
    margin-bottom: 1.875rem;
`;

const ButtonLink = styled(Button)`
    margin-bottom: 1.875rem;
    background-color: #ffbb00;
    border-color: #ffbb00;
    &:hover{
        background-color: #f6b501;
        border-color: #f6b501;
        box-shadow: 0 5px 15px rgb(0 0 0 / 5%), 0 4px 10px rgba(246, 181, 1, 0.25);
    }
    &:not(:disabled):not(.disabled).active, &:not(:disabled):not(.disabled):active{
        background-color: #ffbb00;
        border-color: #ffbb00;
    }
`;

const Card = (props) => {
    return ( 
        <Container style={{ maxWidth: "200px" }}>
        <CardImg src={props.imageUrl} />
        <Body>
            <Title>{props.name}</Title>
            <ButtonLink href={props.url}>Read more &rarr;</ButtonLink>
        </Body>
        </Container>
     );
}
 
export default Card;