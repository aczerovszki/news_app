import React, { useState, useEffect } from 'react';
import { Card } from './components/Card';
import Server from './Server';
import styled from 'styled-components';
import { SearchForm } from './components/SearchForm';
import Modal from './components/Modal';
import { Login } from './components/Login';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [sources, setSources] = useState([]);
  const [option, setOption] = useState("bbc-news");
  const [show, setShow] = useState(false);

  const getSources = async () => {
    setSources(await Server().getSources());
  };
  const getArticles = async (option: any) => {
    setArticles(await Server().getArticles(option));
  };

  const handleSubmission = (event: any, option: any) => {
    event.preventDefault();
    setOption(option);
    getArticles(option);
  };

  useEffect(() => {
    getSources();
    getArticles(option);
  }, []);

  const Header = styled.h1`
    text-align: center;
    margin: 2em 1em 1em;
  `;
  const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    grid-gap: 2em;
  `;

  const Button = styled.button`
    :hover {
      background: repeating-linear-gradient(180deg, #404040, #000000 100px);
      box-shadow: 2px 2px 6px 0px rgb(0 0 0 / 30%);
    }
    padding: 0.7em 3.3em;
    border-radius: 1em;
    position: absolute;
    right: 2em;
    top: 2em;
    border: none;
    text-align: center;
    color: #fff;
    text-decoration: none;
    transition: 0.3s;
    background: repeating-linear-gradient(180deg, #404040, #000000 100px);
  `;

  return (
    <>
      <Button onClick={() => setShow(true)} id="myBtn">
        Login
      </Button>
      <Header>
        Latest {option.charAt(0).toUpperCase() + option.slice(1)} News
      </Header>
      <SearchForm sources={sources} onSubmit={handleSubmission} />
      <Modal show={show} onClose={() => setShow(false)}>
        <Login></Login>
      </Modal>
      <Container>
        {articles.map((article) => {
          return <Card article={article} />;
        })}
      </Container>
    </>
  );
};

export default App;
