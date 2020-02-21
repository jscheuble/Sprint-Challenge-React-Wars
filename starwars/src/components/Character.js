import React from 'react';
import styled from 'styled-components';

const CharCard = styled.div`
    background: black;
    color: white;
`;

export default function Character(props) {
    return (
        <CharCard>
            <p>Name: {props.name} </p>
            <p>Hair Color: {props.hair} </p>
            <p>Eye Color: {props.eye} </p>
            <p>Skin Color: {props.skin} </p>
        </CharCard>
    );
}