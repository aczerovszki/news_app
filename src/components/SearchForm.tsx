import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  onSubmit: Function,
  sources: Array<object>
}

export const SearchForm = (props:Props) => {
  const [option, setOption] = useState('');

  const Form = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 0.6em;
    width: 300px;
    justify-content: center;
    margin: 4em auto;

    select {
      border: 1px solid #ccc;
      box-shadow: 2px 2px 6px 0px rgb(0 0 0 / 30%);
      border-radius: 0.95em;
      padding: 0.6em;
      width: 20.45em;
      margin: 0 1em;
      outline: none;
    }

    input {
      :hover {
        background: repeating-linear-gradient(180deg, #404040, #000000 100px);
        box-shadow: 2px 2px 6px 0px rgb(0 0 0 / 30%);
      }
      padding: 0.7em 1.2em;
      border-radius: 1em;
      margin: 0.5em 1em;
      border: none;
      text-align: center;
      color: #fff;
      text-decoration: none;
      transition: 0.3s;
      background: repeating-linear-gradient(180deg, #404040, #000000 100px);
      outline: none;
    }
  `;

  return (
    <>
      <Form onSubmit={(event) => props.onSubmit(event, option)}>
        <label>Here you can choose your source</label>
        <select onChange={(event) => setOption(event.target.value)}>
          <option value="nothing">
            {option.charAt(0).toUpperCase() + option.slice(1) ||
              "Select an option..."}
          </option>
          {props.sources.map((source: any) => {
            return (
              <option key={source.id} value={source.id}>
                {source.name}
              </option>
            );
          })}
        </select>
        <input type="submit" value="Search" />
      </Form>
    </>
  );
};
