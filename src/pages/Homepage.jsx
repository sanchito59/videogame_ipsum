import React from "react";
import styled from "styled-components";
import PageTitle from "../components/PageTitle";
import SubTitle from "../components/SubTitle";
import IpsumForm from "../components/Form";
import Results from "../components/Results";

const Page = styled.div`
  width: 100%;
  min-height: 100vh;
  max-height: 100%;
  background-color: black;
`;

export default function Homepage(props) {
  const {
    handleIpsumGeneration,
    ipsumGeneration,
    loremIpsum,
    paragraphNumber,
    handleClickShowAlert,
    showingAlert,
  } = props;

  console.log("homepage props: ", props);
  return (
    <Page>
      <PageTitle>Video Game Ipsum</PageTitle>
      <SubTitle>gaming themed lorem ipsum generator</SubTitle>
      <IpsumForm
        handleIpsumGeneration={handleIpsumGeneration}
        ipsumGeneration={ipsumGeneration}
        paragraphNumber={paragraphNumber}
      />
      <Results
        loremIpsum={loremIpsum}
        showingAlert={showingAlert}
        handleClickShowAlert={handleClickShowAlert}
      />
    </Page>
  );
}
