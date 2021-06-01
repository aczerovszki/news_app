import react from 'react'
import styled from 'styled-components';
import { SearchForm } from './SearchForm';
import { Card } from './Card';

interface Props {
    option: string,
    sources: Array<object>,
    handleSubmission: Function,
    articles: Array<object>
}

export const Home = (props:Props) => {
  const Header = styled.h1`
    text-align: center;
    font-size: 38px;
    margin: 1.5em;
  `;

  const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    grid-gap: 2em;
  `;

    return(
        <>
       <Header>
              Latest from {props.option.charAt(0).toUpperCase() + props.option.slice(1)}
            </Header>
            <SearchForm sources={props.sources} onSubmit={props.handleSubmission} />
            <Container>
              {props.articles.map((article:any) => {
                return <Card article={article} />;
              })}
            </Container>
        </>
    )
}