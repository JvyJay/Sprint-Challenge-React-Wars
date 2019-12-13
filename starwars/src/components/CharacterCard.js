import React from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

const CharacterCard = props => {
  return (
    <Card>
      <CardBody>
        <CardTitle>Name: {props.name}</CardTitle>
        <CardText>Height: {props.height}</CardText>
        <CardText>Mass: {props.mass}</CardText>
        <CardText>Birth Year: {props.birth_year}</CardText>
        <CardText>Homeworld: {props.homeworld}</CardText>
      </CardBody>
    </Card>
  );
};

export default CharacterCard;
