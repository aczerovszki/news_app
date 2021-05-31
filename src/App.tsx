import React, { useState, useEffect } from 'react';
import Server from './Server';
import styled from 'styled-components';
import Modal from './components/Modal';
import { Login } from './components/Login';
import Nav from './components/Nav';
import { About } from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';
import { Home } from './components/Home';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [sources, setSources] = useState([]);
  const [option, setOption] = useState('bbc-news');
  const [show, setShow] = useState(false);
  /*   const history = useHistory();
  const match = useRouteMatch(); */

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

  const handleModal = () => {
    setShow(true);
    /*  history.push(match.url) */
  };

  const handleClose = () => {
    setShow(false);
  };

  useEffect(() => {
    getSources();
    getArticles(option);
  }, []);

  return (
    <>
      <Router>
        <Nav handleModal={handleModal} />
        <Switch>
          <Route path='/about'>
            <Modal show={show} onClose={handleClose}>
              <Login />
            </Modal>
            <About />
          </Route>
          <Route exact path='/'>
            <Modal show={show} onClose={handleClose}>
              <Login />
            </Modal>
            <Home
              option={option}
              sources={sources}
              handleSubmission={handleSubmission}
              articles={articles}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
