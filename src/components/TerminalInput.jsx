import styled from "styled-components";

const TerminalInput = styled.input`
  font-family: "Press Start 2P", cursive;
  padding-bottom: 5px;
  background-color: black;
  color: white;
  text-shadow: -1px -1px black, 1px 1px white;
  width: 40px;
  margin: 1%;
  text-align: center;
  border: 0px;
  border-bottom: 2.5px solid white;

  @keyframes blink {
    50% {
      border-bottom-color: black;
    }
  }

  animation: blink 0.7s step-end infinite alternate;
  ::placeholder {
    color: white;
  }

  :focus {
    outline: none;

    color: rgb(36, 189, 127);
    text-shadow: -1px -1px black, 1px 1px rgb(36, 189, 127);
    border-bottom: 2.5px solid rgb(36, 189, 127);

    ::placeholder {
      color: rgb(36, 189, 127);
      text-shadow: -1px -1px black, 1px 1px rgb(36, 189, 127);
    }
  }
`;

export default TerminalInput;
