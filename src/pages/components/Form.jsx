import React from "react";
import styled from "styled-components";

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

const Button = styled.button`
  border-radius: 8px;
  text-transform: uppercase;
  margin-top: 1%;
  margin-bottom: 1%;
  margin-left: 5%;
`;

export default function Form() {
  return (
    <>
      <IpsumForm>
        <Input placeholder="3" />
        <Label>paragraphs</Label>
        <Button>Generate!</Button>
      </IpsumForm>
    </>
  );
}
