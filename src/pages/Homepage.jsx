import React from "react";
import styled from "styled-components";
import PageTitle from "./components/PageTitle";
import IpsumForm from "./components/Form";
import Results from "./components/Results";

const Page = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(36, 38, 47);
`;

export default function Homepage(props) {
  const {
    handleIpsumGeneration,
    ipsumGeneration,
    paragraphNumber,
    loremIpsum,
  } = props;

  console.log("homepage props: ", props);
  return (
    <Page>
      <PageTitle>Video Game Ipsum</PageTitle>
      <IpsumForm
        handleIpsumGeneration={handleIpsumGeneration}
        ipsumGeneration={ipsumGeneration}
        paragraphNumber={paragraphNumber}
      />
      <Results loremIpsum={loremIpsum} />
    </Page>
  );
}