import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Nav = (props:any) => {
const [isOpen, setIsOpen] = useState(false);
const [show, setShow] = useState(false)

interface Menu{
    isOpen: boolean
}

const MenuItem = styled.p`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #000000;
  transition: all 0.3s ease-in;
  font-size: 1em;
  &:hover {
    color: #7b7fda;
  }
`;

const Navbar = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 1.5em;
`;


const Menu = styled.div<Menu>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  a{
    text-decoration: none;
  }
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
    margin: 2em;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  margin: 1.5em 0;
  span {
    height: 2px;
    width: 25px;
    background: #000000;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  
  }
`;

const Button = styled.button`
:hover {
  background: repeating-linear-gradient(180deg, #404040, #000000 100px);
  box-shadow: 2px 2px 6px 0px rgb(0 0 0 / 30%);
}
padding: 0.7em 3.3em;
border-radius: 1em;
border: none;
text-align: center;
color: #fff;
text-decoration: none;
transition: 0.3s;
background: repeating-linear-gradient(180deg, #404040, #000000 100px);
`;


    return (
        <>
        <Navbar>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <span />
                <span />
                <span />
            </Hamburger>
            <Menu isOpen={isOpen}>
                <Link to="/">
                    <MenuItem>Home</MenuItem>
                </Link>
                <Link to="/about">
                    <MenuItem>About</MenuItem>
                </Link>
               
                    <MenuItem><Button onClick={props.handleModal} >Log in</Button></MenuItem>
                
            </Menu>
            </Navbar>
        </>
    )
}

export default Nav