import React from 'react';
import styled from 'styled-components';
import './StarWars.css';

const CharCard = styled.div`
    background: black;
    color: white;
    padding: 2%;
    margin: 2%;
    width: 40%;

    @media (max-width: 500px) {
        width: 80%;
        margin: 2% auto;
    }
`;

const Info = styled.p`
    font-family: 'Press Start 2p';
`;

const Name = styled(Info)`
    font-size: 20px;
    color: red;
`;

export default function Character(props) {
    return (
        <CharCard>
            <Name>Name: {props.name} </Name>
            <Info>Hair Color: {props.hair} </Info>
            <Info>Eye Color: {props.eye} </Info>
            <Info>Skin Color: {props.skin} </Info>
        </CharCard>
    );
}