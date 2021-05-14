import React, { useState, useEffect } from "react";
import { Card } from "./components/Card";
import styled from "styled-components";

const App = () => {
  const [sources, setSources] = useState([]);
  const url =
    "https://newsapi.org/v2/everything?" +
    "q=Apple&" +
    "from=2021-05-05&" +
    "sortBy=popularity&" +
    "apiKey=8f916adb954c4f1194294d4b552bf852";

  const getSources = async () => {
    const res = await fetch(url);
    const data = await res.json();
    const articles = data.articles;
    console.log(articles);
    setSources(articles);
  };

  useEffect(() => {
    getSources();
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
