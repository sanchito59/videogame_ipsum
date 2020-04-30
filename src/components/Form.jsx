import React from "react";
import styled from "styled-components";
import Button from "./Button";
import TerminalInput from "./TerminalInput";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IpsumForm = styled.form`
  background-color: black;
  border-radius: 8px;
  width: 50%;
  margin: 0 auto;
  text-align: center;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const Label = styled.label`
  font-family: "Press Start 2P", cursive;
  color: white;
  font-size: 1.1rem;
  padding-left: 10px;
`;

// const Input = styled.input`
//   font-family: "Press Start 2P", cursive;
//   padding-bottom: 5px;
//   background-color: black;
//   color: white;
//   text-shadow: -1px -1px black, 1px 1px white;
//   width: 40px;
//   margin: 1%;
//   text-align: center;
//   border: 0px;
//   border-bottom: 2.5px solid white;
//   @keyframes blink {
//     50% {
//       border-bottom-color: black;
//     }
//   }
//   animation: blink 0.7s step-end infinite alternate;
//   ::placeholder {
//     color: white;
//   }
//   :focus {
//     outline: none;
//     border-bottom: 2.5px solid rgb(36, 189, 127);
//     ::placeholder {
//       color: rgb(36, 189, 127);
//       text-shadow: -1px -1px black, 1px 1px rgb(36, 189, 127);
//     }
//   }
// `;

const GenerateButton = styled(Button)`
  margin-left: 20px;
  &::before {
    font-family: "Font Awesome 5 Free";
    content: "\f11b";
    padding-right: 5px;
    font-weight: 600;
  }
  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;

const RetroMenuSelectIcon = styled(FontAwesomeIcon)`
  margin-right: 20px;
  color: white;
  font-size: 1.3rem;
`;

export default function Form(props) {
  const { ipsumGeneration, handleIpsumGeneration } = props;
  return (
    <>
      <IpsumForm action="" onSubmit={ipsumGeneration}>
        <RetroMenuSelectIcon icon={faChevronRight} />
        <TerminalInput
          placeholder="1"
          type="text"
          onChange={handleIpsumGeneration}
          autoFocus={true}
        />
        <Label>paragraphs</Label>
        <GenerateButton>Generate!</GenerateButton>
      </IpsumForm>
    </>
  );
}
