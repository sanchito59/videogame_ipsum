import React from "react";
import styled from "styled-components";
import PageTitle from "./components/PageTitle";
import IpsumForm from "./components/Form";

const Page = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(36, 38, 47);
`;

export default function Homepage() {
  return (
    <Page>
      <PageTitle>Video Game Ipsum</PageTitle>
      <IpsumForm></IpsumForm>
    </Page>
  );
}
