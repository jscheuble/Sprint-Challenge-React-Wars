import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    Axios.get(`https://swapi.co/api/people/?page=${page}`)
    .then(res => {
      console.log(res.data.results);
      setData(res.data.results);
    })
    .catch(err => {
      console.log(err);
    })
  }, [page]);

  return (
    <div className='App'>
      <h1 className='Header'>React Wars</h1>
      <CardContainer>
      {data.map((item, i) => {
        return <Character key={i} hair={item.hair_color} eye={item.eye_color} name={item.name} skin={item.skin_color}/>
      })}
      </CardContainer>
      <button setPage={setPage} page={page} onClick={() => setPage(page + 1)} >Next Page!</button>
    </div>
  );
}

export default App;
