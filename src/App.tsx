import React, { useState, useEffect } from 'react';
import Server from './Server';
import Modal from './components/Modal';
import { Login } from './components/Login';
import Nav from './components/Nav';
import { About } from './components/About';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import { Home } from './components/Home';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [sources, setSources] = useState([]);
  const [option, setOption] = useState('bbc-news');
  const [show, setShow] = useState(false);
  const [path, setPath] = useState('');
  const history = useHistory();
  const location = useLocation();

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
    setPath(location.pathname);
  };

  const handleClose = () => {
    setShow(false);
    history.goBack();
  };

  useEffect(() => {
    getSources();
    getArticles(option);
  }, []);

  return (
    <>
      <Nav handleModal={handleModal} />
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/login'>
          <Modal show={show} onClose={handleClose}>
            <Login />
          </Modal>
          {path === '/about' ? (
            <About />
          ) : (
            <Home
              option={option}
              sources={sources}
              handleSubmission={handleSubmission}
              articles={articles}
            />
          )}
        </Route>
        <Route exact path='/'>
          <Home
            option={option}
            sources={sources}
            handleSubmission={handleSubmission}
            articles={articles}
          />
        </Route>
      </Switch>
    </>
  );
};

export default App;
