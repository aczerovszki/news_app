import React from 'react';
import styled from 'styled-components';
import {cardData} from '../interfaces/model';

interface Props {
  [key: string]:cardData;
} 

export const Card = ({ article }:Props) => {
  const CardBox = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    box-shadow: 2px 2px 6px 0px rgb(0 0 0 / 30%);
    border-radius: 20px;
  `;

  const CardHeader = styled.div`
    margin: 0.5em 1.2em;
    display: flex;
    justify-content: space-between;
    gap: 0.5em;

    h2{
      margin-block-start: .6em;
    }
  
    p {
      padding: 0.3em;
      height: fit-content;
      background-color: darkgrey;
      border-radius: 0.5em;
    }
  `;

  const CardImage = styled.img`
    max-width: 100%;
  `;

  const CardText = styled.p`
    margin: 1em;
    font-size: 18px;
    text-align: justify;
    line-height: 23px;
  `;
  const CardButton = styled.a`
    :hover {
      background: repeating-linear-gradient(180deg, #404040, #000000 100px);
      box-shadow: 2px 2px 6px 0px rgb(0 0 0 / 30%);
    }
    padding: 0.7em 1.2em;
    border-radius: 1em;
    margin: 0 1.3em 1.3em;
    border: none;
    text-align: center;
    color: #fff;
    text-decoration: none;
    transition: 0.3s;
    background: repeating-linear-gradient(180deg, #404040, #000000 100px);
  `;

  const getPublishedDate = () =>{
    return new Date(article.publishedAt).toLocaleDateString()
  }

  return (
    <CardBox>
      <CardHeader>
        <h2>{article.title}</h2>
        <p>{getPublishedDate()}</p>
      </CardHeader>
      <CardImage src={article.urlToImage} alt="" />
      <CardText>{article.description}</CardText>
      <CardButton href={article.url} target="_blank">
        Read More
      </CardButton>
    </CardBox>
  );
};
