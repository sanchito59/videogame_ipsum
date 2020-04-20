import React from "react";
import ClipboardJS from "clipboard";
import styled from "styled-components";
import Button from "./../components/Button";

const OuterContainer = styled.div`
  background-color: rgb(110, 127, 128);
  width: 50%;
  border-radius: 8px;
  padding-top: 30px;
  padding-bottom: 10px;
  margin: 40px auto;
  text-align: left;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const ResultsContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  margin: 0px auto;
  text-align: left;
  text-transform: lowercase;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const ResultsParagraph = styled.p`
  width: 90%;
  margin: 10px auto;
  color: white;
`;

const CopyButton = styled(Button)`
  padding: 10px;
  &::before {
    font-family: "Font Awesome 5 Free";
    content: "\f0c5";
    padding-right: 5px;
  }
`;

new ClipboardJS("#copy");

export default function Results(props) {
  const { loremIpsum } = props;
  console.log(typeof loremIpsum);
  console.log(loremIpsum);
  return (
    <>
      <OuterContainer>
        <CopyButton id="copy" data-clipboard-target="#results">
          Copy
        </CopyButton>
        <ResultsContainer id="results">
          {loremIpsum.map((paragraph, i) => {
            return <ResultsParagraph key={i}>{paragraph}</ResultsParagraph>;
          })}
        </ResultsContainer>
      </OuterContainer>
      ;
    </>
  );
}
