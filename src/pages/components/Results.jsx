import React from "react";
import ClipboardJS from "clipboard";
import styled from "styled-components";
import Button from "./../components/Button";

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
  margin: 10px auto;
  color: white;
`;

new ClipboardJS("#copy");

export default function Results(props) {
  const { loremIpsum } = props;
  console.log(typeof loremIpsum);
  console.log(loremIpsum);
  return (
    <>
      <ResultsContainer>
        <Button id="copy" data-clipboard-target="#results">
          Copy
        </Button>
        {loremIpsum.map((paragraph, i) => {
          return (
            <ResultsParagraph key={i} id="results">
              {paragraph}
            </ResultsParagraph>
          );
        })}
      </ResultsContainer>
      ;
    </>
  );
}
