import styled from "styled-components";

const Button = styled.button`
  text-align: center;
  display: inline-block;
  margin: 5px;
  font-weight: bold;
  padding: 10px 0 10px 10px;
  background-color: lightgray;
  text-shadow: -1px -1px black, 1px 1px white;
  color: gray;
  -webkit-border-radius: 7px;
  -moz-border-radius: 7px;
  -o-border-radius: 7px;
  border-radius: 7px;
  box-shadow: 0 0.2em gray;
  cursor: pointer;
  :active {
    box-shadow: none;
    position: relative;
    top: 0.2em;
  }
  :focus {
    outline: none;
  }
  text-transform: uppercase;
  font-family: "Press Start 2P", cursive;
`;

export default Button;
