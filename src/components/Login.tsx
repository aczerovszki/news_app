import react, {useState} from 'react'
import styled from 'styled-components';


export const Login = () => {
  

    const Form = styled.form`
        display: flex;
        flex-direction: column;
        gap: .6em;
        width: 300px;
        justify-content: center;
        margin: 4em auto;

        h1{
            text-align: center;
        }

        input{
            border: 1px solid #ccc;
            box-shadow: 2px 2px 6px 0px rgb(0 0 0 / 30%);
            border-radius: .95em;
            padding: 0.6em;
            width: 20.45em;
            margin: 0 1em;
            outline: none;
            align-self: center;
        }

        button{
            :hover {
                background: repeating-linear-gradient(180deg, #404040, #000000 100px);
                box-shadow: 2px 2px 6px 0px rgb(0 0 0 / 30%);
              }
              padding: 0.7em 3.3em;
              align-self: center;
              border-radius: 1em;
              margin: 0.5em 1em;
              border: none;
              text-align: center;
              color: #fff;
              text-decoration: none;
              transition: 0.3s;
              background: repeating-linear-gradient(180deg, #404040, #000000 100px);
    
    `

    return(
        <>
            <Form>
                <h1>Login</h1>
                <input type="email" name="email" id="email" placeholder="Email"/>
                <input type="password" name="password" id="password" placeholder="Password"/>
                <button type="submit">Submit</button>
            </Form>
        </>
    )
}

