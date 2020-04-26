import React from "react";
import styled from "styled-components";
import Button from "./Button";
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
  color: white;
  font-size: 1.3rem;
  padding-left: 10px;
`;

const Input = styled.input`
  width: 40px;
  border-radius: 4px;
  margin: 1%;
  text-align: center;
`;

const GenerateButton = styled(Button)`
  margin-left: 20px;
  &::before {
    font-family: "Font Awesome 5 Free";
    content: "\f11b";
    padding-right: 5px;
    font-weight: 600;
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
        <Input
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
