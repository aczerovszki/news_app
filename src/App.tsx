import React, { useState, useEffect } from 'react';
import { Card } from './components/Card';
import  Server from './Server';
import styled from 'styled-components';

const App = () => {
  const [sources, setSources] = useState([]);
  const articles = async () =>{
    setSources(await Server())
  } 
  
  useEffect(() => {
    articles()
  
  }, []);

  const Header = styled.h1`
    text-align: center;
    margin: 1em;
  `;
  const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    grid-gap: 2em;
  `;

  return (
    <>
      <Header>Latest Apple News</Header>
      <Container>
        {sources.map((data) => {
          return <Card data={data} />;
        })}
      </Container>
    </>
  );
};

export default App;
