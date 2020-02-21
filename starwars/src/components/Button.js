import React from 'react';
import styled from 'styled-components';
import './StarWars.css';


const CustmBtn = styled.button`
    font-family: 'Press Start 2p';
    padding: 0.5% 1%;
    font-size: 10px;
    border-radius: 5px;

    &:hover {
        background: red;
        color: white;
        border: 2px solid black;
    }
`;

export default function Button(props) {
    return(
        <div>
            <CustmBtn onClick={() => props.setPage(props.page + 1)}>Next Page!</CustmBtn>
        </div>

    );
}