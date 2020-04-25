import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

const IpsumForm = styled.form`
  background-color: rgb(110, 127, 128);
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
  &::before {
    font-family: "Font Awesome 5 Free";
    content: "\f11b";
    padding-right: 5px;
    font-weight: 600;
  }
`;

export default function Form(props) {
  const { ipsumGeneration, handleIpsumGeneration } = props;
  return (
    <>
      <IpsumForm action="" onSubmit={ipsumGeneration}>
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
