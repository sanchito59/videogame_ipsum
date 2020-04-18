import React from "react";
import styled from "styled-components";

const ResultsContainer = styled.div`
  background-color: rgb(110, 127, 128);
  width: 50%;
  border-radius: 8px;
  padding-top: 30px;
  padding-bottom: 30px;
  margin: 40px auto;
  text-align: left;
  text-transform: lowercase;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const ResultsParagraph = styled.p`
  width: 90%;
  margin: 0 auto;
  color: white;
`;

export default function Results(props) {
  const { loremIpsum } = props;
  return (
    <>
      <ResultsContainer>
        <ResultsParagraph>{loremIpsum}</ResultsParagraph>
      </ResultsContainer>
      ;
    </>
  );
}
