import React from "react";
import styled from "styled-components";
import PageTitle from "../components/PageTitle";
import SubTitle from "../components/SubTitle";
import IpsumForm from "../components/Form";
import Results from "../components/Results";
import HighScoreAlert from "./../components/HighScoreAlert";
import Footer from "../components/Footer";

const Page = styled.div`
  width: 100%;
  min-height: 100vh;
  max-height: 100%;
  background-color: black;
  text-shadow: 0 0 5px #c8c8c8;
  padding-bottom: 20px;
`;

export default function Homepage(props) {
  const {
    handleIpsumGeneration,
    generateClicks,
    ipsumGeneration,
    loremIpsum,
    paragraphNumber,
  } = props;

  const flashMessage = () => {
    // setTimeout(function () {
    //   return "none";
    // }, 10000);
    return generateClicks > 10 ? "block" : "none";
  };

  return (
    <Page>
      <PageTitle>Video Game Ipsum</PageTitle>
      <SubTitle>gaming themed lorem ipsum generator</SubTitle>
      <HighScoreAlert style={{ display: flashMessage() }}>
        <SubTitle>New High Score!</SubTitle>
      </HighScoreAlert>
      <IpsumForm
        handleIpsumGeneration={handleIpsumGeneration}
        ipsumGeneration={ipsumGeneration}
        paragraphNumber={paragraphNumber}
      />
      <Results loremIpsum={loremIpsum} />
      <Footer />
    </Page>
  );
}
